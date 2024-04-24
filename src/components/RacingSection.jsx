import React, { useEffect, useRef, useState } from 'react'
import "./racingSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion"
import landspeed from "../assets/discover-page/landspeed.avif"
import isleOfman from "../assets/discover-page/isel of man tt.avif"
import daytona200 from "../assets/discover-page/daytona200.avif"
import supersports from "../assets/discover-page/supersports.avif"
import moto2 from "../assets/discover-page/moto2.webp"
import ama from "../assets/discover-page/ma track.avif"
import daredevils from "../assets/discover-page/daredevils.avif"

import { IoCloseSharp } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { GoDash } from "react-icons/go";

import landSpeedHero from "../assets/discover-page/landspeed-hero.avif"
import d1 from "../assets/discover-page/daytona200_1.avif"
import d2 from "../assets/discover-page/daytona200_2.avif"
import d3 from "../assets/discover-page/daytona200_3.avif"
import d4 from "../assets/discover-page/daytona200_4.avif"
import d5 from "../assets/discover-page/daytona200_5.avif"
import d6 from "../assets/discover-page/daytona200_6.avif"

import s1 from "../assets/discover-page/supersports1.avif"
import s2 from "../assets/discover-page/supersports2.avif"
import s3 from "../assets/discover-page/supersports3.avif"
import s4 from "../assets/discover-page/supersports4.avif"

import motohero from "../assets/discover-page/moto2-popup.avif"

import { Link } from 'react-router-dom';

import ama1 from "../assets/discover-page/ama1.avif"
import ama2 from "../assets/discover-page/ama2.avif"
import ama3 from "../assets/discover-page/ama3.avif"
import ama4 from "../assets/discover-page/ama4.avif"
import ama5 from "../assets/discover-page/ama5.avif"

import isleofmanHero from "../assets/discover-page/isleofman-hero.avif"

import race1 from "../assets/discover-page/moto2-season-opener-1920x1080.avif"
import race2 from "../assets/discover-page/ptr.avif"
import race3 from "../assets/discover-page/us-racing.avif"
import race4 from "../assets/discover-page/monster energy2.avif"


import on1 from "../assets/discover-page/news-hero.avif"
import on2 from "../assets/discover-page/trophy competition.avif"
import on3 from "../assets/discover-page/racing.avif"

import KeepInTouchBox from "./KeepInTouchBox"

const raceNews = [
    {
        id: 0,
        url: race1,
        title: "moto2",
        bio: "The 2023 Moto2™ season marks the start of Triumph's fifth season powering Moto2 as "
    },
    {
        id: 1,
        url: race2,
        title: "ptr triumph",
        bio: "The FIM Supersport World Championship is a production-based series that is widely acknowledged as an ideal platform for emerging talent on the world stage."
    },
    {
        id:2,
        url:race3,
        title:"us racing",
        bio:"Triumph Racing will launch its assault on the SuperMotocross World Championship in 2024 with a two-rider line-up in the 250cc category. With AMA Supercross’ 17 rounds, including eight rounds for 250cc racers, combined with the AMA Pro Motocross ‘outdoor’ championship plus two ‘play-offs’ and a final, it is one of the most intense racing series on the planet. "
    },
    {
        id:3,
        url:race4,
        title:"mxgp",
        bio:"The FIM MXGP Motocross World Championship takes place over 19-rounds on all types of terrain from sand to hard-pack. The series, which allows full-factory machinery, enjoys some of the most competitive racing in the world from Belgium to Indonesia, Argentina to Italy. Triumph Racing will enter the 250cc MX2 category in 2024 with a two-rider team."
    }
]
function SampleNextArrow(props) {
    const { onClick } = props;

    return (
        <div
            className={"prev-race-arrow race-arrow"}

            onClick={onClick}

        >
            <FaArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    
    return (
        <div
            className={"next-race-arrow race-arrow"}

            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
}

const imgData = [
    {
        title: "landspeed",
        url: landspeed,
        id: 0
    },
    {
        id: 1,
        title: "isle of man tt",
        url: isleOfman
    },
    {
        id: 2,
        title: "daytona 200",
        url: daytona200
    },
    {
        id: 3,
        title: "supersports",
        url: supersports
    },
    {
        id: 4,
        title: "moto2",
        url: moto2
    },
    {
        id: 5,
        title: "ama grand national track",
        url: ama
    },
    {
        id: 6,
        title: "daredevils",
        url: daredevils
    }
]


const otherNews=[
    {
        id:0,
        url:on1,
        title:"podium at mxgp of sardegna",
        category:"racing",
        date:"8th apr 2024"
    },
    {
        id:1,
        url:on2,
        title:"2024 title trophy",
        category:"racing",
        date:"5th apr 2024"
    },
    {
        id:2,
        url:on3,
        category:"racing",
        title:"moto2 season opener",
        date:"11th mar 2024"
    }
]
const RacingSection = () => {
    const [menuName, changeMenu] = useState("")


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }

        ]
    };



    return (
        <section className='racing-section'>
            {/* <h1>triumph racing</h1> */}
            <div className='racing-section-hero'>
                <div className='racing-inner-hero'>
                    <h3>for the ride</h3>
                    <h1>Triumph racing</h1>
                    <h3>Race winning. Record breaking. History making. </h3>
                </div>
            </div>
            <div className='race-topics'>
                    {
                        raceNews.map(item=>{
                            return(
                                <div className="race-topic-card">
                                    <div className='race-topic-pic'>
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className="race-topic-txt">
                                        <h3>{item.title}</h3>
                                        <p>{item.bio}</p>
                                        <Link className="race-pop-discover rpd-black">Discover more</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
            <div className='other-news-headline'>
                <h2>LATEST RACING NEWS</h2>
                <p>you might be interested in</p>
            </div>
            <div className='other-race-news'>
                 {
                    otherNews.map(item=>{
                        return(
                            <div className='other-race-news-card'>
                                <div className='orn-pic'>
                                    <img src={item.url} alt="" />
                                </div>
                                <div className='orn-txt'>
                                    <span className='orn-category'>{item.category}</span>
                                    <span className='orn-date'>{item.date}</span>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        )
                    })
                 }   
            </div>
            <h2 id="race-winning">race winning. record breaking. history making.</h2>
            <Slider {...settings} className='racing-slider'>
                {
                    imgData.map(item => {
                        return (
                            <div className='racing-card' key={item.id}>
                               <div className="inner-racing-card">
                                    <img src={item.url} alt="" />
                                    <h2 className='rc-title' onClick={()=>changeMenu(item.title)}>{item.title}</h2>
                                    <div className='film'></div>
                               </div>
                            </div>
                        )
                    })
                }

            </Slider>
            <KeepInTouchBox/>
            {menuName === "landspeed" ? <LandSpeed changeMenu={changeMenu} /> : ""}
            {menuName === "isle of man tt" ? <IsleOfMan changeMenu={changeMenu} /> : ""}
            {menuName === "daytona 200" ? <Daytona200 changeMenu={changeMenu} /> : ""}
            {menuName === "supersports" ? <Supersports changeMenu={changeMenu} /> : ""}
            {menuName === "moto2" ? <Moto2 changeMenu={changeMenu} /> : ""}
            {menuName === "ama grand national track" ? <Ama changeMenu={changeMenu} /> : ""}
            {menuName === "daredevils" ? <Daredevils changeMenu={changeMenu} /> : ""}
        </section>
    )
}

export default RacingSection;


function LandSpeed({ changeMenu }) {

    return (
        <section className='race-pop-up'>

            <button onClick={() => changeMenu("")} className='race-close-btn'><IoCloseSharp /></button>
            <button onClick={() => changeMenu("isle of man tt")} className='race-next-slide race-scroll'>isle of man<GoArrowRight /></button>
            <div className='race-pop-box'>
                <motion.div className='race-pop-pic' initial={{ x: "-100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1,type:"spring",stiffness:40}}>
                    <img src={landSpeedHero} alt="" />
                </motion.div>
                <motion.div className='race-pop-txt' initial={{ x: "100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1,type:"spring",stiffness:40}}>
                    <h3 className='pop-up-h3'>landspeed</h3>
                    <p>Johnny Allen was a pioneer in the purest sense, a man for whom the fear of the unknown was merely an added incentive to cut through the salt of Bonneville at approaching a third of the speed of sound.</p>
                    <p>In September 1955, the flat-tracker strapped himself in to the 15-foot-long Devil’s Arrow Streamliner to record a bone-shaking 193mph on the vast expanse of salt.</p>
                    <p>When a German NSU Motorenwerke team went faster a few months later, the Triumph team returned to Bonneville with a fresh paint job and a new name and smashed the top speed once more to regain the title of the world’s fastest motorcycle.</p>

                </motion.div>
            </div>
        </section>
    )
}

function IsleOfMan({ changeMenu }) {
    return (
        <section className='race-pop-up'>

            <button onClick={() => changeMenu("")} className='race-close-btn'><IoCloseSharp /></button>
            <button onClick={() => changeMenu("daytona 200")} className='race-next-slide race-scroll'>daytona 200<GoArrowRight /></button>
            <button onClick={() => changeMenu("landspeed")} className='race-prev-slide race-scroll'>landspeed<GoArrowLeft /></button>
            <div className='race-pop-box'>
                <motion.div className='race-pop-pic' initial={{ x: "-100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1,type:"spring",stiffness:40}}>
                    <img src={isleofmanHero} alt="" id="isle-of-man-pic" />
                </motion.div>
                <motion.div className='race-pop-txt' initial={{ x: "100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1,type:"spring",stiffness:40}}>
                    <h3 className='pop-up-h3'>isle of man</h3>
                    <p>Almost as soon as the motorcycle had been invented people wanted to race them, and one of the earliest races was the iconic Isle of Man TT.</p>
                    <p>In September 1955, the flat-tracker strapped himself in to the 15-foot-long Devil’s Arrow Streamliner to record a bone-shaking 193mph on the vast expanse of salt.</p>
                    <p>From it's very first race in 1907 right up to today Triumph has made history, breaking lap records and taking titles.</p>
                    <Link className="race-pop-discover">Discover more</Link>
                </motion.div>
            </div>
        </section>
    )
}

const daytonaData = [
    {
        id: 0,
        url: d1,
        title: "THE RACE THAT NAMED A BIKE",
        bio: "Triumph’s domination at one of the world’s most demanding races made worldwide stars of the riders and spawned a generation of sports bikes that bore the name of the venue that made them great.",
        source: "getty"

    },
    {
        id: 1,
        url: d2,
        title: "2014 – ESLICK: A NEW CHAPTER",
        bio: "When Danny Eslick crossed the line at the Daytona 200 in 2014, he was acutely aware that he was following in the tyre tracks of legends.It was Triumph’s first win at the world’s most gruelling long-distance sprint for almost 50 years, since Eslick’s mentor and friend Gary Nixon took the coveted crown in 1967.",
        source: "getty"
    },
    {
        id: 2,
        url: d3,
        title: "2014 – ESLICK: A NEW CHAPTER",
        bio: "The 27-year-old won the 73rd Daytona 200 at Daytona Beach in Florida when he powered his Daytona 675 across the finish 11 seconds ahead of his nearest rival. In a poignant tribute to Nixon, Eslick said: “He was always full of encouragement. It’s sad that he’s no longer with us, but I like to think some of my win was for him.”",
        source: "getty"
    },
    {
        id: 3,
        url: d4,
        title: "1960s – THE NAME-CHANGER",
        bio: "Triumph ended nearly 30 years of US and Canadian leadership at the 200-mile race when Buddy Elmore raced to success from 46th on the grid on a works special Tiger 100 in 1966. The legendary Triumph 500cc racer sacrificed low-speed tractability for a big step up in power at 3,500rpm to deliver arguably the most famous Daytona race in history.",
        source: "Mick Duckworth/John Nelson archive"
    },
    {
        id: 4,
        url: d5,
        title: "NIXON STRIKES AGAIN",
        bio: "Gary Nixon, who ran Elmore close for the ’66 crown, went one better the following year on the same bike to make it two Daytona titles on the trot for the Triumph Works team.",
        source: "Mick Duckworth/John Nelson archive"
    },
    {
        id: 5,
        url: d6,
        title: "1970's – GENE ROMERO",
        bio: "One of the best-known and most-flamboyant racers of the late 60s and early 70s, Romero’s proudest moment came when he rode to AMA glory on his favourite bike – a Triumph Trident – in 1970.",
        source: "Mick Duckworth/John Nelson archive"
    },
]
function Daytona200({ changeMenu }) {
    const [index, setIndex] = useState(0)
    const [trans, changetrans] = useState("pop-right")
    function next() {
        if (index < 5) {
            setIndex(index + 1)
            console.log(index)
            changetrans("pop-right")
        }
    }
    function prev() {
        if (index > 0) {
            setIndex(index - 1)
            console.log("previous " + index)
            changetrans("pop-left")
        }
    }
    return (
        <section className='race-pop-up'>
            <button onClick={() => changeMenu("")} className='race-close-btn'><IoCloseSharp /></button>
            <button onClick={() => changeMenu("supersports")} className='race-next-slide race-scroll'>supersports<GoArrowRight /></button>
            <button onClick={() => changeMenu("isle of man tt")} className='race-prev-slide race-scroll'>isle of man tt<GoArrowLeft /></button>
            <div className='race-pop-carousel'>
                <div className={index === 5 ? "rpa-hide" : 'race-pop-arrow rpa-l'} onClick={next}><FaArrowRight /></div>
                <div className={index === 0 ? "rpa-hide" : 'race-pop-arrow rpa-r'} onClick={prev}><FaArrowLeft /></div>
                {
                    daytonaData.map(item => {
                        return (
                            <div className={index === item.id ? "race-pop-card " + trans : "race-pop-card-hide"}>
                                <div className='race-carousel-image'>
                                    <img src={item.url} alt="" />
                                </div>
                                <div className="race-carousel-txt">
                                    <h3>daytona 200</h3>
                                    <h3>{item.title}</h3>
                                    <p>{item.bio}</p>
                                    <p className='very-small'>image source: {item.source}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='race-dots'>
                    {
                        daytonaData.map(item => {
                            return (
                                <GoDash onClick={() => setIndex(item.id)} className={index === item.id ? "dash red-dark" : "dash red-light"} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


const supersportsData = [
    {
        id: 0,
        url: s1,
        title: "BEST IN CLASS",
        bio: "In a seminal history spanning a quarter of a century, the 675cc Daytona was hailed by the motorcycle world's best-known media pundits as 'the best British sport bike ever' Launched in 1990 and named after the historic venue that put Triumph racing on the map, the most recent incarnation has been a force at the British and World Supersport Championships since 2006."
    },
    {
        id: 1,
        url: s2,
        title: "GLEN RICHARDS",
        bio: "Craig Jones was the first to challenge in 2003, riding a Daytona 600 in the British Supersport Championship in conjunction with the factory team as Triumph returned to racing after a 30-year hiatus Australian Glen Richards – who lives near Bruntingthorpe, a stones throw from the Triumph factory – rode a Daytona 675 to British Supersport successes in 2008 and 2012."
    },
    {
        id: 2,
        url: s3,
        title: "BILLY MCCONNELL",
        bio: "Fellow Aussie Billy ‘Skippy’ McConnell ushered in the modern racing era for Triumph with a 2014 British Supersport title on a Daytona 675R, and admitted: “To finally win the British Championship is brilliant and I was crying my eyes out on that final lap. I’ve come so close in recent years and it’s probably why my results haven’t been the greatest in the final races as I wanted it so bad."
    },
    {
        id: 3,
        url: s4,
        title: "POWERING THE NEXT GENERATION",
        bio: "The racing DNA will continue into the 2020s with the success of the Street Triple and Triumph’s exclusive engine partnership for the Moto2™ championship from 2019.The partnership maintains Triumph’s place at the pinnacle of motorsport and builds on the success of the race-winning Daytona 675R powerplant that led the way at the Isle of Man TT, Daytona 200 and British Supersport wins in 2014 and 2015."
    }
]
function Supersports({ changeMenu }) {
    const [index, setIndex] = useState(0)
    const [trans, changetrans] = useState("pop-right")
    function next() {
        if (index < supersportsData.length) {
            setIndex(index + 1)
            
            changetrans("pop-right")
        }
    }
    function prev() {
        if (index > 0) {
            setIndex(index - 1)
            
            changetrans("pop-left")
        }
    }
    return (
        <section className='race-pop-up'>

            <button onClick={() => changeMenu("")} className='race-close-btn'><IoCloseSharp /></button>
            <button onClick={() => changeMenu("moto2")} className='race-next-slide race-scroll'>moto2<GoArrowRight/></button>
            <button onClick={() => changeMenu("daytona 200")} className='race-prev-slide race-scroll'>daytona 200<GoArrowLeft/></button>
            <div className='race-pop-carousel'>
                <div className={index === 3 ? "rpa-hide" : 'race-pop-arrow rpa-l'} onClick={next}><FaArrowRight /></div>
                <div className={index === 0 ? "rpa-hide" : 'race-pop-arrow rpa-r'} onClick={prev}><FaArrowLeft /></div>
                {
                    supersportsData.map(item => {
                        return (
                            <div className={index === item.id ? "race-pop-card " + trans : "race-pop-card-hide"}>
                                <div className='race-carousel-image'>
                                    <img src={item.url} alt="" />
                                </div>
                                <div className="race-carousel-txt">
                                    <h3>track - supersports</h3>
                                    <h3>{item.title}</h3>
                                    <p>{item.bio}</p>
                                    {/* <p className='very-small'>image source: {item.source}</p> */}
                                </div>
                            </div>
                        )
                    })
                }
                <div className='race-dots'>
                    {
                        supersportsData.map(item => {
                            return (
                                <GoDash onClick={() => setIndex(item.id)} className={index === item.id ? "dash red-dark" : "dash red-light"} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

function Moto2({ changeMenu }) {
    return (
        <section className='race-pop-up'>

            <button onClick={() => changeMenu("")} className='race-close-btn'><IoCloseSharp /></button>
            <button onClick={() => changeMenu("ama grand national track")} className='race-next-slide race-scroll'>AMA<GoArrowRight/></button>
            <button onClick={() => changeMenu("supersports")} className='race-prev-slide race-scroll'>supersports<GoArrowLeft /></button>
            <div className='race-pop-box'>
                <motion.div className='race-pop-pic' initial={{ x: "-100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1,type:"spring",stiffness:40}}>
                    <img src={motohero} alt="" />
                </motion.div>
                <motion.div className='race-pop-txt moto-pop-up-txt' initial={{ x: "100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1,type:"spring",stiffness:40}}>
                    <h3>Track - MOTO2<sup>TM</sup></h3>
                    <p>Triumph’s rich 110-year racing heritage shows no sign of slowing.</p>
                    <Link className="race-pop-discover">Discover more</Link>
                </motion.div>
            </div>
        </section>
    )
}

const amaData = [
    {
        id: 0,
        url: ama1,
        title: "GOING FLAT OUT – FAST",
        bio: "Flat tracking, and its addictive blend of speed, dirt and dust, is making an adrenaline-fuelled comeback in the States and once again, Triumph is at the heart of the revival. Today it is called Flat Track Series, but the name ‘Championship’ lives on."
    },
    {
        id: 1,
        url: ama2,
        title: "GARY NIXON: THE AMERICAN DREAM",
        bio: "British racer Barry Sheene famously wore the T-shirt of flat-track legend and friend Gary Nixon beneath his leathers. Oklahoman Nixon and Cockney Sheene were unlikely friends, but Nixon’s status forged in the dirt and dust of the AMA Grand National Flat Track Championship had a mesmeric effect on the Londoner."
    },
    {
        id: 2,
        url: ama3,
        title: "GARY NIXON: THE AMERICAN DREAM",
        bio: "Nixon had taken first place in America’s premier motorcycle racing series in 1967 and 1968 on a Triumph 500, beating the field over mile and half-mile courses and TT dirt tracks, before conquering the fourth asphalt section, a feat emulated by Triumph rider Gene Romero in 1970."
    },
    {
        id: 3,
        url: ama4,
        title: "MODERN DAY",
        bio: "In 1986, flat track and road racing became two distinct AMA Pro Racing championships, but it wasn’t until more recently and the arrival of Triumph that the sport truly enjoyed its modern renaissance."
    },
    {
        id: 4,
        url: ama5,
        title: "MODERN DAY",
        bio: "Former Triumph America boss Michael Lock took over as American Flat Track CEO and oversaw a revival of the sport to a new generation, with Triumph at the fore."
    }
]
function Ama({ changeMenu }) {
    const [index, setIndex] = useState(0)
    const [trans, changetrans] = useState("pop-right")
    function next() {
        if (index < amaData.length) {
            setIndex(index + 1)
            console.log(index)
            changetrans("pop-right")
        }
    }
    function prev() {
        if (index > 0) {
            setIndex(index - 1)
            console.log("previous " + index)
            changetrans("pop-left")
        }
    }
    return (
        <section className='race-pop-up'>

            <button onClick={() => changeMenu("")} className='race-close-btn'><IoCloseSharp /></button>
            <button onClick={() => changeMenu("daredevils")} className='race-next-slide race-scroll'>daredveils<GoArrowRight /></button>
            <button onClick={() => changeMenu("moto2")} className='race-prev-slide race-scroll'>moto2<GoArrowLeft /></button>
            <div className='race-pop-carousel'>
                <div className={index === 4 ? "rpa-hide" : 'race-pop-arrow rpa-l'} onClick={next}><FaArrowRight /></div>
                <div className={index === 0 ? "rpa-hide" : 'race-pop-arrow rpa-r'} onClick={prev}><FaArrowLeft /></div>
                {
                    amaData.map(item => {
                        return (
                            <div className={index === item.id ? "race-pop-card " + trans : "race-pop-card-hide"}>
                                <div className='race-carousel-image'>
                                    <img src={item.url} alt="" />
                                </div>
                                <div className="race-carousel-txt">
                                    <h3>Ama grand national flat track</h3>
                                    <h3>{item.title}</h3>
                                    <p>{item.bio}</p>
                                    {/* <p className='very-small'>image source: {item.source}</p> */}
                                </div>
                            </div>
                        )
                    })
                }
                <div className='race-dots'>
                    {
                        amaData.map(item => {
                            return (
                                <GoDash onClick={() => setIndex(item.id)} className={index === item.id ? "dash red-dark" : "dash red-light"} />
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

function Daredevils({ changeMenu }) {
    return (
        <section className='race-pop-up'>
           
            <button onClick={() => changeMenu("")} className='race-close-btn'><IoCloseSharp /></button>
            <button onClick={() => changeMenu("ama grand national track")} className='race-prev-slide race-scroll'>AMA<GoArrowLeft /></button>
            <div className='race-pop-box'>
                <motion.div className='race-pop-pic' initial={{ x: "-100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1,type:"spring",stiffness:40}}>
                    <img src={daredevils} alt="" />
                </motion.div>
                <motion.div className='race-pop-txt moto-pop-up-txt' initial={{ x: "100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1,type:"spring",stiffness:40}}>
                    <h3>daredevils</h3>
                    <p>The competitor I faced was death. And he is the toughest competitor in the world - "Evel Knievel"</p>
                    <Link className="race-pop-discover">Discover more</Link>
                </motion.div>
            </div>
        </section>
    )
}