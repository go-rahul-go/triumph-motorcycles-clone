import React, { useContext, useEffect, useState, useRef } from 'react'
import "./clothingpage.css";
import { HideContext } from '../App';
import casualTop from "../assets/clothing-page/casual.avif"
import motorcycleGear from "../assets/clothing-page/motorcycle.avif"

import lifeStyle from "../assets/clothing-page/lifestyle.avif"
import casualWear from "../assets/clothing-page/casual large.avif"
import riding from "../assets/clothing-page/riderwear large.avif"

import { motion } from "framer-motion"
import { Link } from 'react-router-dom';



const motionVar = {
    start: {
        y: "10vh",
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1
    }
}
const ClothingPage = () => {
    const [index, changeIndex] = useState(0);
    const display = useContext(HideContext)
    const [lifeView, changeLifeView] = useState(false);
    const [rideView, changeRideView] = useState(false);
    const [casualView, changeCasualView] = useState(false);
    const [time, updateTime] = useState(0)
    const life = useRef();
    const ride = useRef();
    const casual = useRef();

    


    // const previous = () => {
    //     if (index === 0) {
    //         changeIndex(1)
    //     }
    //     else {
    //         changeIndex(index - 1)
    //     }
    // }
    const next = () => {
        if (index === 1) {
            changeIndex(0)
        }
        else {
            changeIndex(index + 1)
        }
    }



    useEffect(() => {
        let timeVar = 0;
        if (time === 10) {
            next();
            updateTime(0);
        }
        else {
            timeVar = setInterval(() => {
                updateTime(time + 1)
            }, 1000)
        }
        return () => {
            clearInterval(timeVar)
        }
    }, [time])


    useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            let e1 = entries[0]

            e1.isIntersecting ? changeLifeView(true) : changeLifeView(false)
        })
        const Ridingobserver = new IntersectionObserver(entries => {
            let e1 = entries[0]
            e1.isIntersecting ? changeRideView(true) : changeRideView(false)

        })
        const casualobserver = new IntersectionObserver(entries => {
            let e1 = entries[0]
            e1.isIntersecting ? changeCasualView(true) : changeCasualView(false)

        })

        
        



        observer.observe(life.current)
        Ridingobserver.observe(ride.current)
        casualobserver.observe(casual.current)
        
        window.scrollTo(0,0)

    }, [])
    return (
        <section className={display ? 'clothing-page-hide' : 'clothing-page'}>
            <div className='cloth-image-slider'>
                <div className={index === 0 ? "cloth-card cloth-card-top" : "cloth-card cloth-card-bottom"}>
                    <img src={casualTop} alt="" />
                    <motion.div className='clothing-gear-txt' >
                        <h2>Casual collection</h2>
                        <p>Our clothing collection is designed by riders, for riders. You get authentic, individual style - built for the ride... and beyond. For Spring Summer, we have introduced an all new technical collection.</p>
                        <div className="gear-btns">
                            <Link>find a retailer</Link>
                            <Link>discover more</Link>
                        </div>
                    </motion.div>
                </div>
                <div className={index === 1 ? "cloth-card cloth-card-top" : "cloth-card cloth-card-bottom"}>
                    <img src={motorcycleGear} alt="" />
                    <motion.div className='clothing-gear-txt'>
                        <h2>motorcycle clothing</h2>
                        <p>Our clothing collection is designed by riders, for riders. You get authentic, individual style - built for the ride... and beyond. For Spring Summer, we have introduced an all new technical collection.</p>
                        <div className="gear-btns">
                            <Link>find a retailer</Link>
                            <Link>discover more</Link>
                        </div>
                    </motion.div>
                </div>

            </div>
            <div className='clothing-types'>
                <div id="c-intro">
                    <p>Our clothing collection is designed by riders, for riders. You get authentic, individual style - built for the ride... and beyond.</p>
                </div>
                <div className='inner-c-types c-lifestyle' >
                    <div className='c-type-image' >
                        <motion.img src={lifeStyle} variants={motionVar} initial="start" animate={lifeView ? "end" : "start"} transition={{ duration: 0.5, delay: 0.2 }} ref={life}/>
                    </div>
                    <motion.div className='c-type-txt' variants={motionVar} initial="start" animate={lifeView ? "end" : "start"} transition={{ duration: 0.6, delay: 0.4 }}>
                        <h2 >Lifestylec collection</h2>
                        <p>Introducing Triumph Motorcycles Lifestyle collection. Combining a passion for the finest fabrics and our commitment to exceptional craftsmanship, we have reimagined authentic icons for a contemporary moto-influenced style. Discover an extensive range of moto-inspired tees, sweatshirts and short sleeve t-shirts, plus jackets in rich, premium leather and waxed-cotton, as well as jeans crafted from raw selvedge denim to give you the edge.</p>
                        <Link className="c-collection">lifestyle collection</Link>
                    </motion.div>
                </div>
                <div className='inner-c-types c-motorcycle inner-c-types-reverse' >
                    <div className='c-type-image' id="cti-2" >
                        <motion.img src={riding} variants={motionVar} initial="start" animate={rideView ? "end" : "start"} transition={{ duration: 0.5, delay: 0.2 }} ref={ride}/>
                    </div>
                    <motion.div className='c-type-txt' variants={motionVar} initial="start" animate={rideView ? "end" : "start"} transition={{ duration: 0.6, delay: 0.4 }} >
                        <h2 >motorcycle wear</h2>
                        <p>Our motorcycle range is designed for riders by riders. Why? Because they know better than anyone the importance of having the right kit. We've spent years crafting our CE-approved riderwear, perfecting the delicate balance of authentic style, innovative design and cutting-edge technology. The result is a timeless collection made for the ride.  </p>
                        <Link className="c-collection">motorcylce wear</Link>
                    </motion.div>
                </div>
                <div className='inner-c-types c-casual inner-c-types'>
                    <div className='c-type-image' id="cti-3" >
                        <motion.img src={casualWear} variants={motionVar} initial="start" animate={casualView ? "end" : "start"} transition={{ duration: 0.5, delay: 0.2 }} ref={casual}/>
                    </div>
                    <motion.div className='c-type-txt' variants={motionVar} initial="start" animate={casualView ? "end" : "start"} transition={{ duration: 0.6, delay: 0.4 }} >
                        <h2 >casual wear</h2>
                        <p>We've a reputation for creating classics, and our casual wear collection is no exception. Designed in-house, our range features modern clothing executed with craftsmanship and care. Jackets and sweaters sit alongside graphic print T-shirts and polos to give you authentic style that stands out from the crowd.  </p>
                        <Link className="c-collection">casual wear</Link>
                    </motion.div>
                </div>

            </div>

        </section>
    )
}

export default ClothingPage;