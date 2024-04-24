import React from 'react'
import { motion } from "framer-motion"
import "./accessories.css";
import "./mobClothing.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import casual from "../assets/header images/casual_gear.jpg"
import riding_essential from "../assets/header images/riding_essential.jpg"
import moto_gear from "../assets/header images/motorcycle_gear.jpg";
import lifestyle from "../assets/header images/lifestyle.jpg"
import boots from "../assets/header images/boots.png"
import clothCatalogue from "../assets/header images/ridin_gear.jpg"
const clothingData = [
    {
        id: 0,
        url: casual,
        title: "casual wear",
        bio: "make a premium style statement with our heritage inspired capsule collection"
    },
    {
        id: 1,
        url: riding_essential,
        title: "riding essential",
        bio: "We know the importance of having the right kit for the elements. These packable riding essentials are always within easy reach."
    },
    {
        id: 2,
        url: moto_gear,
        title: "motorcycle gear",
        bio:"Performance wear to complement every bike we build; developed alongside each model."
    },
    {
        id: 3,
        url: lifestyle,
        title: "lifestyle collection",
        bio:"Discover authentic, moto-influenced style. Our lifestyle collection is inspired by the ride and built to be lived in."
    },
    {
        id: 4,
        url: clothCatalogue,
        title: "2023 clothing catalogue",
        bio:"Discover authentic, moto-influenced style. Our lifestyle collection is inspired by the ride and built to be lived in."
    },
    {
        id: 5,
        url: boots,
        title: "boots & gloves collection",
        bio:"Discover authentic, moto-influenced style. Our lifestyle collection is inspired by the ride and built to be lived in."
    },
    
]

const MobClothing = (props) => {
    return (
        <motion.div className='mob-clothing' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.23 }}>
            <MdKeyboardArrowLeft id="moto-close" onClick={() => props.closeMenu("")} />
            <div className="mob-moto-h1"> <h1 className="mob-moto-h1">clothing</h1></div>
            <div className='mob-clothing-box'>
                {
                    clothingData.map(item => {
                        return (
                            <Link to="/clothing" className='inner-mob-clothing' onClick={()=>{props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false);}}>
                                <div className='inner-mob-clothing-img'><img src={item.url} alt="" /></div>
                                <div className='inner-mob-clothing-txt'>
                                    <h3>{item.title}</h3>
                                    
                                </div>
                            </Link>
                        )
                    })
                }
                
            </div>
        </motion.div>
    )
}

export default MobClothing;



