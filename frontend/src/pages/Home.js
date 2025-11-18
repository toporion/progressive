import React from 'react';
import Banner from '../components/Banner';
import ArtOfInterior from '../components/ArtOfInterior';
import DesignSpaces from '../components/DesignSpaces';
import WhyChoose from '../components/WhyChoose';
import NewsEffect from '../components/NewsEffect';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <ArtOfInterior/>
            <DesignSpaces/>
            <WhyChoose/>
            <NewsEffect/>
        </div>
    );
};

export default Home;