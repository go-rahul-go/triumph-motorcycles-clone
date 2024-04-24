import React,{useState,useEffect,useRef,useContext} from 'react'
import "./clothing.css"
import clothPic from "../assets/clothing/roadster 2024.avif"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import { HideContext } from '../App';
const clothVar={
    start:{
        y:"8vh",
        opacity:0
    },
    end:{
        y:0,
        opacity:1
    }
}
const TriumphClothing = () => {
    const [youSawIt,didYouSawIt]=useState(false);
    const txt=useRef()
    const display=useContext(HideContext)
    useEffect(()=>{
        const observer=new IntersectionObserver(entries=>{
            let e1=entries[0]
            e1.isIntersecting?didYouSawIt(true):didYouSawIt(false)
        })
        observer.observe(txt.current)
    },[])
  return (
    <section className={display?"home-clothing-hide":'home-clothing'}>
        <motion.div className='home-cloth-detail' variants={clothVar} initial="start" animate={youSawIt?"end":"start"} transition={{duration:0.8,delay:0.3}}>
            <h2 ref={txt}>triumph clothing</h2>
            <p>Our clothing collection is designed by riders, for riders. You get authentic, individual style - built for the ride... and beyond.</p>
            <Link className="home-cloth-explore">explore</Link>
        </motion.div>
        <div className='home-cloth-image'>
            <img src={clothPic} alt=""/>
        </div>
    </section>
  )
}

export default TriumphClothing