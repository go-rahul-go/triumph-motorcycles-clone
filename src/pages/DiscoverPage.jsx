import React, { useContext, useEffect, useState } from 'react'
import "./discoverpage.css";
import SubNav from '../components/SubNav';
import OverviewSection from '../components/OverviewSection';
import HomeFooter from "../components/HomeFooter"
import { HideContext } from '../App';
import NewsSection from '../components/NewsSection';
import RacingSection from '../components/RacingSection';
import ComingSoon from '../components/ComingSoon';

const discoverLinks = ["overview", "news","racing","brand","reviews"]

const DiscoverPage = () => {
    const [menuName,changeMenuName]=useState("overview")
    const display=useContext(HideContext)
    useEffect(()=>{
      document.title="For the Ride | discover triumph"

      return ()=>{
        document.title="triumph"
      }
    },[])

    useEffect(()=>{
        window.scrollTo(0,0)
        console.log(menuName)
    },[menuName])
  return (
    <section className={display?'discover-page-hide':'discover-page'}>
        <SubNav title={"for the ride"} links={discoverLinks} endOfMenu={"keep informed"} changeParentMenuName={changeMenuName} menuName={menuName}/>
        {menuName==="overview"?<OverviewSection/>:""}
        {menuName==="news"?<NewsSection/>:""}
        {menuName==="racing"?<RacingSection/>:""}
        {menuName==="brand"?<ComingSoon/>:""}
        {menuName==="reviews"?<ComingSoon/>:""}
        <HomeFooter/>
    </section>
  )
}

export default DiscoverPage;