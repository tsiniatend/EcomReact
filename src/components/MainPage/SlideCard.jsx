import React from "react"
import Sdata from "./Sdata"
import './circle.css'
import Slider from "react-slick"
// call library that will auto our slider
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// call our slider object using imported carousel
const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // set to automatically move thro slides and lets append dots to later be edited
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
    {/* call our sliders data by maping its value by calling title desc and cover. Start with Slider settings to start carousel */}
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
             <div className="sliderItem">
            <div className="sliderCircle"></div>
            </div>
            {/* split class name for multiple styles */}
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  {/* called from our slider js */}
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' />
                </div>
                
              </div>
            
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
