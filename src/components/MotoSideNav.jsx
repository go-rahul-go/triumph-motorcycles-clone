import React, { useState } from 'react'
import { motion } from "framer-motion"
import "./motosidenav.css"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { TfiLayoutGrid3 } from "react-icons/tfi";  //grid icon
import { IoOptionsOutline } from "react-icons/io5"; //option icon
import { PiMotorcycle } from "react-icons/pi"; //bike
import { CiLocationOn } from "react-icons/ci"; //location

//importing bike data
import { Adv, roadsters, modernClassics, rocket3, sports } from '../Data';


const MotoSideNav = (props) => {
  const [bikeCategory, changeBikeCategory] = useState("")
  return (

    <motion.div className='moto-side-nav' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.23 }}>
      <MdKeyboardArrowLeft id="moto-close" onClick={() => props.closeMenu("")} />
      <div className="mob-moto-h1"> <h1>Motorcylces</h1></div>
      <div className='mob-bike-links1'>
        <p onClick={() => changeBikeCategory("adv")} className='mobile-bike-link'>adventure</p>
        <p onClick={() => changeBikeCategory("roadster")} className='mobile-bike-link'>roadsters</p>
        <p onClick={() => changeBikeCategory("classic")} className='mobile-bike-link'>modern classic</p>
        <p onClick={() => changeBikeCategory("rocket")} className='mobile-bike-link'>rocket 3</p>
        <p onClick={() => changeBikeCategory("sport")} className='mobile-bike-link'>sports</p>
      </div>

      <div className='mob-bike-links2'>
        <Link>latest offers</Link>
        <Link>Enquire now</Link>
      </div>

      <div className='mob-bike-links3'>
        <div><TfiLayoutGrid3 className='mbl3-icons' /><p>model overview</p></div>
        <div><IoOptionsOutline className='mbl3-icons rot-90' /><p>customize</p></div>
        <div><PiMotorcycle className='mbl3-icons' /><p>book now</p></div>
        <div><CiLocationOn className='mbl3-icons' /><p>dealers</p></div>
      </div>
      {bikeCategory === 'adv' && <AdventureBike changeBike={changeBikeCategory} category={bikeCategory} />}
      {bikeCategory === 'roadster' && <RoadsterBike changeBike={changeBikeCategory} category={bikeCategory} />}
      {bikeCategory === 'classic' && <ClassicBike changeBike={changeBikeCategory} category={bikeCategory} />}
      {bikeCategory === 'rocket' && <Rocket changeBike={changeBikeCategory} category={bikeCategory} />}
      {bikeCategory === 'sport' && <Sport changeBike={changeBikeCategory} category={bikeCategory} />}
    </motion.div>




  )
}

export default MotoSideNav;

function AdventureBike({ changeBike, category }) {
  const [advbike, changeAdvBike] = useState("");
  const handleChange = (bike) => {
    if (bike === advbike)
      changeAdvBike("")
    else
      changeAdvBike(bike)
  }



  return (
    <motion.div className='mob-adv-menu' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.4 }} key={category}>
      <MdKeyboardArrowLeft id="moto-close" onClick={() => changeBike("")} />
      <div className='mob-moto-h1'> <h1 >Adventure</h1></div>
      <div className="mob-bikes-explore">
        <h2>Adventure</h2>
        <Link>explore<FaArrowRight /></Link>
      </div>
      {
        Adv.map((item) => {
          return (
            <div className={advbike === item.title ? "moto-bike-card moto-bike-card-bg-change" : "moto-bike-card"} onClick={() => handleChange(item.title)} >
              <div className='moto-bike-card-visible'>
                <div className='mob-bike-box'>
                  <img src={item.url} alt="" />
                </div>
                <div className='mob-bike-info'>
                  <h3>{item.title}</h3>
                  <p>price {item.price}</p>
                </div>
                <div className='mob-collapse-icon' onClick={() => handleChange(item.title)} >
                  {
                    advbike === item.title ? <FaMinus className='collapse-icon' /> : <FaPlus className={advbike === item.title ? 'collapse-icon collapse-icon-rotate' : 'collapse-icon'} />
                  }
                </div>
              </div>
              <div className={advbike === item.title ? "mob-bike-visible" : "mob-bike-hide"}>
                <Link className='inner-mob-bike mob-custom'>customize</Link>
                <Link className='inner-mob-bike mob-bike-details'>view details</Link>
              </div>
            </div>
          )
        })
      }

    </motion.div>
  )

}



function RoadsterBike({ changeBike, category }) {
  const [roadster, changeRoadster] = useState("")

  const handleChange = (bike) => {
    if (bike === roadster)
      changeRoadster("")
    else
      changeRoadster(bike)
  }

  return (
    <motion.div className='mob-adv-menu' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.4 }} key={category}>
      <MdKeyboardArrowLeft id="moto-close" onClick={() => changeBike("")} />
      <div className='mob-moto-h1'> <h1 >roadster</h1></div>
      <div className="mob-bikes-explore">
        <h2>Roadster</h2>
        <Link>explore<FaArrowRight /></Link>
      </div>
      {
        roadsters.map(item => {
          return (
            <div className={roadster === item.title ? "moto-bike-card moto-bike-card-bg-change" : "moto-bike-card"} onClick={() => handleChange(item.title)} >
              <div className='moto-bike-card-visible'>
                <div className='mob-bike-box'>
                  <img src={item.url} alt="" />
                </div>
                <div className='mob-bike-info'>
                  <h3>{item.title}</h3>
                  <p>price {item.price}</p>
                </div>
                <div className='mob-collapse-icon' onClick={() => handleChange(item.title)} >
                  {
                    roadster === item.title ? <FaMinus className='collapse-icon' /> : <FaPlus className={roadster === item.title ? 'collapse-icon collapse-icon-rotate' : 'collapse-icon'} />
                  }
                </div>
              </div>
              <div className={roadster === item.title ? "mob-bike-visible" : "mob-bike-hide"}>
                <Link className='inner-mob-bike mob-custom'>customize</Link>
                <Link className='inner-mob-bike mob-bike-details'>view details</Link>
              </div>
            </div>
          )
        })
      }
    </motion.div>
  )

}
function ClassicBike({ changeBike, category }) {
  const [classicBike, changeClassicBike] = useState("");

  const handleChange = (bike) => {
    if (bike === classicBike)
      changeClassicBike("")
    else
      changeClassicBike(bike)
  }
  return (

    <motion.div className='mob-adv-menu' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.4 }} exit={{ x: "-100vh" }} key={category}>
      <MdKeyboardArrowLeft id="moto-close" onClick={() => changeBike("")} />
      <div className='mob-moto-h1'> <h1 >modern classic</h1></div>
      <div className="mob-bikes-explore">
        <h2>modern classics</h2>
        <Link>explore<FaArrowRight /></Link>
      </div>
      {
        modernClassics.map((item) => {
          return (
            <div className={classicBike === item.title ? "moto-bike-card moto-bike-card-bg-change" : "moto-bike-card"} onClick={() => handleChange(item.title)} >
              <div className='moto-bike-card-visible'>
                <div className='mob-bike-box'>
                  <img src={item.url} alt="" />
                </div>
                <div className='mob-bike-info'>
                  <h3>{item.title}</h3>
                  <p>price {item.price}</p>
                </div>
                <div className='mob-collapse-icon' onClick={() => handleChange(item.title)} >
                  {
                    classicBike === item.title ? <FaMinus className='collapse-icon' /> : <FaPlus className={classicBike === item.title ? 'collapse-icon collapse-icon-rotate' : 'collapse-icon'} />
                  }
                </div>
              </div>
              <div className={classicBike === item.title ? "mob-bike-visible" : "mob-bike-hide"}>
                <Link className='inner-mob-bike mob-custom'>customize</Link>
                <Link className='inner-mob-bike mob-bike-details'>view details</Link>
              </div>
            </div>
          )
        })
      }
    </motion.div>


  )

}
function Rocket({ changeBike, category }) {
  const [rocket, changeRocket] = useState("")
  const handleChange = (bike) => {
    if (rocket === bike) {
      changeRocket("")
    }
    else {
      changeRocket("rocket 3")
    }
  }
  return (

    <motion.div className='mob-adv-menu' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.4 }} exit={{ x: "-100vh" }} key={category}>
      <MdKeyboardArrowLeft id="moto-close" onClick={() => changeBike("")} />
      <div className='mob-moto-h1'> <h1 >rocket 3</h1></div>
      <div className="mob-bikes-explore">
        <h2>Rocket 3</h2>
        <Link>explore<FaArrowRight /></Link>
      </div>
      {
        rocket3.map((item) => {
          return (
            <div className={rocket === item.title ? "moto-bike-card moto-bike-card-bg-change" : "moto-bike-card"} onClick={() => handleChange(item.title)} >
              <div className='moto-bike-card-visible'>
                <div className='mob-bike-box'>
                  <img src={item.url} alt="" />
                </div>
                <div className='mob-bike-info'>
                  <h3>{item.title}</h3>
                  <p>price {item.price}</p>
                </div>
                <div className='mob-collapse-icon' onClick={() => handleChange(item.title)} >
                  {
                    rocket === item.title ? <FaMinus className='collapse-icon' /> : <FaPlus className={rocket === item.title ? 'collapse-icon collapse-icon-rotate' : 'collapse-icon'} />
                  }
                </div>
              </div>
              <div className={rocket === item.title ? "mob-bike-visible" : "mob-bike-hide"}>
                <Link className='inner-mob-bike mob-custom'>customize</Link>
                <Link className='inner-mob-bike mob-bike-details'>view details</Link>
              </div>
            </div>
          )
        })
      }
    </motion.div>


  )

}


function Sport({ changeBike, category }) {
  const [sportsbike, changeSportsBike] = useState("")
  const handleChange = (bike) => {
    if (sportsbike===bike)
      changeSportsBike("")
    else
      changeSportsBike(bike)
  }
  return (

    <motion.div className='mob-adv-menu' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.4 }} exit={{ x: "-100vh" }} key={category}>
      <MdKeyboardArrowLeft id="moto-close" onClick={() => changeBike("")} />
      <div className='mob-moto-h1'> <h1 >sport</h1></div>
      <div className="mob-bikes-explore">
        <h2>sport</h2>
        <Link>explore<FaArrowRight /></Link>
      </div>
      {
        sports.map(item => {
          return (
            <div className={sportsbike === item.title ? "moto-bike-card moto-bike-card-bg-change" : "moto-bike-card"} onClick={() => handleChange(item.title)} >
              <div className='moto-bike-card-visible'>
                <div className='mob-bike-box'>
                  <img src={item.url} alt="" />
                </div>
                <div className='mob-bike-info'>
                  <h3>{item.title}</h3>
                  <p>price {item.price}</p>
                </div>
                <div className='mob-collapse-icon' onClick={() => handleChange(item.title)} >
                  {
                    sportsbike === item.title ? <FaMinus className='collapse-icon' /> : <FaPlus className={sportsbike === item.title ? 'collapse-icon collapse-icon-rotate' : 'collapse-icon'} />
                  }
                </div>
              </div>
              <div className={sportsbike === item.title ? "mob-bike-visible" : "mob-bike-hide"}>
                <Link className='inner-mob-bike mob-custom'>customize</Link>
                <Link className='inner-mob-bike mob-bike-details'>view details</Link>
              </div>
            </div>
          )
        })
      }
    </motion.div>


  )

}