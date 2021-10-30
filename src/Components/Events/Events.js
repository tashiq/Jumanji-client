import React from 'react';
import { Carousel } from 'react-bootstrap';

const Events = () => {
    return (
        <div id="events" className="my-4">
            <span style={{ position: 'relative', fontSize: '5em', color: '#abebb9', top: '40px', right: '0', left: '70px' }}>Events</span>
            <Carousel className="w-50 mx-auto">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/2436101_New%20Project(4).jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ backgroundColor: '#f0ebdf80', color: 'black', borderRadius: '15px' }}>
                        <h3>Independence Day</h3>
                        <p>26/12/2020</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/1245187_4kG5MA.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ backgroundColor: '#f0ebdf80', color: 'black', borderRadius: '15px' }} >
                        <h3>Victory Day</h3>
                        <p>16/12/2020</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i1.wp.com/totalinfobd.com/wp-content/uploads/2019/03/totalinfobd-Copy.jpg?fit=1200%2C630&ssl=1'
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ backgroundColor: '#f0ebdf80', color: 'black', borderRadius: '15px' }}>
                        <h3>Language Day</h3>
                        <p>21/02/2020</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Events;