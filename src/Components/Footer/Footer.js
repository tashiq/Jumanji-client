import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-2">
            <div className="footer">
                <div><h4>Tickets</h4>
                    <h5>a.com</h5>
                    <h5>b.com</h5>
                    <h5>c.com</h5>
                    <h5>d.com</h5>
                    <h5>e.com</h5>
                </div>
                <div><h4>Direcetion</h4>
                    <p>View on Google map <i className="fas fa-location-arrow"></i></p>
                </div>
                <div><h4>Information</h4>
                    <p>About Us</p>
                    <p>Location</p>
                    <p>Branches</p>
                    <p>Schedule</p>
                </div>
                <div><h4>Social Link</h4>
                    <span><i class="fab fa-facebook-square p-2 fs-4"></i></span>
                    <span><i class="fab fa-instagram-square p-2 fs-4"></i></span>
                    <span><i class="fas fa-envelope-square  fs-4  p-2"></i></span>
                </div>
                <div><h4>Apps</h4>
                    <p className="d-flex align-items-center bg-dark text-white p-2 rounded">
                        <p>
                            <i class="fab fa-google-play fs-2 pe-2"></i>
                        </p>
                        <p>Download from <br /> AppleStore</p></p>
                    <p className="d-flex align-items-center bg-dark text-white p-2 rounded">
                        <p>
                            <i class="fab fa-apple pe-2 fs-2"></i>
                        </p>
                        <p>Download from <br /> AppleStore</p></p>
                </div>
            </div>


            <div className="address p-2 text-center">
                <strong>
                    <p>Grainfield, KS 67737, United States</p>
                    <p>4G7P+G6 Grainfield, Kansas, USA</p>
                </strong>
            </div>
        </div>
    );
};

export default Footer;