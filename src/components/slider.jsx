import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./slider.css"

const Slider = ({data}) => {
  const [slide, setSLide] = useState(0);

  const nextSLide = () => {
    setSLide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSLide = () => {
    setSLide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className='carousel'>
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSLide}/>
      {data.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index} className= {slide === index ? "slide" : "slide slide-hidden" }/>
      })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSLide}/>
        <span className="indicators">
          {data.map((_, index) => {
            return <button key={index} onClick={() => setSLide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"} ></button>
            })}
        </span>
    </div>
  )
}

export default Slider
