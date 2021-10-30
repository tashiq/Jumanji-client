import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Manage = () => {
    const [services, setServices] = useState([]);
    // const [del, setDel] = useState(false);
    useEffect(() => {
        fetch('http://localhost:4000/spots')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    const handleDelete = (id) => {
        const ans = window.confirm('Do you want to delete this data?');
        if (ans) {
            fetch(`http://localhost:4000/spots/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data) {
                        alert('Data successfully deleted!');
                        const newServices = services.filter(service => service._id !== id);
                        setServices(newServices);
                    }
                })

        }
    }
    return (
        <div className="mt-5 pt-3 container mx-auto">
            <Row lg={2} xs={1}>
                {
                    services.map(service => <Service key={service._id} data={service}>
                        <button className="btn btn-dark" onClick={() => handleDelete(service._id)}>Delete</button>
                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Manage;