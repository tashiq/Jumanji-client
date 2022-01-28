import React from 'react';
import { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
//long and short description.
const Service = ({ data, children }) => {
    // const [toggle, setToggle] = useState(false);
    const { img, price, name, description } = data;
    let small = description.slice(0, 300);
    const [toggle, setToggle] = useState(true);
    const [content, setContent] = useState(small);
    console.log(img);
    const btn = (<Button variant='outlined' onClick={() => {
        setToggle(!toggle);
        setContent(toggle ? description : small);
        // console.log(toggle, content);
    }} style={{ boxShadow: '0px', color: 'white' }}>Read {toggle ? 'more' : 'less'}</Button>)
    return (
        <Col>
            <div className='card-main'>
                <div>
                    <img src={`data:image/png;base64, ${img}`}
                        alt={name}
                        className='card-img' />
                </div>
                <div className='card-title'>
                    {name}
                </div>
                <div className='hidden-content'>
                    <div className='description'>{content} {description.length >= 300 ? btn : ''}</div>
                    <div className='price'>Price: {price}</div>
                    {children}
                </div>
            </div>
        </Col>
    );
};

export default Service;