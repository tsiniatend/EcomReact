import React from "react"
import SlideCard from "./SlideCard"

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard key={0} />
        </div>
      </section>
    </>
  )
}

export default SliderHome
