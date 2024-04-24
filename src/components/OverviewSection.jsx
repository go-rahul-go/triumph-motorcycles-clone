import React, { useEffect, useRef, useState } from 'react'
import "./overviewSection.css"
import whyTriumph from "../assets/discover-page/video/WHY TRIUMPH_.mp4"
import racing from "../assets/discover-page/racing.avif"
import reviews from "../assets/discover-page/revies.jpg"
import brand from "../assets/discover-page/brand.avif"
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

import gentleman from "../assets/discover-page/gentleman.avif"
import electric from "../assets/discover-page/te1.avif"
import { MdKeyboardArrowRight } from "react-icons/md";
import KeepInTouchBox from './KeepInTouchBox'

const h3Var = {
    start: {
        y: "-10vh",
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1
    }
}

const otherVar = {
    start: {
        y: "10vh",
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1
    }
}

const OverviewSection = () => {
    const [raceView, changeRaceView] = useState(false)
    const [reviewView, changeReviewView] = useState(false)
    const [brandView, changebrandView] = useState(false)
    const racingRef = useRef();
    const reviewRef = useRef();
    const brandRef = useRef();
    useEffect(() => {
        let observer = new IntersectionObserver(entries => {
            let e1 = entries[0]
            e1.isIntersecting ? changeRaceView(true) : changeRaceView(false)
        })

        let observer2 = new IntersectionObserver(entries => {
            let e1 = entries[0]
            e1.isIntersecting ? changeReviewView(true) : changeReviewView(false)
        })
        let observer3 = new IntersectionObserver(entries => {
            let e1 = entries[0]
            e1.isIntersecting ? changebrandView(true) : changebrandView(false)
        })

        observer.observe(racingRef.current)
        observer2.observe(reviewRef.current)
        observer3.observe(brandRef.current)
    }, [])
    return (
        <div className="overview-section">
            <div className="overview-hero">
                <div className='overview-hero-txt'>
                    <h1>for the ride</h1>
                    <div id="underline"></div>
                    <p>We are driven to make the best motorcycles in the world.
                        Creating bikes with the perfect balance of power, handling and style.</p>

                    <div>We are chasing the same thing as our riders
                        <span id="capital">THE PERFECT RIDE</span>
                    </div>
                </div>
            </div>

            <div id="why-triumph">
                <h2>why triumph</h2>
                <div>
                    <video src={whyTriumph} autoPlay muted loop={true} />
                </div>
            </div>

            <div className='overview-news'>
                <div className='inner-overview-news'>
                    <p>Explore the latest news articles from Triumph</p>
                    <div id="underline2"></div>
                    <h3>Triumph news</h3>
                    <button>explore</button>
                </div>
            </div>

            <div className="overview-three-box">
                <div className="inner-o3b">
                    <div className='o3b-pic'>
                        <img src={racing} alt="" />
                    </div>
                    <div className='o3b-txt'>
                        <motion.h3 ref={racingRef} variants={h3Var} initial="start" animate={raceView ? "end" : "start"} transition={{ duration: 0.7, delay: 0.2 }}>Racing</motion.h3>
                        <motion.div className='o3b-bio' variants={otherVar} initial="start" animate={raceView ? "end" : "start"} transition={{ duration: 0.8, delay: 0.2 }}>
                            <p>racing winning.record breaking.history making.</p>
                            <p>find out about triumph racing history</p>
                        </motion.div>
                        <motion.div variants={h3Var} initial="start" animate={raceView ? "end" : "start"} transition={{ duration: 1.2, delay: 0.5 }}><p>discover more</p><FaArrowRight /></motion.div>
                    </div>
                </div>
                <div className="inner-o3b">
                    <div className='o3b-pic'>
                        <img src={reviews} alt="" />
                    </div>
                    <div className='o3b-txt'>
                        <motion.h3 ref={reviewRef} variants={h3Var} initial="start" animate={reviewView ? "end" : "start"} transition={{ duration: 0.7, delay: 0.3 }}>Reviews</motion.h3>
                        <motion.div className='o3b-bio' variants={otherVar} initial="start" animate={reviewView ? "end" : "start"} transition={{ duration: 0.8, delay: 0.3 }}>
                            <p>independent reviews about our range of motorcycles</p>

                        </motion.div>
                        <motion.div variants={h3Var} initial="start" animate={reviewView ? "end" : "start"} transition={{ duration: 1.2, delay: 0.5 }}><p>discover more</p><FaArrowRight /></motion.div>
                    </div>
                </div>
                <div className="inner-o3b">
                    <div className='o3b-pic'>
                        <img src={brand} alt="" />
                    </div>
                    <div className='o3b-txt'>
                        <motion.h3 ref={brandRef} variants={h3Var} initial="start" animate={brandView ? "end" : "start"} transition={{ duration: 0.7, delay: 0.4 }}>brand</motion.h3>
                        <motion.div className='o3b-bio' variants={otherVar} initial="start" animate={brandView ? "end" : "start"} transition={{ duration: 0.7, delay: 0.4 }}>
                            <p>an incredible motorcycle journey that begun in 1902</p>

                        </motion.div>
                        <motion.div variants={h3Var} initial="start" animate={brandView ? "end" : "start"} transition={{ duration: 1.2, delay: 0.5 }}><p>discover more</p><FaArrowRight /></motion.div>
                    </div>
                </div>
            </div>

            <div id="gentleman-ride">
                <div className='gentleman-box'>
                    <div className='gentleman-pic'>
                        <img src={gentleman} alt="" />
                    </div>
                    <div className='gentleman-txt'>
                        <h3 className='gentle-h3'>DISTINGUISHED GENTLEMAN'S RIDE</h3>
                        <Link className="gentleman-link">discover more<MdKeyboardArrowRight className='gentleman-link-arrow'/></Link>
                    </div>
                </div>
                <div className='gentleman-box'>
                    <div className='gentleman-pic'>
                        <img src={electric} alt="" />
                    </div>
                    <div className='gentleman-txt'>
                        <div>
                            <h3 className='gentle-h3'>PROJECT TRIUMPH TE-1</h3>
                            <p>Creating UK electric motorcycle capability.</p>
                        </div>

                        <Link className="gentleman-link">discover more<MdKeyboardArrowRight className='gentleman-link-arrow'/></Link>
                        <Link className="gentleman-link">discover more<MdKeyboardArrowRight className='gentleman-link-arrow'/></Link>
                    </div>
                </div>
            </div>

            <KeepInTouchBox/>
        </div>
    )
}

export default OverviewSection;