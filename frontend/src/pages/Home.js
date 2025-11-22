import React from 'react';
import Banner from '../components/Banner';
import ArtOfInterior from '../components/ArtOfInterior';
import DesignSpaces from '../components/DesignSpaces';
import WhyChoose from '../components/WhyChoose';
import NewsEffect from '../components/NewsEffect';
import HowWeWork from '../components/HowWeWork';
import StatCounter from '../components/StatCounter';
import WorkedBrand from '../components/WorkedBrand';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <ArtOfInterior/>
            <DesignSpaces/>
            <WhyChoose/>
            <NewsEffect/>
            <HowWeWork/>
            <StatCounter/>
            <WorkedBrand/>
        </div>
    );
};

export default Home;