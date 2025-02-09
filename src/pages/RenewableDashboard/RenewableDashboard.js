import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./RenewableDashboard.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import React, { useEffect, useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Registrar los componentes de Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

/**
 * @function RenewableDashboard RenewableDashboard components
 * @returns {JSX.Element}
*/
const RenewableDashboard = () => {
    const [tranlastion] = useTranslation("global");
    const [chartData, setChartData] = useState(null);
    const [center] = useState([43.6532, -79.3832]); // Centro inicial del mapa

    const MapUpdater = ({ center }) => {
        const map = useMap();
        useEffect(() => {
          map.setView(center, map.getZoom());
        }, [center, map]);
      
        return null;
      };

    const buildings = [
        { id: 1, name: "Edificio A", size: 5000, floors: 10, energyConsumption: 300, energyType: "Electricidad", solarPotential: 80, windSpeed: 5, lat: 43.6532, lng: -79.3832 },
        { id: 2, name: "Edificio B", size: 7000, floors: 15, energyConsumption: 500, energyType: "Gas Natural", solarPotential: 90, windSpeed: 6, lat: 43.7000, lng: -79.4200 }
    ];

    useEffect(() => {
        setChartData({
            labels: buildings.map(b => b.name),
            datasets: [
                {
                    label: "Consumo Energético (kWh)",
                    data: buildings.map(b => b.energyConsumption),
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }
            ]
        });
    }, []);


    return (
        <div className="RenewableDashboard">
            <Container>
                <h1>esta es una pagina de prueba </h1>
                {/* Gráfico */}
                <div className="chart-container">
                    {chartData ? (
                        <Bar data={chartData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
                    ) : (
                        <p>Cargando gráfico...</p>
                    )}
                </div>


                {/* Mapa */}
                <div className="map-container" style={{ height: "400px", width: "100%" }}>
                    <MapContainer center={center} zoom={12} style={{ height: "100%", width: "100%" }}>
                        <MapUpdater center={center} />
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
                        {buildings.map((building) => (
                            <Marker key={building.id} position={[building.lat, building.lng]}>
                                <Popup>
                                    <b>{building.name}</b>
                                    <br /> Tamaño: {building.size}m²
                                    <br /> Pisos: {building.floors}
                                    <br /> Consumo: {building.energyConsumption} kWh
                                    <br /> Tipo de Energía: {building.energyType}
                                    <br /> Potencial Solar: {building.solarPotential}%
                                    <br /> Velocidad del Viento: {building.windSpeed} m/s
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </Container>
        </div>
    )
};

RenewableDashboard.propTypes = {};

RenewableDashboard.defaultProps = {};

export default RenewableDashboard;