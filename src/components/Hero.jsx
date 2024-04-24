import React, { useState, useEffect, useRef,useContext } from 'react'
import "./hero.css"
import hero400 from "../assets/hero/hero-400.avif"
import rocket3 from "../assets/hero/hero-storm3.avif"
import daytona from "../assets/hero/hero-daytona.avif";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import rocketVideo from "../assets/hero/videos/hero-rocket-video.mp4";
import stealthVideo from "../assets/hero/videos/hero-stealth-video.mp4"
import mobRocket from "../assets/hero/mobile-rocket3.avif"
import mobStealth from "../assets/hero/mob-stealth.png"
import { Link } from 'react-router-dom';
import { FaBiking, FaRegMap } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { motion } from "framer-motion";
import { HideContext } from '../App';
const image = [
    {
        url: hero400,
        title: "TR series",
        type: "image",
        mobTitle: "legends in the making",
        mobSubTitle: "speed 400 and scrambler 400x"
    },
    {
        url: rocketVideo,
        title: "rocket 3",
        type: "video",
        mobTitle: "new rocket storm 3",
        mobSubTitle: "added performance and record breaking performance"
    },
    {
        url: daytona,
        title: "all new daytona 660",
        type: "image",
        mobTitle: "all new daytona 660",
        mobSubTitle: "dynamic DNA with fresh attitude"
    },
    {
        url: stealthVideo,
        title: "stealth editions",
        type: "video",
        mobTitle: "dramatic custom style",
        mobSubTitle: "new triumph stealth editions"
    }
]

const framerVariant = {
    start: {
        y: "10vh",
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1
    }
}
const Hero = () => {
    const [index, changeIndex] = useState(0)
    const [screen, changeScreen] = useState("next-screen")

    const speedRef = useRef();
    const rocketRef = useRef();
    const daytonaRef = useRef();
    const stealthRef = useRef();

    const [speedShow, changeSpeedShow] = useState(false)
    const [rocketShow, changeRocketShow] = useState(false)
    const [daytonaShow, changeDaytonaShow] = useState(false)
    const [stealthShow, changeStealtShow] = useState(false)
    const [clockVar, changeClockVar] = useState(0)

    const display=useContext(HideContext)
    // console.log("display"+display)
    let timeVar = useRef(0);


    const previous = () => {
        if (index === 0)
            changeIndex(image.length - 1)
        else {
            changeIndex(index - 1)
        }
    }
    const next = () => {
        if (index === 3)
            changeIndex(0)
        else
            changeIndex(index + 1)
    }


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            let e1 = entries[0];
            e1.isIntersecting ? changeSpeedShow(true) : changeSpeedShow(false)
        })
        const observer2 = new IntersectionObserver(entries => {
            let e2 = entries[0];
            e2.isIntersecting ? changeRocketShow(true) : changeRocketShow(false)
        })
        const observer3 = new IntersectionObserver(entries => {
            let e3 = entries[0]
            e3.isIntersecting ? changeDaytonaShow(true) : changeDaytonaShow(false)
        })
        const observer4 = new IntersectionObserver(entries => {
            let e4 = entries[0]
            e4.isIntersecting ? changeStealtShow(true) : changeStealtShow(false)
        })
        observer.observe(speedRef.current)
        observer2.observe(rocketRef.current)
        observer3.observe(daytonaRef.current)
        observer4.observe(stealthRef.current)

        window.scrollTo(0,0)

    }, [])

    useEffect(() => {

        if (clockVar === 10) {
            next();
            changeClockVar(0)
            timeVar.current = 0
        }
        else {
            timeVar.current = setInterval(() => {
                changeClockVar(clockVar + 1)
            }, 1000)
           
        }

        return () => {
            clearInterval(timeVar.current);

        }

    }, [clockVar])

    /*this will stop the clock which will stop the image slider for 5 seconds(5000),
    after 7 seconds setInerval will start and new image will be visible after 10 seconds*/

    function stop() {
        clearInterval(timeVar.current)
        console.log("clock stopped " + timeVar.current)
        // timeVar.current=0;
        setTimeout(() => {
            changeClockVar(0)
            // timeVar.current=0;
        }, 5000)
        

    }


    return (
        <section className='hero'>

            <div className='pc-carousel'>

                <div className={index === 0 ? "main-screen " + screen : "hide"}>
                    {
                        image[index].type === "video" ? <video src={image[index].url} autoPlay muted loop={true} /> : <img src={image[index].url} alt="" />
                    }
                    <div className='pc-hero-txt pc-speed-hero-txt' ref={speedRef}>
                        <div className='inner-pc-speed-details'>
                            <motion.h1 variants={framerVariant} initial="start" animate={speedShow ? "end" : "start"} transition={{ duration: 0.8, delay: 0.2 }}>{image[index].mobTitle}</motion.h1>
                            <motion.h2 variants={framerVariant} initial="start" animate={speedShow ? "end" : "start"} transition={{ duration: 0.8, delay: 0.4 }}>
                                {image[index].mobSubTitle}
                            </motion.h2>
                            <motion.div className='pc-hero-btns' initial={{ y: "10vh,opacity:0" }} animate={speedShow ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                                <Link className='hero-red-btn'>speed 400</Link>
                                <Link className='hero-black-btn'>scrambler 400x</Link>
                            </motion.div>
                        </div>

                    </div>
                </div>
                <div className={index === 1 ? "main-screen " + screen : "hide"}>
                    {
                        image[index].type === "video" ? <video src={image[index].url} autoPlay muted loop={true} /> : <img src={image[index].url} alt="" />
                    }
                    <div ref={rocketRef} className='pc-hero-txt'>
                        <motion.h1 variants={framerVariant} initial="start" animate={rocketShow ? "end" : "start"} transition={{ duration: 0.8, delay: 0.2 }}>{image[index].mobTitle}</motion.h1>
                        <motion.h2 variants={framerVariant} initial="start" animate={rocketShow ? "end" : "start"} transition={{ duration: 0.8, delay: 0.4 }}>
                            {image[index].mobSubTitle}
                        </motion.h2>
                        <motion.div className='pc-hero-btns' variants={framerVariant} initial="start" animate={rocketShow ? "end" : "start"} transition={{ duration: 0.8, delay: 0.6 }}>
                            <Link className='hero-red-btn'>rocket 3</Link>
                            <Link className='hero-black-btn'>rocket 3 storm</Link>
                        </motion.div>
                    </div>
                </div>
                <div className={index === 2 ? "main-screen " + screen : "hide"}>
                    <img src={image[index].url} alt="" />
                    <div ref={daytonaRef} className='pc-hero-txt'>
                        <motion.h1 variants={framerVariant} initial="start" animate={daytonaShow ? "end" : "start"} transition={{ duration: 0.8 }}>{image[index].mobTitle}</motion.h1>
                        <motion.h2 variants={framerVariant} initial="start" animate={daytonaShow ? "end" : "start"} transition={{ duration: 0.8, delay: 0.3 }}>
                            {image[index].mobSubTitle}
                        </motion.h2>
                        <motion.div className='pc-hero-btns' variants={framerVariant} initial="end" animate={daytonaShow ? "end" : "start"} transition={{ duration: 0.8, delay: 0.6 }}>
                            <Link className='hero-red-btn'>view bike</Link>

                        </motion.div>
                    </div>
                </div>
                <div className={index === 3 ? "main-screen " + screen : "hide"} >
                    {
                        image[index].type === "video" ? <video src={image[index].url} autoPlay muted loop={true} /> : <img src={image[index].url} alt="" />
                    }
                    <div ref={stealthRef} className='pc-hero-txt'>
                        <motion.h1 variants={framerVariant} initial="start" animate={stealthShow ? "end" : "start"} transition={{ duration: 0.8 }}>{image[index].mobTitle}</motion.h1>
                        <motion.h2 variants={framerVariant} initial="start" animate={stealthShow ? "end" : "start"} transition={{ duration: 0.8, delay: 0.3 }}>
                            {image[index].mobSubTitle}
                        </motion.h2>
                        <motion.div className='pc-hero-btns' variants={framerVariant} initial="start" animate={stealthShow ? "end" : "start"} transition={{ duration: 0.8, delay: 0.6 }}>
                            <Link className='hero-red-btn'>view bike</Link>

                        </motion.div>
                    </div>
                </div>
                <div onClick={() => { previous(); changeScreen("previous-screen"); stop() }} className='hero-prev'>
                    <div className='inner-prev'>
                        <h3>{index === 0 ? image[3].title : image[index - 1].title}</h3>
                        <FaArrowLeftLong className='hero-arrow hero-left-arrow' />
                    </div>
                </div>
                <div onClick={() => { next(); changeScreen("next-screen"); stop() }} className='hero-next'>
                    <div className='inner-next'>
                        <h3>{index === 3 ? image[0].title : image[index + 1].title}</h3>
                        <FaArrowRightLong className='hero-arrow hero-right-arrow' />
                    </div>
                </div>
            </div>
            <div className={display?"mob-carousel-hide":'mob-carousel'}>
                <div className='inner-media-box'>
                    <div className={index === 0 ? "inner-media-screen " + screen : "hide"}>
                        {
                            <img src={image[index].url} alt="" />
                        }
                    </div>
                    <div className={index === 1 ? "inner-media-screen " + screen : "hide"}>
                        {
                            <img src={mobRocket} alt="" />
                        }
                    </div>
                    <div className={index === 2 ? "inner-media-screen " + screen : "hide"}>
                        {
                            <img src={image[index].url} alt="" />
                        }
                    </div>
                    <div className={index === 3 ? "inner-media-screen " + screen : "hide"}>
                        {
                            <img src={mobStealth} alt="" />
                        }
                    </div>
                    <div className='mob-next-slide' onClick={() => { next(); stop()}}>
                        <div className='mob-next-arrow'>
                            <FaArrowRightLong className='mob-hero-right-arrow' />
                        </div>

                        {/* <div className='mob-hero-title'>{index === 3 ? image[0].title : image[index + 1].title}</div> */}
                        <div className='mob-hero-title'>{image[index].title}</div>
                    </div>
                </div>
                <div className='mob-hero-bike-details'>
                    <div className='inner-mob-hero'>
                        <h1>{image[index].mobTitle}</h1>
                        <p>{image[index].mobSubTitle}</p>
                        <Link className="mob-hero-btn">View bike</Link>
                    </div>
                    <div className='mob-hero-icons'>
                        <div><FaRegMap className='mob-hero-icon' />enquire now</div>
                        <div><FaMotorcycle className='mob-hero-icon' />book now</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;