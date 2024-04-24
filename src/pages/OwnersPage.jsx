import React, { useContext, useEffect, useRef, useState } from 'react'
import "./ownerpage.css";
import { HideContext } from '../App';
import SubNav from "../components/SubNav";
import totalCareVideo from "../assets/owner-page/total-care-loop.webm"
import HomeFooter from '../components/HomeFooter';
import pic1 from "../assets/owner-page/onlinse-service.avif";
import { Link } from 'react-router-dom';
import youtubeVideo from "../assets/owner-page/videos/Triumph Total Care - A Complete Ownership Experience.mp4"

import triumphPromise from "../assets/owner-page/videos/Triumph promise.mp4"
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLocationSearching } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import promotion from "../assets/owner-page/13495-yourtriumph-promo-955x537.avif"
import tyre from "../assets/owner-page/tyre-selector.webp"
import oil from "../assets/owner-page/Oil_Selector_Products.7f14d2b7.png"
import { ownerPageData } from '../Data';
import { motion } from "framer-motion"

import warranty from "../assets/owner-page/24-month-warranty-feature-770x770.avif"
import rsa from "../assets/owner-page/13495-yourtriumph-rsa-feature-770x770.avif"



const ownerLinks = ["total care", "your triumph"]




const OwnersPage = () => {
  const display = useContext(HideContext);
  const [ownerMenuName, changeOwnerMenuName] = useState("total care")
  const [tyreView, changeTyreView] = useState(false)
  const [oilView, changeOilView] = useState(false)
  const tyreRef = useRef();
  const oilRef = useRef();

  useEffect(()=>{
      window.scrollTo(0,0)
  },[ownerMenuName])

  
  useEffect(() => {
    document.title = `${ownerMenuName} | For The Ride`;

    return () => {
      document.title = "triumph"
    }
  }, [ownerMenuName])

  useEffect(() => {
    const observer1 = new IntersectionObserver(entries => {
      let e1 = entries[0];
      e1.isIntersecting ? changeTyreView(true) : changeTyreView(false);
    })
    const observer2 = new IntersectionObserver(entries => {
      let e1 = entries[0];
      e1.isIntersecting ? changeOilView(true) : changeOilView(false);
    })
    observer1.observe(tyreRef.current)
    observer2.observe(oilRef.current)
  }, [])
  return (
    <section className={display ? "owner-page-hide" : "owner-page"}>
      <SubNav title={"owners"} links={ownerLinks} changeParentMenuName={changeOwnerMenuName} menuName={ownerMenuName} endOfMenu={"find a dealer"} />


      {/*total care section */}
      <div className={ownerMenuName === "total care" ? "total-care" : "total-care-hide"}>
        
        <div className='total-care-video'>
          <video src={totalCareVideo} loop={true} autoPlay muted />
        </div>
        <div className='total-care-intro'>
          <h3 id="tci-h3">total care</h3>
          <div id="tci-p">
            <p >Triumph Total Care offers you a premium range of services and products – designed to offer you unrivalled support throughout your ownership journey.</p>
          </div>
          <div id="online-service">
            <div id="os-pic">
              <img src={pic1} alt="" />
            </div>
            <div id="os-txt">
              <h3>ONLINE SERVICE BOOKINGS</h3>
              <p>You can now quickly and easily book your service online 24/7. It takes just 2 minutes to enter your details and schedule a date and time that suits you, whilst seeing the actual service cost up front.</p>
              <Link className="tc-dealer">find a dealer</Link>
            </div>
          </div>
        </div>
        <div id='total-care-youtube-video'>
          <video controls={true} src={youtubeVideo} />


        </div>

        <div id="total-care-products-services">
          <div id="tcps-head">
            <h3>total care</h3>
            <p>services & products</p>
          </div>

          {
            ownerPageData.map(item => {
              return (
                <div className={item.id % 2 === 0 ? "tc-service" : "tc-service tc-service-reverse"}>
                  <div className='tcps-video-box'>
                    <video src={item.url} loop={true} autoPlay muted />
                  </div>
                  <div className="tcps-text-box">
                    <h3>{item.title}</h3>
                    <p>{item.bio}</p>

                    {item.id === 6 ? "" : <Link className="tc-dealer">{item.button}</Link>}
                    {item.hasOwnProperty("blackButton") ? <Link className="tc-dealer tc-dealer-black">{item.blackButton}</Link> : ""}
                  </div>
                </div>
              )
            })
          }
          <div className='tc-service tc-service-reverse'>
            <div className='tcps-video-box'>
              <video src={triumphPromise} loop={true} autoPlay muted />
            </div>
            <div className="tcps-text-box">
              <h3>our promise to you</h3>
              <ul>
                <li>Transparent Service Pricing</li>
                <li>Motorcycle Health Check</li>
                <li>Motorcycle Software Update</li>
                <li>Safety – Recall Check</li>
                <li>Triumph Trained Technicians</li>
                <li>Regular Status Update</li>
                <li>Genuine Triumph Parts and Accessories</li>
              </ul>


            </div>
          </div>
        </div>

        <div id="dealer-near-you">
          <div id="dealer-box">
            <h3>find a dealer near you</h3>
            <p>This interactive locator will find your nearest Triumph Motorcycle Dealer.</p>
            <input type="text" placeholder='location or postcode' />
            <select>
              <option value="india">india</option>
              <option value="usa">usa</option>
              <option value="china">china</option>
              <option value="japan">japan</option>
              <option value="uk">UK</option>
            </select>
            <button id="dealer-search-btn"><IoMdSearch />search</button>
            <button id="dealer-search-btn"><MdOutlineLocationSearching />search my location</button>
          </div>
        </div>
      </div>


      {/*your triumph section */}
      <div className={ownerMenuName === "your triumph" ? "your-triumph" : "your-triumph-hide"}>
        <div id="your-triumph-hero">
          <h3 id="yt-hero-h3">your triumph</h3>
        </div>
        <div className='tc-service'>
          <div className='tcps-video-box'>
            <img src={promotion} alt=""/>
          </div>
          <div className="tcps-text-box">
            <h3>TAKING CARE OF YOUR BIKE</h3>
            <p>When designing and developing our bikes, we think about everything around riding and looking after you and your bike. Alongside the bike, we create all the right services, accessories and support packages to compliment and care for your ride.</p>
            <Link className="tc-dealer tc-dealer-black">safety checks</Link>
          </div>

        </div>

        <div id="oil-tyre">
          <h3>oil and tyre</h3>
          <div className='oil-tyre-box'>
            <div className='oil-tyre-pic'>
              <img src={tyre} alt="" />
            </div>
            <div className='oil-tyre-txt' >
              <motion.h3 initial={{ y: "-10vh", opacity: 0 }} animate={tyreView ? { y: 0, opacity: 1 } : { y: "-10vh", opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }} ref={tyreRef}>tyre selector</motion.h3 >
              <motion.p nitial={{ y: "10vh", opacity: 0 }} animate={tyreView ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>our online tools helps find and select the correct tyre spec.</motion.p>
              <motion.span nitial={{ y: "10vh", opacity: 0 }} animate={tyreView ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>tyre selector guide</motion.span>
            </div>
          </div>
          <div className='oil-tyre-box'>
            <div className='oil-tyre-pic'>
              <img src={oil} alt="" id="oil-pic" />
            </div>
            <div className='oil-tyre-txt' >
              <motion.h3 initial={{ y: "-10vh", opacity: 0 }} animate={oilView ? { y: 0, opacity: 1 } : { y: "-10vh", opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }} ref={oilRef}>oil selector</motion.h3 >
              <motion.p nitial={{ y: "10vh", opacity: 0 }} animate={oilView ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>Use our online oil selector tool to find the official Triumph-approved and tested oils for your bike.</motion.p>
              <motion.span nitial={{ y: "10vh", opacity: 0 }} animate={oilView ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>oil selector guide</motion.span>
            </div>
          </div>
        </div>

        <div className='yt-box'>
          <div className='yt-pic'>
            <img src={warranty} alt="" />
          </div>
          <div id="os-txt">
              <h3>24-MONTH WARRANTY </h3>
              <p>A Triumph 24-month Warranty gives you peace of mind and the added reassurance in the unlikely event of something happening to your bike we have you covered.*</p>
              <i className='terms-cond'>*Subject to terms and conditions.</i>
              <Link className="tc-dealer">download t&cs</Link>
            </div>
        </div>
        <div className='yt-box yt-box-reverse'>
          <div className='yt-pic'>
            <img src={rsa} alt="" />
          </div>
          <div id="os-txt">
              <h3>roadside assistance</h3>
              <p>Triumph Assist is a breakdown assistance package developed by Triumph and the RAC which has been designed specifically to give you peace of mind and help when you need it the most. It includes different levels of cover to ensure you’re looked after if the unexpected were to happen in the UK and on the continent.</p>
             
              <Link className="tc-dealer">discover more</Link>
            </div>
        </div>
        <div className='tc-service'>
            <div className='tcps-video-box'>
              <video src={triumphPromise} loop={true} autoPlay muted />
            </div>
            <div className="tcps-text-box">
              <h3>our promise to you</h3>
              <ul>
                <li>Transparent Service Pricing</li>
                <li>Motorcycle Health Check</li>
                <li>Motorcycle Software Update</li>
                <li>Safety – Recall Check</li>
                <li>Triumph Trained Technicians</li>
                <li>Regular Status Update</li>
                <li>Genuine Triumph Parts and Accessories</li>
              </ul>


            </div>
          </div>
      </div>

      <div className='foot-dealer-locator'>
        <GrLocation /><span>find a dealer</span></div>
      <HomeFooter />
    </section>
  )
}

export default OwnersPage;