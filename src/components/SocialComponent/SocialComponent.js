import "./SocialComponent.scss";

/**
 * @function SocialComponent test components
 * @returns {JSX.Element}
*/
const SocialComponent = () => {
    return (
        <div className="socials-block">
            <div className="socials-wrapper">
                <div className="link-wrapper">
                    <a aria-label="Social link" class=" link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/germantagli"><div data-name="icon-facebook" class="styled__SvgIcon-sc-1mehu68-0 bnYizL"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M12.026 6.81v4.13H9v5.051h3.026V31h6.216V15.992h4.171s.391-2.422.58-5.07h-4.728V7.469c0-.516.678-1.21 1.348-1.21H23V1.001h-4.605c-6.523 0-6.369 5.055-6.369 5.81z"></path></svg></div></a>
                </div>
                <div class="link-wrapper ">
                    <a aria-label="Social link" class=" link" target="_blank" rel="noopener noreferrer" href="https://github.com/germantagli">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
                <div class="link-wrapper ">
                    <a aria-label="Social link" class=" link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/german-tagliaferri-241b1838/"><div data-name="icon-linkedin" class="styled__SvgIcon-sc-1mehu68-0 bnYizL"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M29.333 18.777v9.83h-5.716v-9.172c0-2.304-.827-3.876-2.896-3.876-1.579 0-2.519 1.06-2.933 2.085-.151.366-.19.877-.19 1.389v9.574h-5.717s.077-15.534 0-17.144h5.717v2.43l-.038.055h.038v-.055c.76-1.166 2.116-2.833 5.152-2.833 3.762 0 6.582 2.45 6.582 7.716zM5.902 3.2c-1.956 0-3.235 1.279-3.235 2.961 0 1.646 1.242 2.964 3.159 2.964h.038c1.994 0 3.234-1.318 3.234-2.964C9.06 4.479 7.858 3.2 5.902 3.2zM3.006 28.608h5.715V11.464H3.006v17.144z"></path></svg></div></a>
                </div>
                <div class="link-wrapper ">
                    <a aria-label="Social link" class=" link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com"><div data-name="icon-instagram" class="styled__SvgIcon-sc-1mehu68-0 bnYizL"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M16 8.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 12.188A4.695 4.695 0 0111.312 16c0-2.586 2.104-4.688 4.688-4.688s4.688 2.102 4.688 4.688A4.695 4.695 0 0116 20.688zm8.063-11.751a.999.999 0 110-1.997.999.999 0 010 1.997zM21.625 1h-11.25A9.376 9.376 0 001 10.375v11.25A9.376 9.376 0 0010.375 31h11.25A9.376 9.376 0 0031 21.625v-11.25A9.376 9.376 0 0021.625 1zm6.563 20.625a6.57 6.57 0 01-6.563 6.563h-11.25a6.57 6.57 0 01-6.563-6.563v-11.25a6.57 6.57 0 016.563-6.563h11.25a6.57 6.57 0 016.563 6.563v11.25z"></path></svg></div></a>
                </div>
            </div>

        </div>
    )
};

SocialComponent.propTypes = {};

SocialComponent.defaultProps = {};

export default SocialComponent;