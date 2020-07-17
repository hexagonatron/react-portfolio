import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="spacer-footer"></div>

            <footer className="footer mt-auto py-2">
                <p className="text-light text-center my-auto">Made by Ben Fawcett <a
                    href="https://github.com/hexagonatron/react-portfolio" target="_blank" rel="noopener noreferrer"><i
                        className="fab fa-github pl-1"></i></a></p>
            </footer>
        </div>
    );
};

export default Footer;