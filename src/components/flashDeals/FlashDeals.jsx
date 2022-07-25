import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

// our first product listing
const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
    {/* set flash sales section */}
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1><br></br>   Flash Deals</h1>
          </div>
          {/* add our product template */}
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
