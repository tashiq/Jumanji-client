import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    // const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const { uid } = user;
    useEffect(() => {
        fetch(`http://localhost:4000/orders`)
            .then(res => res.json())
            .then(data => {
                const mine = data.filter(order => order.uid === uid)
                setOrders(mine);
            })
    }, [])

    // console.log(orders);
    const handleDelete = (id) => {
        const ans = window.confirm('Do you want to delete this data?');
        if (ans) {
            fetch(`http://localhost:4000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Data successfully deleted!');
                        const newOrders = orders.filter(order => order._id !== id);
                        setOrders(newOrders);
                    }
                })

        }
    }
    return (
        <div className="pt-3 mt-5 container">
            <Row lg={2} xs={1}>
                {
                    orders.map(order => <Service key={order._id} data={order}>
                        <p><strong>Status: <span className={order.status === "approved" ? "text-success" : "text-danger"}>{order.status}</span></strong></p>
                        <button className="btn btn-outline-danger" onClick={() => handleDelete(order._id)}>Delete</button>

                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Orders;