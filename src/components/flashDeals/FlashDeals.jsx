import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

// our first product listing
const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1><br></br>   Flash Deals</h1>
          </div>
          {/* add our product template */}
          <FlashCard productItems={productItems} addToCart={addToCart} key={0} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
