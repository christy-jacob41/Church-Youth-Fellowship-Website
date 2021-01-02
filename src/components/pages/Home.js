import React from 'react';
import '../../App.css';
import WFHSection from '../WFHSection';
import Cards from '../Cards';
import Countdown from '../Countdown';
import Map from '../Map';

function Home() {
    return (
        <>
            <WFHSection />
            <Countdown timeTillDate="01 03 2021, 10:00 pm"
                timeFormat="MM DD YYYY, h:mm a" />
            <Cards />
            <Map />
        </>
    );
}

export default Home;