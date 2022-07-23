import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"

// set const add cart and shop functionaitly 
const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
    {/* resuse styling from css products  */}
      <section className='shop background'>
        <div className='container d_flex'>
          {/* <Catg /> */}

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>CRINGE Products</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
