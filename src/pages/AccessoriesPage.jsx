import React, { useContext, useEffect, useState } from 'react'
import "./accpage.css";
import { HideContext } from '../App';
import { GoArrowDown } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { allBikes, sports } from '../Data';

import { Link } from 'react-router-dom';


const AccessoriesPage = () => {
  const display = useContext(HideContext)
  const [showSort, changeShowSort] = useState(false)
  const [sortType, changeSortType] = useState("price ascending")
  const [roadster, roadsterMenu] = useState(allBikes.filter(item => item.type === "roadster"))
  const [classic, classicMenu] = useState(allBikes.filter(item => item.type === "classic"))
  const [adventure, advMenu] = useState(allBikes.filter(item => item.type === "adventure"))
  const [rocket, rocketMenu] = useState(allBikes.filter(item => item.type === "rocket"))
  const [sport, sportMenu] = useState(allBikes.filter(item => item.type === "sports"))


  function arrange(type) {
    if (type === "price ascending" || type === "") {
      roadsterMenu(roadster.sort((a, b) => b.price - a.price))
      classicMenu(classic.sort((a, b) => b.price - a.price))
      advMenu(adventure.sort((a, b) => b.price - a.price))
    }
    else if (type === "price descending") {
      roadsterMenu(roadster.sort((a, b) => a.price - b.price))
      classicMenu(classic.sort((a, b) => a.price - b.price))
      advMenu(adventure.sort((a, b) => a.price - b.price))
    }


  }
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <section className={display ? "acc-page-hide" : "acc-page"}>
      <div className='acc-page-hero'>
        <div id="acc-hero-txt">
          <h1>Accessorise your ride</h1>
        </div>
      </div>
      <div id="acc-sort-section">
        <div className='acc-sorting' onClick={() => changeShowSort(!showSort)} >
          <p>sort by {sortType} </p><GoArrowDown />
          <div className={showSort ? 'inner-sort-menu' : 'inner-sort-menu-hide'}>
            <p id="light" >sort by</p>
            <p onClick={() => { changeShowSort(false); changeSortType("featured") }}>featured</p>
            <p onClick={() => { changeShowSort(false); changeSortType("price ascending"); arrange(sortType) }}>price ascending</p>
            <p onClick={() => { changeShowSort(false); changeSortType("price descending"); arrange(sortType) }}>price descending</p>

          </div>

        </div>

      </div>
      <div className='acc-bikes'>
        <div className='acc-bike acc-roadster'>
          <div className='acc-bike-title'>
            <div className='inner-acc-bike-title'>
              <h2 >roadster</h2>
              <p>Triumph’s game-changing bikes and incredible signature triple engines are built for power, torque and instant responsiveness.</p>
              <Link className='view-collection'>view All collection</Link>
            </div>
          </div>
          <div className='acc-slider'>
            {
              roadster.map(item => {
                return (
                  <div className='acc-slider-card'>
                    <div className='acc-slider-pic'>
                      <img src={item.url} alt="" />
                    </div>
                    <p>{item.title}</p>
                    <p>{item.price === 0 ? "price coming soon" : "from ₹" + item.price}</p>
                    <div className='acc-card-links'>
                      <Link>configure</Link>
                      <Link>view bike</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='acc-bike acc-classic'>
          <div className='acc-bike-title'>
            <div className='inner-acc-bike-title'>
              <h2 >classics</h2>
              <p>The legendary Bonneville bloodline is built into our Modern Classics, with an unparalleled performance history, racing success and cultural impact.</p>
              <Link className='view-collection'>view All collection</Link>
            </div>
          </div>
          <div className='acc-slider'>
            {
              classic.map(item => {
                return (
                  <div className='acc-slider-card'>
                    <div className='acc-slider-pic'>
                      <img src={item.url} alt="" />
                    </div>
                    <p>{item.title}</p>
                    <p>{item.price === 0 ? "price coming soon" : "from ₹" + item.price}</p>
                    <div className='acc-card-links'>
                      <Link>configure</Link>
                      <Link>view bike</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='acc-bike acc-adventure'>
          <div className='acc-bike-title'>
            <div className='inner-acc-bike-title'>
              <h2 >adventure</h2>
              <p>Open up a world of adventure, with motorbikes built to go the distance, ready to go anywhere and take on anything.</p>
              <Link className='view-collection'>view All collection</Link>
            </div>
          </div>
          <div className='acc-slider'>
            {
              adventure.map(item => {
                return (
                  <div className='acc-slider-card'>
                    <div className='acc-slider-pic'>
                      <img src={item.url} alt="" />
                    </div>
                    <p>{item.title}</p>
                    <p>{item.price === 0 ? "price coming soon" : "from ₹" + item.price}</p>
                    <div className='acc-card-links'>
                      <Link>configure</Link>
                      <Link>view bike</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='acc-bike acc-rocket'>
          <div className='acc-bike-title'>
            <div className='inner-acc-bike-title'>
              <h2 >rocket 3</h2>
              <p>With the world’s largest production engine, and the highest torque, this is the ultimate high performance muscle roadster.</p>
              <Link className='view-collection'>view All collection</Link>
            </div>
          </div>
          <div className='acc-slider'>
            {
              rocket.map(item => {
                return (
                  <div className='acc-slider-card'>
                    <div className='acc-slider-pic'>
                      <img src={item.url} alt="" />
                    </div>
                    <p>{item.title}</p>
                    <p>{item.price === 0 ? "price coming soon" : "from ₹" + item.price}</p>
                    <div className='acc-card-links'>
                      <Link>configure</Link>
                      <Link>view bike</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='acc-bike acc-sport'>
          <div className='acc-bike-title'>
          <div className='inner-acc-bike-title'>
              <h2 >sports</h2>
              <p>Triumph’s game-changing bikes and incredible signature triple engines are built for power, torque and instant responsiveness.</p>
              <Link className='view-collection'>view All collection</Link>
            </div>
          </div>
          <div className='acc-slider'>
            {
              sports.map(item => {
                return (
                  <div className='acc-slider-card'>
                    <div className='acc-slider-pic'>
                      <img src={item.url} alt="" />
                    </div>
                    <p>{item.title}</p>
                    {item.price === 0 ? <p>{"price coming soon"}</p> : <p>{item.price}</p>}
                    <div className='acc-card-links'>
                      <Link>configure</Link>
                      <Link>view bike</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccessoriesPage;