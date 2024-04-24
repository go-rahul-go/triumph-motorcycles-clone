import React,{useState} from 'react'
import "./subnav.css"
import { Link } from 'react-router-dom'

import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const motionvar={
  start:{
    y:"-50vh",
    opacity:0
  },
  end:{
    y:0,
    opacity:1
  }
}


const SubNav = ({title,links,changeParentMenuName,menuName,endOfMenu}) => {
  const [showMenu,changeMenuVisibility]=useState(false)
  return (
    <div className='sub-nav'>
      <div id="sub-nav-logo" className='pc-sub-nav-logo'><h1>{title}</h1></div>
      <div className='sub-nav-links-container'>
        {
          links.map(item=>{
            return(
              <p onClick={()=>changeParentMenuName(item)} className={menuName===item?' sub-nav-link-active':'sub-nav-link'}>{item}</p>
            )
          })
        }
      </div>
      <Link id="sub-link-end">{endOfMenu}</Link>

      <div className='mobile-sub-nav-selector' onClick={()=>changeMenuVisibility(!showMenu)}>
       {title}<IoIosArrowDown/>
      </div>
      <div className={showMenu?"mob-sub-menu":"mob-sub-menu-hide"}>
      {
          links.map(item=>{
            return(
              <p onClick={()=>{changeParentMenuName(item); changeMenuVisibility(false)}} className={menuName===item?'mob-sub-nav-link mob-sub-nav-link-active':'mob-sub-nav-link'}>{item}</p>
            )
          })
        }
        <IoIosCloseCircleOutline id="mob-side-nav-close" onClick={()=>changeMenuVisibility(false)}/>
      </div>
    </div>
  )
}

export default SubNav;