import React from 'react';
import Offer from '../Offer/Offer';
import Banner from './Banner';
import Categories from './Categories';
// import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Offer />
        </div>
    );
};

export default Home;