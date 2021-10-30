import React, { useEffect, useState } from 'react';
import { Card, Row, Button, ListGroup, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Service from '../Service/Service';

const Manage = () => {
    const [users, setUsers] = useState([]);
    // const [del, setDel] = useState(false);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-earth-77729.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders])
    const handleDelete = (id) => {
        const ans = window.confirm('Do you want to delete this data?');
        if (ans) {
            fetch(`https://cryptic-earth-77729.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        const newOrder = orders.filter(order => order._id !== id);
                        setOrders(newOrder);
                        alert('Data successfully deleted!');
                    }
                })

        }
    }
    const handleProcess = (id) => {
        const restOrder = orders.filter(order => order._id !== id)
        const currentOrder = orders.find(order => order._id === id)

        fetch(`https://cryptic-earth-77729.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    currentOrder['status'] = 'approved';
                    const updated = [currentOrder, ...restOrder];
                    // console.log(currentOrder, restOrder, updated);
                    setOrders(updated);
                }
            })
    }
    return (
        <div className="mt-5 pt-3 container mx-auto">
            <Row lg={2} xs={1}>
                {

                    orders.map(single => {
                        const { _id, phone, address, status, img, name, description, price, uid } = single;
                        return (
                            <Col>


                                {/* details */}
                                <div>
                                    <div className="card mb-3 text-center mx-auto" style={{ maxWidth: '540px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-12">
                                                <img src={img} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="card-body">
                                                    <h3 className="card-title">{name}</h3>
                                                    <p>{description}</p>
                                                    <h4 className="card-text">
                                                        Price: $ {price}</h4>
                                                    <p>Ordered By: {uid}</p>
                                                    <p><strong>Status: <span className={status === "approved" ? "text-success" : "text-danger"}>{status}</span></strong></p>
                                                    <button className="btn btn-outline-danger" onClick={() => handleDelete(_id)}>Delete</button>
                                                    <button className="btn btn-outline-warning ms-2" onClick={() => handleProcess(_id)}>Process</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        );
                    })

                }
            </Row>
        </div>
    );
};

export default Manage;