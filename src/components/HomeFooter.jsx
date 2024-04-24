import React, { useContext, useState } from 'react'
import "./homefooter.css"
import { HideContext } from '../App'
import { Link } from 'react-router-dom'
import facebookIcon from "../assets/footer-icons/facebook-color-svgrepo-com.svg"
import twitterIcon from "../assets/footer-icons/twitter-color-svgrepo-com.svg"
import youtubeIcon from "../assets/footer-icons/youtube-color-svgrepo-com.svg"
import { PiCopyright } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";





const socialMediaImages = [facebookIcon, twitterIcon, youtubeIcon]


const footerData = [
  {
    id:0,
    title: "motorcycles",
    cat: ["adventure", "classic", "roadster", "rocket 3", "reviews", "offer"],
    link:"/accessories"
  },
  {
    id:1,
    title: "get started",
    cat: ["configure", "book now", "find a dealer", "enquire now"],
    link:"/accessories"
  },
  {
    id:2,
    title: "for the ride",
    cat: ["lastest news", "factory visitor experience"],
    link:"/discover"
  },
  {
    id:3,
    title: "owner",
    cat: ["my triumph app", "what3words", "your triumph"],
    link:"/owner"
  }
]
const HomeFooter = () => {
  const display = useContext(HideContext)
  const [footMenu, changeFootMenu] = useState("")
  function handleChange(menuName) {
    if (footMenu === menuName) {
      changeFootMenu("")
    }
    else {
      changeFootMenu(menuName)
    }
  }
  return (
    <section className={display ? 'home-footer-hide' : 'home-footer'}>

      <div className='pc-home-footer'>
        <div className="mob-footer-links">

          <div className='mob-foot-link' onClick={() => handleChange("motorcycles")}>motorcycles<IoIosArrowDown className={footMenu === "motorcycles" ? 'foot-arrow' : 'foot-arrow foot-arrow-up'} /></div>
          <div className={footMenu === "motorcycles" ? "mob-foot-accordion" : "mob-foot-accordion-hide"} id="f1">
            <Link to="/accessories">adventure</Link>
            <Link to="/accessories">classic</Link>
            <Link to="/accessories">roadster</Link>
            <Link to="/accessories">rocket 3</Link>
            <Link to="/discover">reviews</Link>
            <Link to="/discover">offer</Link>

          </div>
          <div className='mob-foot-link' onClick={() => handleChange("get started")}>get started<IoIosArrowDown className={footMenu === "get started" ? 'foot-arrow' : 'foot-arrow foot-arrow-up'} /></div>
          <div className={footMenu === "get started" ? "mob-foot-accordion" : "mob-foot-accordion-hide"} id="f2">
            <Link to="/accessories">configure</Link>
            <Link to="/accessories">book now</Link>
            <Link to="/accessories">find a dealer</Link>
            <Link to="/accessories">enquire now</Link>
          </div>
          <div className='mob-foot-link' onClick={() => handleChange("for the ride")}>for the ride<IoIosArrowDown className={footMenu === "for the ride" ? 'foot-arrow' : 'foot-arrow foot-arrow-up'} /></div>
          <div className={footMenu === "for the ride" ? "mob-foot-accordion" : "mob-foot-accordion-hide"} id="f3">
            <Link to="/discover">lastest news</Link>
            <Link  to="/discover">factory visitor experience</Link>
          </div>
          <div className='mob-foot-link' onClick={() => handleChange("owner")}>owner<IoIosArrowDown className={footMenu === "owner" ? 'foot-arrow' : 'foot-arrow foot-arrow-up'} /></div>
          <div className={footMenu === "owner" ? "mob-foot-accordion" : "mob-foot-accordion-hide"} id="f4">
            <Link to="/owner">my triumph app</Link>
            <Link to="/owner">what3words</Link>
            <Link to="/owner">your triumph</Link>
          </div>
        </div>
        <div className='pc-footer-links'>
          {
            footerData.map(item => {
              return (
                <div className='pc-footer-card' key={item.id}>
                  <h2 className='pc-footer-title'>{item.title}</h2>
                  {
                    item.cat.map(cat => {
                      return (
                        <Link className='pc-footer-link' to={item.link}>{cat}</Link>
                      )
                    })
                  }
                </div>
              )
            })
          }

        </div>
        <div className='pc-social-media-links'>

          {
            socialMediaImages.map(image => {
              return (
                <div>
                  <img src={image} alt="" />
                </div>
              )
            })
          }
        </div>
        <div className='pc-footer-base'>
          <div id="legal-terms">
            <Link className='legal-links'>contact us</Link>
            <Link className='legal-links'>legal</Link>
            <Link className='legal-links'>CSR policy</Link>
          </div>
          <div id="copyright"><PiCopyright /> 2024 triumph motorcycles</div>
        </div>
      </div>
    </section>
  )
}

export default HomeFooter