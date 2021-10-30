import React from 'react';
import { Col, Row } from 'react-bootstrap';

const PhotoGallery = () => {
    return (
        <div id="gallery">
            <span style={{ position: 'relative', fontSize: '5em', color: '#e6a5a1', top: '40px', right: '0', left: '30px' }}>Gallery</span>
            <Row lg={2} xs={1} className="container mx-auto">
                <Col>
                    <a href="#">
                        <div class="card">
                            <div class="card-header">
                                Rides
                            </div>
                            <div class="card-body">
                                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1200&h=600&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2019%2F04%2F03193421%2F1200-roller-coaster_0.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </a>
                </Col>
                <Col>
                    <a href="#">
                        <div class="card">
                            <div class="card-header">
                                Moments
                            </div>
                            <div class="card-body">
                                <img src="https://www.across-magazine.com/wp-content/uploads/2020/10/Chapman_Taylor_Grozny_Mall_Kausar_Park_4-1200-600.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </a>
                </Col>
                <Col>
                    <a href="#">
                        <div class="card">
                            <div class="card-header">
                                Concerts
                            </div>
                            <div class="card-body">
                                <img src="https://i2.wp.com/postconcertdepression.com/wp-content/uploads/2020/05/pexels-photo-1267350-1-e1588509678969.jpeg?resize=1220%2C600&ssl=1" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </a>
                </Col>
                <Col>
                    <a href="#">
                        <div class="card">
                            <div class="card-header">
                                Tours
                            </div>
                            <div class="card-body">
                                <img src="https://europa.eu/youth/d8/sites/default/files/styles/1200x600/public/article/photo-1513104399965-f5160d963d39.jpeg?itok=KsOj-6BR" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </a>
                </Col>
            </Row>

        </div>
    );
};

export default PhotoGallery;