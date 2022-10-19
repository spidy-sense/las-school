import React from 'react'

import Header from '../../components/header/Header';
import GrandmasterTalk from '../../components/grandmasterTalk/GrandmasterTalk';
import CreativeMinds from '../../components/creativeMinds/CreativeMinds';
import Facilities from '../../components/facilities/Facilities';
import News from '../../components/news/News';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import Founder from '../../components/founder/Founder';
import NavbarHead from '../../components/navbar/NavbarHead';

const Home = () => {
    return (
        <>
            <NavbarHead />
            <Header />
            <GrandmasterTalk />
            <CreativeMinds />
            <Facilities />
            <News />
            <Gallery />
            <Founder />
            <Footer />
        </>
    )
}

export default Home