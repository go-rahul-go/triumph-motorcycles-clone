import React ,{useRef,useEffect, useState,useContext} from 'react'
import "./welcome.css"
import { FaRegMap } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion"
import pic1 from "../assets/welcome/welcome1.jpg";
import pic2 from "../assets/welcome/welcome2.jpg";
import pic3 from "../assets/welcome/welcome3.jpg"
import { Link } from 'react-router-dom';
import { HideContext } from '../App';



const welcomedata = [
    {
        url: pic1,
        title: "the triumph of your dreams,closer than ever",
        explorelink: "explore models",
        delay:0.2
    },
    {
        url: pic2,
        title: "offering you perfect ride",
        explorelink: "offers and finance",
        delay:0.4
    },
    {
        url: pic3,
        title: "providing total peace of mind",
        explorelink: "triumph owners",
        delay:0.6
    }
]

const pVar = {
    start: {
        y: "10vh",
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1
    }
}
const aVar = {
    start: {
        y: "-10vh",
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1
    }
}
const Welcome = () => {
    
    const [see,changeSee]=useState(false)
    const display=useContext(HideContext)
    const w1=useRef();

    useEffect(()=>{
        const observer=new IntersectionObserver(entries=>{
            let e1=entries[0];
            e1.isIntersecting?changeSee(true):changeSee(false)

        })
        observer.observe(w1.current)
    },[])
    return (
        <section className={display?"welcome-hide":"welcome"}>
            <div className='enquiry'>
                <div className='inner-enquiry'>
                    <FaRegMap className="ie-icon"/><p>find dealer</p>
                </div>
                <div id="v-dash"></div>
                <div className='inner-enquiry'>
                    <FaMotorcycle className='ie-icon'/><p>book now</p>
                </div>
            </div>
            <div className='welcome-greeting'>
                <h2>Welcome to triumph</h2>
                <h3>where would you like to start?</h3>
            </div>
            <div className='welcome-links' ref={w1}>
                {
                    welcomedata.map((item) => {
                        
                        return (
                            <div className='inner-welcome-links' key={item.title}>
                                <div className='welcome-links-image'>
                                    <img src={item.url} alt="" />
                                </div>
                                <div className='welcome-links-text' >
                                    <motion.p variants={pVar} initial="start" animate={see?"end":"start"} transition={{duration:0.5,delay:item.delay}}>{item.title}</motion.p>
                                    <motion.span className='welcome-links-explore' variants={aVar} initial="start" animate={see?"end":"start"} transition={{duration:0.5,delay:item.delay}}><Link>{item.explorelink}</Link><FaArrowRight /></motion.span>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className='inner-welcome-links'>
                    <div className='welcome-links-image'></div>
                    <div className='welcome-links-text'></div>
                </div>
                <div className='inner-welcome-links'></div>
                <div className='inner-welcome-links'></div> */}
            </div>
        </section>
    )
}

export default Welcome