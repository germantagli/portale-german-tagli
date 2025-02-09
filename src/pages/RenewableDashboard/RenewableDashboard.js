import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Table, Nav, Tab } from "react-bootstrap";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, RadarController, Tooltip, Legend } from "chart.js";
import { Bar, Radar } from "react-chartjs-2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Registrar los componentes de Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, RadarController, Tooltip, Legend);

const RenewableDashboard = () => {
    const [chartData, setChartData] = useState(null);

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
        <Container fluid>
            <h1 className="text-center my-4">Dashboard de Energía Renovable</h1>
            
            <Tab.Container defaultActiveKey="kpi">
                <Nav variant="tabs" className="mb-3">
                    <Nav.Item>
                        <Nav.Link eventKey="kpi">KPIs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="barchart">Gráfico de Barras</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="radarchart">Gráfico de Radar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="table">Tabla de Datos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="map">Mapa</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <Tab.Content>
                    <Tab.Pane eventKey="kpi">
                        <Row className="mb-4">
                            {buildings.map(building => (
                                <Col key={building.id} md={6} lg={4}>
                                    <Card className="p-3">
                                        <Card.Body>
                                            <Card.Title>{building.name}</Card.Title>
                                            <Card.Text>
                                                Tamaño: {building.size} m²<br/>
                                                Pisos: {building.floors}<br/>
                                                Consumo: {building.energyConsumption} kWh<br/>
                                                Potencial Solar: {building.solarPotential}%
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="barchart">
                        <Row className="mb-4">
                            <Col>
                                {chartData && <Bar data={chartData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />}
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="radarchart">
                        <Row className="mb-4">
                            <Col>
                                <Radar data={{
                                    labels: ["Consumo Energético", "Potencial Solar"],
                                    datasets: buildings.map(b => ({
                                        label: b.name,
                                        data: [b.energyConsumption, b.solarPotential],
                                        backgroundColor: "rgba(255, 99, 132, 0.2)"
                                    }))
                                }} options={{ responsive: true }} />
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="table">
                        <Row className="mb-4">
                            <Col>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Tamaño (m²)</th>
                                            <th>Pisos</th>
                                            <th>Consumo (kWh)</th>
                                            <th>Potencial Solar (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {buildings.map(b => (
                                            <tr key={b.id}>
                                                <td>{b.name}</td>
                                                <td>{b.size}</td>
                                                <td>{b.floors}</td>
                                                <td>{b.energyConsumption}</td>
                                                <td>{b.solarPotential}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="map">
                        <Row>
                            <Col>
                                <MapContainer center={[43.6532, -79.3832]} zoom={12} style={{ height: "400px", width: "100%" }}>
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
                                    {buildings.map(building => (
                                        <Marker key={building.id} position={[building.lat, building.lng]}>
                                            <Popup>
                                                <b>{building.name}</b><br/>
                                                Tamaño: {building.size}m²<br/>
                                                Pisos: {building.floors}<br/>
                                                Consumo: {building.energyConsumption} kWh<br/>
                                                Potencial Solar: {building.solarPotential}%
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </Col>
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
};

export default RenewableDashboard;
