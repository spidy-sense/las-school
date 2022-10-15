import React from 'react'

import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import GrandmasterTalk from '../../components/grandmasterTalk/GrandmasterTalk';
import CreativeMinds from '../../components/creativeMinds/CreativeMinds';
import Facilities from '../../components/facilities/Facilities';
import News from '../../components/news/News';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <GrandmasterTalk />
            <CreativeMinds />
            <Facilities />
            <News />
            <Gallery />
            <Footer />
        </>
    )
}

export default Home