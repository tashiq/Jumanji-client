import React, { useEffect, useRef, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Placeorder = () => {
    const phoneRef = useRef();
    const addressRef = useRef();

    const { id } = useParams();
    const [spot, setSpot] = useState([]);
    const history = useHistory();
    const url = `http://localhost:4000/spots/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSpot(data))
    }, []);
    const { user } = useAuth();
    const { uid, photoURL, displayName, email } = user;
    const { _id, img, name, price, description } = spot;
    const handleSubmit = e => {
        e.preventDefault();
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const status = "pending";
        const id = _id;
        const newOrder = { uid, phone, address, img, name, price, description, id, status };
        fetch(`http://localhost:4000/orders/`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order Is Placed')
                }
            })
        e.target.reset();
    }
    return (
        <div className="mt-5 pt-3">
            <div className="border d-flex flex-column align-items-center justify-content-center mb-3 p-2">
                <img src={photoURL} className="img-fluid p-2" style={{ borderRadius: '50%', width: '250px' }} alt="..." />
                <ListGroup>
                    <ListGroup.Item>
                        <h3>Name: {displayName}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Email: {email}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center">
                        <form onSubmit={handleSubmit}>
                            <input required type="text" name="phone" className="form-control mb-2"
                                placeholder="Phone"
                                id="" ref={phoneRef} />
                            <input required type="text" name="address" className="form-control mb-2"
                                placeholder="Address"
                                id="" ref={addressRef} />
                            <input required type="date" name="date" className="form-control mb-2"
                                placeholder="Date"
                                id="" />

                            <input type="submit" className="btn border border-success " value="Place  Order" />

                        </form>
                    </ListGroup.Item>

                </ListGroup>

            </div>


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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Placeorder;