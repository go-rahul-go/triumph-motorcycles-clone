import React from 'react'
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Configure from '../components/Configure';
import LatestModelsCarousel from '../components/LatestModelsCarousel';
import TriumphClothing from '../components/TriumphClothing';
import Discover from '../components/Discover';
import HomeFooter from '../components/HomeFooter';

const Home = () => {
  return (
    <>
    <Hero/>
    <Welcome/>
    <Configure/>
    <LatestModelsCarousel/>
    <TriumphClothing/>
    <Discover/>
    <HomeFooter/>
    </>
  )
}

export default Home;