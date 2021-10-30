import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-earth-77729.herokuapp.com/spots')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (

        <div>
            <span style={{ position: 'relative', fontSize: '5em', color: '#a7f2c5a4', top: '50px', right: '0', left: '30px' }}>Spots</span>
            <Row lg={2} xs={1} id="services" className="container mx-auto my-2">
                {
                    services?.map(service => <Service key={service._id} data={service}>
                        <Link to={'/spots/' + service._id}>
                            <button className="btn btn-dark">Book Now</button>
                        </Link>
                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;