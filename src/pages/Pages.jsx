import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Shop from "../components/shops/Shop"
import Wrapper from "../components/wrapper/Wrapper"

// Main Page
// In order to add cart functionailty we create const with paramters to carry it out
const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      {/* add to cart method */}
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
     
    </>
  )
}

export default Pages
