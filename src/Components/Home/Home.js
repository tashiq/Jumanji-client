import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <PhotoGallery></PhotoGallery>
            <Events></Events>
            <Footer></Footer>
        </div>
    );
};

export default Home;