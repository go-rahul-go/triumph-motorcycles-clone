import React, { useEffect, useState, useRef, useContext } from 'react'
import "./latestmodels.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import speed400 from "../assets/latest-models/speed-400-my24-family-image-block-1160x653.avif"
import scram400x from "../assets/latest-models/scrambler-400-x-my24-r2r-capability-image-block-1160x653.avif";
import { Link } from 'react-router-dom';
import { HideContext } from '../App';
function SampleNextArrow(props) {
    const { onClick, position } = props;

    return (
        <div
            className={position === 2 ? "latest-arrows l-next-arrow disabled-arrow" : "latest-arrows l-next-arrow"}

            onClick={onClick}

        >
            <FaArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick, position } = props;
   
    return (
        <div
            className={position === 1 ? "latest-arrows l-prev-arrow disabled-arrow" : "latest-arrows l-prev-arrow"}

            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
}

const data = [
    {

        url: speed400,
        title: "speed 400",
        bio: "born into peerless bloddline, the speed 400 triumph's unique modern classic roadster design in its DNA"
    },
    {
        url: scram400x,
        title: "scrambler 400x",
        bio: "beautifully balanced,effortlesly agile.the scrambler 400xis built for all riders, and all terrains"
    }
]
const LatestModelsCarousel = () => {
    const [pos, changePos] = useState(1)
    const display=useContext(HideContext)
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow position={pos} />,
        prevArrow: <SamplePrevArrow position={pos} />
    };
    const b1 = useRef();
    const b2 = useRef();
    useEffect(() => {
        const o = new IntersectionObserver(entries => {
            let e1 = entries[0]
            if (e1.isIntersecting) {
                changePos(1)
            }
            else{
                changePos(2)
            }
          
        })
        
        o.observe(b1.current)
        
    }, [])
    return (
        <section className={display?'latest-model-section-hide':'latest-model-section'}>
            <h2 id="latest-h2">discover our latest models</h2>
            <p className="latest-position">{`0${pos} / 02`}</p>
            <Slider {...settings} className='latest-slider'>
                <div className='l-slider-card' >
                    <div className='l-slider-content' >
                        <div className='l-slider-image' >
                            <img src={data[0].url} alt="" ref={b1}/>
                        </div>
                        <div className='l-slider-text'>
                            <h2>{data[0].title}</h2>
                            <p>{data[0].bio}</p>
                            <Link className='latest-bike-view'>view bike</Link>
                        </div>
                    </div>
                </div>
                <div className='l-slider-card'>
                    <div className='l-slider-content'>
                        <div className='l-slider-image'><img src={data[1].url} alt=""  ref={b2}/></div>
                        <div className='l-slider-text'>
                            <h2>{data[1].title}</h2>
                            <p>{data[1].bio}</p>
                            <Link className='latest-bike-view'>view bike</Link>
                        </div>
                    </div>
                </div>

            </Slider>

        </section>
    )
}

export default LatestModelsCarousel