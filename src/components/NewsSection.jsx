import React, { useEffect } from 'react'
import "./newsSection.css";
import newsHero from "../assets/discover-page/news-hero.avif"
import dgr from "../assets/discover-page/dgr2024.avif"
import speed400 from "../assets/discover-page/speed400.avif"
import motogp from "../assets/discover-page/racing.avif"
import triple from "../assets/discover-page/tripletrophy.avif"
import monster1 from "../assets/discover-page/monster energy.jpg"
import monster2 from "../assets/discover-page/monster energy2.avif"

import trophy from "../assets/discover-page/trophy competition.avif"
import storm from "../assets/discover-page/storm is coming.avif"

const newsData = [
    {
        url: dgr,
        title: "join team trriumph fro dgr 2024"
    },
    {
        url: speed400,
        title: "speed400 & scrambler 400x: your questions,our answers"
    },
    {
        url: motogp,
        title: "moto2 season opener"
    },
    {
        url: triple,
        title: "2024 triumph triple trophy competition launches"
    },
    {
        url: monster1,
        title: "monster energy triumph racing set to write histroy at mxcp round 1"
    },
    {
        url: monster2,
        title: "MONSTER ENERGY TRIUMPH RACING RIDERS COMPETE IN THOR FOR 2024"
    }
]


const NewsSection = () => {
    useEffect(() => {
        document.title = "Triumph | stories from around the globe"

        return () => {
            document.title = "Triumph motorcycles"
        }
    }, [])
    return (
        <section className='news-section'>
            <h1 id="news-h1">latest news</h1>
            <div className='news-hero'>
                <div className='news-hero-pic'>
                    <img src={newsHero} alt="" />
                </div>
                <div className='hero-news-txt'>
                    <p>RACING | 8TH APRIL 2024</p>
                    <h3>podium at mxgp of sardegna!</h3>
                    <p className='hnt-hide'>camden mclellen has secured his first overall podium result in this year's MX2 world championship with stunning third at MXGP of sardegna</p>
                </div>
            </div>
            <div className='upper-news-box'>
                <div className='inner-upper-box'>
                    <div className='upper-box-pic'>
                        <img src={trophy} alt="" />
                    </div>
                    <div className='upper-box-txt'>
                        <p>racing | 5th april 2024</p>
                        <h2>2024 triumph triple trophy competiton</h2>
                    </div>
                </div>
                <div className='inner-upper-box'>
                    <div className='upper-box-pic'>
                        <img src={storm} alt="" />
                    </div>
                    <div className='upper-box-txt'>
                        <p>brand | 12th march 2024</p>
                        <h2>storm is coming</h2>
                    </div>
                </div>
            </div>

            <div className='all-news-box'>
                {
                    newsData.map(item=>{
                        return(
                            <div className='inner-all-news'>
                                <div className='inner-news-pic-box'>
                                    <img src={item.url} alt=""/>
                                </div>
                                <div className='inner-news-pic-txt'>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default NewsSection