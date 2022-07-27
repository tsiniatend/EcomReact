// import React from "react"
import React, { useState, useEffect} from "react"
import ShopCart from "./ShopCart"
import "./style.css"

// set const add cart and shop functionaitly 
const Shop = ({ addToCart, shopItems }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://ecomhost.herokuapp.com/")
    .then((responce) => responce.json())
    .then(data => {
    setProducts(data)
    })
  },[])
  console.log(products, products.length)
  
    return (
      <>
      {/* resuse styling from css products  */}
        <section className='shop background'>
          <div className='container d_flex'>
        
  
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
                {products.map(product => { 
                  console.log(product)
                  return (
                    <ShopCart addToCart={addToCart} products={product} key={product.id} />
                  ) 
                })}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  
}

export default Shop
