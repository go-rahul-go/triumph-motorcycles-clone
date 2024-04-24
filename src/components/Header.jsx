import React, { useState } from 'react'
import HeaderLogo from "../assets/logo/header-logo.svg"
import "./header.css"
import { Link, NavLink } from 'react-router-dom'
import tiger1200gt from "../assets/header images/adventure/tiger-1200-gt-pro.webp"
import tiger1200rally from "../assets/header images/adventure/tiger-1200-rally-pro.webp";
import tiger900 from "../assets/header images/adventure/tiger-900-gt.webp"
import tiger850 from "../assets/header images/adventure/tiger 850 sport.webp"
import tiger660 from "../assets/header images/adventure/tiger-sport-660.webp"

//modern classic images import 
import speed400 from "../assets/header images/modern classic/speed 400.webp"
import scram400x from "../assets/header images/modern classic/scrambler 400.webp"
import scram900 from "../assets/header images/modern classic/scrambler 900.webp"
import scram1200 from "../assets/header images/modern classic/scrambler 1200 x.webp"
import speed900 from "../assets/header images/modern classic/speed twin 900.webp"
import bont100 from "../assets/header images/modern classic/bonneville-t100.webp"
import bobber from "../assets/header images/modern classic/bonneville-bobber.webp"


//import roadster images
import trident from "../assets/header images/roadster/trident.webp"
import streetTriple from "../assets/header images/roadster/speed_triple.webp"
import streetTripleRS from "../assets/header images/roadster/street-triple-rs.webp"

//import rocket-3 images
import rocket3 from "../assets/header images/rocket3/rocket-3.webp"

//import sports images
import daytona from "../assets/header images/sport/daytona 660.webp"

import { MdKeyboardArrowRight } from "react-icons/md";
import { TiInputChecked } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";

import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import MotoSideNav from './MotoSideNav'
import Finance from './Finance'
import Accessories from './Accessories'
import MobClothing from './MobClothing'
import MobOwners from './MobOwners'
import MobDiscover from './MobDiscover'

const advImages = [
  {
    id: "tiger900",
    url: tiger900,
    title: "tiger 900",
    cc: 900,
    torque: 90,
    bhp: 108,
    accesories: "50+",
    price: "13,70,000",
    class: "tiger-900"
  },
  {
    id: "tiger660",
    url: tiger660,
    title: "tiger 660",
    cc: 660,
    torque: 81,
    bhp: 64,
    accesories: "20+",
    price: "9,34,000",
    class: "tiger-660"
  },
  {
    id: "tiger850_sport",
    url: tiger850,
    title: "tiger 850",
    cc: 850,
    torque: 85,
    bhp: 82,
    accesories: "20+",
    price: "11,95,000",
    class: "tiger-850"
  },
  {
    id: "1200gt",
    url: tiger1200gt,
    title: "tiger 1200 gt",
    cc: 1200,
    torque: 150,
    bhp: 130,
    accesories: "50+",
    price: "19,19,000",
    class: "tiger-1200-gt"
  },
  {
    id: "1200rallypro",
    url: tiger1200rally,
    title: "tiger 1200 rally",
    cc: 1200,
    torque: 150,
    bhp: 130,
    accesories: "50+",
    price: "20,19,000",
    class: "tiger-1200-rally"
  }
]


const modernClassics = [
  {
    index: 0,
    id: "speed_400",
    url: speed400,
    title: "speed 400",
    price: "2,33,000",
    cc: 398,
    bhp: 30,
    torque: 37.5,
    accesories: "20+",
    class: "speed-400"
  },
  {
    index: 1,
    id: "scrambler_400",
    url: scram400x,
    title: "scrambler 400x",
    price: "2,65,000",
    cc: 398,
    bhp: 30,
    torque: 37.5,
    accesories: "20+",
    class: "scram-400"
  },
  {
    index: 2,
    id: "scrambler_900",
    url: scram900,
    title: "scrambler 900",
    price: "9,59,000",
    cc: 900,
    bhp: 65,
    torque: 80,
    accesories: "20+",
    class: "scram-900"
  },
  {
    index: 3,
    id: "speed_twin_900",
    url: speed900,
    title: "speed twin 900",
    price: "8,49,000",
    cc: 900,
    bhp: 65,
    torque: 80,
    accesories: "20+",
    class: "speed-900"
  },

  {
    index: 4,
    id: "scrambler_1200x",
    url: scram1200,
    title: "scrambler 1200x",
    price: "12,00,000",
    cc: 1198,
    bhp: 90,
    torque: 110,
    accesories: "20+",
    class: "scram-1200"
  },
  {
    index: 5,
    id: "boneville t100",
    url: bont100,
    title: "boneville t100",
    price: "9,69,000",
    cc: 1000,
    bhp: 90,
    torque: 110,
    accesories: "20+",
    class: "bon-t100"
  },
  {
    index: 6,
    id: "boneville bobber",
    url: bobber,
    title: "boneville bobber",
    price: "12,05,000",
    cc: 1000,
    bhp: 90,
    torque: 110,
    accesories: "20+",
    class: "bobber"

  }
]

const roadster = [
  {
    index: 0,
    id: "trident_660",
    title: "trident 660",
    url: trident,
    cc: 660,
    torque: 61,
    bhp: 81,
    accesories: "20+",
    class: "trident",
    price: "8,12,000"
  },
  {
    index: 1,
    id: "street_triple",
    title: "street triple 765",
    url: streetTriple,
    cc: 765,
    torque: 80,
    bhp: 130,
    accesories: "20+",
    class: "street-triple",
    price: "10,17,000"
  },
  {
    index: 2,
    id: "street_triple",
    title: "street triple 1200",
    url: streetTripleRS,
    cc: 1200,
    torque: 125,
    bhp: 180,
    accesories: "30+",
    class: "street-triple-rs",
    price: "17,95,000"
  }
]
const rocket = [
  {
    index: 0,
    id: "rocket_3",
    class: "rocket-3",
    title: "rocket 3",
    price: "19,90,000",
    url: rocket3,
    cc: 2500,
    bhp: 167,
    torque: 221,
    accesories: "30+"
  }
]

const sport = [
  {
    index: 0,
    id: "daytona-600",
    title: "daytona 660",
    class: "daytona-660",
    url: daytona,
    price: "coming soon",
    cc: 660,
    bhp: 95,
    torque: 91,
    accesories: "20+"
  }
]



const Header = ({changeDisplay}) => {
  const [hide, updateHide] = useState("moto-menu")
  const [bikeCategory, updateCategory] = useState("adv")
  const [bike, changebike] = useState("tiger 900")
  const [mobileMenu, changeMobileMenu] = useState(false)  //to toggle mobile menu
  const [mobmoto, changeMobMoto] = useState(false)  
  const [mobMenuName, changeMobMenuName] = useState("")  //to change menu items
  return (
    <>
      <header className='header'>
        <motion.div className={mobileMenu ? "mobile-menu-hide" : "mobile-menu"} onClick={() => {changeMobileMenu(true); changeDisplay(true)}} initial={{ opacity: 0 }} animate={!mobileMenu ? { opacity: 1 } : { opacity: 0 }}>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div className={mobileMenu ? "close-mobile-menu" : "close-mobile-menu-hide"} onClick={() => { changeMobileMenu(false); changeMobMenuName(""); changeDisplay(false) }} initial={{ opacity: 0 }} animate={mobileMenu ? { opacity: 1 } : { opacity: 0 }}>
          <IoClose id="mob-menu-close" />
        </motion.div>
        <Link to="/" className='header-logo'  onClick={() => { changeMobileMenu(false); changeMobMenuName(""); changeDisplay(false) }}>
          <img src={HeaderLogo} alt=" " />
        </Link>
        <div className='pc-header-links'>
          <NavLink className="pc-links" id="pc-moto" to="/">motorcycles

            <div className='moto-links'>
              <div className='menu-btn-div'>
                <button onClick={() => updateHide("moto-menu")} className={hide === "moto-menu" ? "moto-links-selection-btn" : 'btn-inactive'}>motorcycles</button>
                <button onClick={() => updateHide("finance-menu")} className={hide === "finance-menu" ? "moto-links-selection-btn" : 'btn-inactive'}>finance & offers</button>
              </div>
              <div className={hide === "moto-menu" ? "moto-menu" : "menu-hide"}>
                <div className='moto-menu-inner-menu'>
                  <ul>
                    <li onClick={() => { updateCategory("adv"); changebike("tiger 900") }} className={bikeCategory === "adv" ? "inner-link-active" : "inner-link-inactive"}>adventure</li>
                    <li onClick={() => { updateCategory("modern-classic"); changebike("speed 400") }} className={bikeCategory === "modern-classic" ? "inner-link-active" : "inner-link-inactive"}>modern classics</li>
                    <li onClick={() => { updateCategory("roadster"); changebike("trident 660") }} className={bikeCategory === "roadster" ? "inner-link-active" : "inner-link-inactive"}>roadster</li>
                    <li onClick={() => { updateCategory("rocket-3"); changebike("rocket 3") }} className={bikeCategory === "rocket-3" ? "inner-link-active" : "inner-link-inactive"}>rocket 3</li>

                    <li onClick={() => { updateCategory("sport"); changebike("daytona 660") }} className={bikeCategory === "sport" ? "inner-link-active" : "inner-link-inactive"}>sport</li>
                  </ul>
                </div>
                <div className={bikeCategory === "adv" ? "adv-menu" : "main-menu-hide"}>
                  
                  <ul>
                    {
                      advImages.map((item) => {
                        return (
                          <li className='bike-menu-card' onClick={() => changebike(item.title)}>
                            {(item.title === "tiger 900") ? <div className='new-bar'><p>new</p></div> : ""}
                            <img src={item.url} alt="" />
                            <div className='bike-card-box'>
                              <div className='bike-title'>
                                <h3>{item.title}</h3>
                                <p>price from {item.price}</p>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                {
                  advImages.map((item) => {
                    return (
                      <div className={bike === item.title ? item.class : "bike-hide"}>
                        <h2 className="main-bike-h2">{item.title}</h2>
                        <div className='main-bike-details'>
                          <div className='main-bike-image'>
                            <img src={item.url} alt="" />
                          </div>
                          <div className='main-bike-specs'>
                            <div className='power-figures'>
                              <div>
                                <p className='bold'>{item.cc}</p>
                                <p className='bold'>{item.bhp}</p>
                                <p className='bold'> {item.torque} </p>
                                <p className='bold'> {item.accesories} </p>
                              </div>
                              <div>
                                <p>cc</p>
                                <p>peak power</p>
                                <p>NM peak torque</p>
                                <p>accesories</p>
                              </div>
                            </div>
                            <NavLink className="custom-link">Customize</NavLink>
                            <NavLink className="menu-link">View</NavLink>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

                <div className={bikeCategory === "modern-classic" ? "modern-classic-menu" : "main-menu-hide"}>

                  
                  <ul>
                    {
                      modernClassics.map((item) => {
                        return (
                          <li className='bike-menu-card' onClick={() => changebike(item.title)}>
                            {(item.title === "speed 400" || item.title === "scrambler 400x") ? <div className='new-bar'><p>new</p></div> : ""}
                            <img src={item.url} alt="" />
                            <div className='bike-card-box'>
                              <div className='bike-title'>
                                <div className='bike-title'>
                                  <h3>{item.title}</h3>
                                  <p>price from {item.price}</p>
                                </div>
                              </div>


                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>

                </div>
                {
                  modernClassics.map((item) => {
                    return (
                      <div className={bike === item.title ? item.class : "bike-hide"}>
                        <h2 className="main-bike-h2">{item.title}</h2>
                        <div className='main-bike-details'>
                          <div className='main-bike-image'>
                            <img src={item.url} alt="" />
                          </div>
                          <div className='main-bike-specs'>
                            <div className='power-figures'>
                              <div>
                                <p className='bold'>{item.cc}</p>
                                <p className='bold'>{item.bhp}</p>
                                <p className='bold'> {item.torque} </p>
                                <p className='bold'> {item.accesories} </p>
                              </div>
                              <div>
                                <p>cc</p>
                                <p>peak power</p>
                                <p>NM peak torque</p>
                                <p>accesories</p>
                              </div>
                            </div>
                            <NavLink className="custom-link">Customize</NavLink>
                            <NavLink className="menu-link">View</NavLink>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                <div className={bikeCategory === "roadster" ? "roadster-menu" : "main-menu-hide"}>
                  
                  <ul>
                    {
                      roadster.map((item) => {
                        return (
                          <li className='bike-menu-card' onClick={() => changebike(item.title)}>
                            <img src={item.url} alt="" />
                            <div className='bike-card-box'>
                              <div className='bike-title'>
                                <h3>{item.title}</h3>
                                <p>price from {item.price}</p>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>

                </div>
                {
                  roadster.map((item) => {
                    return (
                      <div className={bike === item.title ? item.class : "bike-hide"}>
                        <h2 className="main-bike-h2">{item.title}</h2>
                        <div className='main-bike-details'>
                          <div className='main-bike-image'>
                            <img src={item.url} alt="" />
                          </div>
                          <div className='main-bike-specs'>
                            <div className='power-figures'>
                              <div>
                                <p className='bold'>{item.cc}</p>
                                <p className='bold'>{item.bhp}</p>
                                <p className='bold'> {item.torque} </p>
                                <p className='bold'> {item.accesories} </p>
                              </div>
                              <div>
                                <p>cc</p>
                                <p>peak power</p>
                                <p>NM peak torque</p>
                                <p>accesories</p>
                              </div>
                            </div>
                            <NavLink className="custom-link">Customize</NavLink>
                            <NavLink className="menu-link">View</NavLink>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                <div className={bikeCategory === "chrome-edition" ? "chrome-menu" : "main-menu-hide"}>
                  <h1>chrome edition</h1>
                </div>
                <div className={bikeCategory === "rocket-3" ? "rocket-3-menu" : "main-menu-hide"}>
                  <h1>rocket 3</h1>
                  <ul>
                    {
                      rocket.map((item) => {
                        return (
                          <li className='bike-menu-card' onClick={() => changebike(item.title)}>
                            <img src={item.url} alt="" />
                            <div className='bike-card-box'>
                              <div className='bike-title'>
                                <h3>{item.title}</h3>
                                <p>price from {item.price}</p>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                {
                  rocket.map((item) => {
                    return (
                      <div className={bike === item.title ? item.class : "bike-hide"}>
                        <h2 className="main-bike-h2">{item.title}</h2>
                        <div className='main-bike-details'>
                          <div className='main-bike-image'>
                            <img src={item.url} alt="" />
                          </div>
                          <div className='main-bike-specs'>
                            <div className='power-figures'>
                              <div>
                                <p className='bold'>{item.cc}</p>
                                <p className='bold'>{item.bhp}</p>
                                <p className='bold'> {item.torque} </p>
                                <p className='bold'> {item.accesories} </p>
                              </div>
                              <div>
                                <p>cc</p>
                                <p>peak power</p>
                                <p>NM peak torque</p>
                                <p>accesories</p>
                              </div>
                            </div>
                            <NavLink className="custom-link">Customize</NavLink>
                            <NavLink className="menu-link">View</NavLink>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                <div className={bikeCategory === "sport" ? "sport-menu" : "main-menu-hide"}>
                 
                  <ul>
                    {
                      sport.map((item) => {
                        return (
                          <li className='bike-menu-card' onClick={() => changebike(item.title)}>
                            <img src={item.url} alt="" />
                            <div className='bike-card-box'>
                              <div className='bike-title'>
                                <h3>{item.title}</h3>
                                <p>price from {item.price}</p>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                {
                  sport.map((item) => {
                    return (
                      <div className={bike === item.title ? item.class : "bike-hide"}>
                        <h2 className="main-bike-h2">{item.title}</h2>
                        <div className='main-bike-details'>
                          <div className='main-bike-image'>
                            <img src={item.url} alt="" />
                          </div>
                          <div className='main-bike-specs'>
                            <div className='power-figures'>
                              <div>
                                <p className='bold'>{item.cc}</p>
                                <p className='bold'>{item.bhp}</p>
                                <p className='bold'> {item.torque} </p>
                                <p className='bold'> {item.accesories} </p>
                              </div>
                              <div>
                                <p>cc</p>
                                <p>peak power</p>
                                <p>NM peak torque</p>
                                <p>accesories</p>
                              </div>
                            </div>
                            <NavLink className="custom-link">Customize</NavLink>
                            <NavLink className="menu-link">View</NavLink>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

              </div>
              <div className={hide === "finance-menu" ? "finance-menu" : "menu-hide"}>
                <h1>finance menu coming soon</h1>
              </div>
            </div>
          </NavLink>

          <NavLink to="/accessories" className="pc-links" id="pc-acc">accessories
            <div className="acc-container">
              <div className="acc-list acc-list1">
                <h3>accessories</h3>
                <Link to="/accessories">Configurator</Link>
                <Link  to="/accessories">Triumph Genuine Luggage</Link>
                <Link  to="/accessories">Triumph Connectivity</Link>
                <Link  to="/accessories">Triumph Sena Bluetooth</Link>
                <Link className='last-link'  to="/accessories">customize your ride <MdKeyboardArrowRight className='right-arrow' /></Link>
              </div>
              <div className="acc-list acc-list2">
                <h3>lastest models</h3>
                <Link to="/accessories" >Daytona 660</Link>
                <Link to="/accessories">Tiger 900</Link>
                <Link to="/accessories">Scrambler 400 X</Link>
                <Link to="/accessories">speed 400</Link>
                <Link to="/accessories">Street Triple 765</Link>
                <Link to="/accessories">tiger 660</Link>
                <Link to="/accessories">Tiger 1200</Link>
                <Link to="/accessories">Rocket 3</Link>
                <Link to="/accessories">Speed Twin 900</Link>
                <Link className='last-link' to="/accessories">congfigure <MdKeyboardArrowRight className='right-arrow' /></Link>
              </div>
              <div className="acc-list acc-list3">
                <h3>quick links</h3>
                <Link>my triumph app</Link>
                <Link>muc-off</Link>
                <Link className='last-link'>find a dealer <MdKeyboardArrowRight className='right-arrow' /></Link>
              </div>
              <div className="acc-image">
                <img src={require("../assets/header images/acc-image.avif")} alt="" />
              </div>
            </div>
          </NavLink>
          <NavLink to="/clothing" className="pc-links" id="pc-cloth">clothing
            <div className="cloth-container">
              <Link className="inner-clothes" to="/clothing">
                <div className='cloth-image'>
                  <img src={require("../assets/header images/riding_essential.jpg")} alt="" />
                </div>
                <h3>riding essentials</h3>
                <p>We know the importance of having the right kit for the elements. These packable riding essentials are always within easy reach.</p>
              </Link>
              <Link className="inner-clothes" to="/clothing">
                <div className='cloth-image'>
                  <img src={require("../assets/header images/casual_gear.jpg")} alt="" />
                </div>
                <h3>casual wear</h3>
                <p>Make a premium style statement with our heritage-inspired capsule collections.</p>
              </Link>
              <Link className="inner-clothes">
                <div className='cloth-image'>
                  <img src={require("../assets/header images/motorcycle_gear.jpg")} alt="" />
                </div>
                <h3>motorcycle gear</h3>
                <p>Performance wear to complement every bike we build; developed alongside each model.</p>
              </Link>
              <div className="inner-clothes"  to="/clothing">
                <div className='cloth-image'>
                  <img src={require("../assets/header images/lifestyle.jpg")} alt="" />
                </div>
                <h3>lifestyle collection</h3>
                <p>Discover authentic, moto-influenced style. Our lifestyle collection is inspired by the ride and built to be lived in.</p>
              </div>
              <Link className="inner-clothes"  to="/clothing">
                <div className='cloth-image'>
                  <img src={require("../assets/header images/ridin_gear.jpg")} alt="" />
                </div>
                <h3>2023 clothing catalogue</h3>
                <p>Discover our stylish clothing collection for 2023. Designed by riders, for riders.</p>
              </Link>
              <Link className="inner-clothes"  to="/clothing">
                <div className='cloth-image'>
                  <img src={require("../assets/header images/boots.png")} alt="" />
                </div>
                <h3>boots catalogue</h3>
                <p>Discover our stylish boot & glove collection for 2023. Designed by riders, for riders.</p>
              </Link>
            </div>
          </NavLink>
          <NavLink to="/owner" className="pc-links" id="pc-owner">owner
            <div className="owner-box">
              <div className="owner-top">
                <div className="owner-links">
                  <h3>quick links</h3>
                  <Link to="/owner">extended warranty</Link>
                  <Link to="/owner">service package</Link>
                  <Link to="/owner">roadside assistance</Link>
                  <Link to="/owner">bike health check</Link>
                  <Link to="/owner">customer promise</Link>
                  <Link to="/owner">Genuine Parts</Link>

                </div>
                <div className="owner-links">
                  <h3>your triumph</h3>
                  <Link to="/owner">warranty and assistance</Link>
                  <Link to="/owner">what3words</Link>
                  <Link to="/owner">my triumph app</Link>
                  <Link className='last-link' to="/owner">find out more <MdKeyboardArrowRight className="right-arrow" /></Link>
                </div>
                <div className="owner-links">
                  <h3>quick links</h3>
                  <Link to="/owner">recalls</Link>
                  <Link to="/owner">contact us</Link>
                  <Link className='last-link' to="/owner">find a dealer<MdKeyboardArrowRight className="right-arrow" /></Link>
                </div>
                <div className="owner-pics">
                  <div><img src={require("../assets/header images/owner1.avif")} alt="" /></div>
                  <div><img src={require("../assets/header images/owner2.avif")} alt="" /></div>
                </div>
              </div>
              <div className="owner-bottom">
                <div className="ob-links">
                  <TiInputChecked id="check-pin" />
                  <Link className="ob-link" to="/owner">extended warranty</Link>
                </div>
                <div className="ob-links">
                  <IoLocationOutline id="location-pin" />
                  <Link className="ob-link">find a dealer</Link>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/discover" className="pc-links" id="pc-discover">discover
            <div className='discover-box'>
              <div className="discover-links">
                <div>
                  <h3>NEWS</h3>
                  <Link to="/discover" className="discover-link">lastest news</Link>
                  <Link to="/discover" className="discover-link">motorcycles</Link>
                  <Link to="/discover" className="discover-link">brand</Link>
                  <Link to="/discover" className="discover-link">racing</Link>
                  <Link to="/discover" className="discover-link">epic adventure</Link>
                  <Link to="/discover" className='last-link'>overview<MdKeyboardArrowRight className="right-arrow" /></Link>
                </div>
                <div>
                  <h3>racing</h3>
                  <Link to="/discover" className="discover-link">Motocross and Enduro</Link>
                  <Link to="/discover" className="discover-link">MXGP</Link>
                  <Link to="/discover" className="discover-link">US RACING</Link>
                  <Link to="/discover" className="discover-link">MOTO2<sup id="tm">TM</sup></Link>
                  <Link to="/discover" className="discover-link">PTR Triumph</Link>
                  <Link to="/discover" className='last-link'>overview<MdKeyboardArrowRight className="right-arrow" /></Link>
                </div>
                <div>
                  <h3>brand</h3>
                  <Link to="/discover" className="discover-link">James Bond Partnership</Link>
                  <Link to="/discover" className="discover-link">Triumph & Gibson</Link>
                  <Link to="/discover" className="discover-link">Distinguished Gentleman's Ride</Link>
                  <Link to="/discover" className="discover-link">Triumph and Breitling</Link>
                  <Link to="/discover" className="discover-link">120 Years Celebration</Link>
                  <Link to="/discover" className="discover-link">timeline</Link>
                  <Link to="/discover" className='last-link'>overview<MdKeyboardArrowRight className="right-arrow" /></Link>
                </div>
                <div>
                  <h3>experiences</h3>
                  <Link to="/discover" className="discover-link">Factory Visitor Experience</Link>
                  <Link to="/discover" className="discover-link">Adventure Riding Experience</Link>

                  <Link to="/discover" className='last-link'>overview<MdKeyboardArrowRight className="right-arrow" /></Link>
                </div>
              </div>
              <div className='discover-images'>
                <div className="discover-image">
                  <div><img src={require("../assets/header images/discover1.avif")} alt="" /></div>
                  <Link className='discover-link'>PRESS REVIEWS<MdKeyboardArrowRight className="right-arrow" /></Link>
                </div>
                <div className="discover-image">
                  <div><img src={require("../assets/header images/discover2.avif")} alt="" /></div>
                  <Link className="discover-link">PRESS REVIEWS<MdKeyboardArrowRight className="right-arrow" /></Link>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        <div className='pc-booking-links'>
          <NavLink className="booking-link">dealer</NavLink>
          <NavLink className="booking-link">customize</NavLink>
          <NavLink className="booking-link">offers</NavLink>
          <NavLink className="booking-link">book now</NavLink>
        </div>

        <motion.div className={mobileMenu ? 'mobile-nav' : "mobile-nav-hide"} initial={mobileMenu ? { x: 0 } : { x: "-100vw" }} animate={mobileMenu ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.5 }}>
          <div className='inner-mob-nav'>
            <div className='mob-menu-link1' onClick={() => changeMobMoto(!mobmoto)}>motorcycles <IoIosArrowDown className={mobmoto ? 'mob-up-arrow mob-up-arrow-rotate' : 'mob-up-arrow'} />

            </div>
            <div className={mobmoto ? "mob-moto-links" : "mob-moto-links-hide"}>
              <p onClickCapture={() => changeMobMenuName("motorcycles")}>motorcycles <RiArrowRightSLine className="mob-right-arrow" /></p>
              <p onClickCapture={() => changeMobMenuName("finance")}>finance & offers <RiArrowRightSLine className="mob-right-arrow" /></p>
            </div>
            <div className='mob-menu-link1' onClick={() => {changeMobMenuName("accessories")}}>accessories <IoIosArrowDown className='mob-up-arrow' /></div>
            <div className='mob-menu-link1' onClick={() => changeMobMenuName("clothing")}>clothing <IoIosArrowDown className='mob-up-arrow' /></div>
            <div className='mob-menu-link1' onClick={() => changeMobMenuName("owner")}>owners <IoIosArrowDown className='mob-up-arrow' /></div>
            <div className='mob-menu-link1' onClick={() => changeMobMenuName("discover")}>discover <IoIosArrowDown className='mob-up-arrow' /></div>
          </div>
          <div className="bottom-mob-menu">
            <Link className='mob-menu-link2'>dealer</Link>
            <Link className='mob-menu-link2'>customize</Link>
            <Link className='mob-menu-link2'>offers</Link>
            <Link className='mob-menu-link2'>book now</Link>
          </div>


        </motion.div>
        {mobMenuName === "motorcycles" ? <MotoSideNav closeMenu={changeMobMenuName} /> : ""}
        {mobMenuName === "finance" && <Finance closeMenu={changeMobMenuName} />}
        {mobMenuName === "accessories" && <Accessories closeMenu={changeMobMenuName} changeMobileMenu={changeMobileMenu} changeDisplay={changeDisplay}/>}

        {mobMenuName === "clothing" && <MobClothing closeMenu={changeMobMenuName} changeDisplay={changeDisplay} changeMobileMenu={changeMobileMenu}/>}
        
        {mobMenuName === "owner" && <MobOwners closeMenu={changeMobMenuName} changeDisplay={changeDisplay} changeMobileMenu={changeMobileMenu}/>}
        {mobMenuName === "discover" && <MobDiscover closeMenu={changeMobMenuName} changeDisplay={changeDisplay} changeMobileMenu={changeMobileMenu}/>}
      </header>

    </>

  )
}

export default Header;