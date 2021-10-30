import React from 'react';
import { Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
//long and short description.
const Service = ({ data, children }) => {
    const { img, price, name, description } = data;

    return (
        <Col >
            <div className="card mb-3 service" style={{ maxWidth: '900px' }}>
                <div className="row g-0">
                    <div className="col-md-12">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-12">
                        <div className="card-body text-center">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"> <strong className="fs-3">Price: ${price}</strong></p>
                            {
                                children
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Service;