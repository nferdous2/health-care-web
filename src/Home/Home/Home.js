import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../Pages/About/About'
import Services from '../../Pages/Services/Services';
import Counter from '../Counter/Counter';
import Appointment from '../../Pages/Appointment/Appointment';
import Experts from '../../Pages/Experts/Experts';
const Home = () => {
    return (
        <div id="home">
            <Banner />
            <About></About>
            <Counter />
            <Services></Services>
            <Experts />
            <Appointment></Appointment>

        </div>
    );
};

export default Home;