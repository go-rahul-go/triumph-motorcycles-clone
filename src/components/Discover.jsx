import React, { useContext } from 'react'
import "./discover.css";
import factoryTour from "../assets/discover/experience.avif"
import racing from "../assets/discover/racing.avif"
import news from "../assets/discover/triumph-news.avif"
import reviews from "../assets/discover/product-reviews.avif"
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HideContext } from '../App';
const data = [
    {
        id:0,
        url: news,
        title: "READ THE LATEST TRIUMPH NEWS",
        btnName: "latest news",
        link:"/discover"
    },
    {
        id:1,
        url: racing,
        title: 'RACE WINNING. RECORD BREAKING. HISTORY MAKING.',
        btnName: "racing",
        link:"/discover"
    },
    {
        id:2,
        url: reviews,
        title: "INDEPENDENT TRIUMPH PRODUCT REVIEWS ",
        btnName: "reviews",
        link:"/discover"
    },
    {
        id:3,
        url: factoryTour,
        title: "ENGAGING AND IMMERSIVE MOTORCYCLE EXPERIENCES ",
        btnName: 'experiences',
        link:"/discover"
    }
]

const Discover = () => {
    const display=useContext(HideContext)
    return (
        <section className={display?'discover-section-hide':'discover-section'}>
            <h2 id="d-h2">Discover triumph</h2>
            <div className='discover-grid'>
                {
                    data.map(item => {
                        return (
                            <Link className='d-card' key={item.id}>
                                <span className='d-card-image'>
                                    <img src={item.url} alt="" />
                                </span>
                                <span className='d-card-text'>
                                    <h2>{item.title}</h2>
                                    <Link to={item.link} className='discover-button'>{item.btnName}<MdOutlineKeyboardArrowRight className='discover-arrow'/></Link>
                                </span>

                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Discover