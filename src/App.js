import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Contact from "./common/header/Contact"

function App() {
  /*
  step1 : call our data using props 
  
  Step 2 : add items to cart using useState 

  */

  //Step 1 : call both product data pages
  const { productItems } = Data
  const { shopItems } = Sdata

  //Step 2 : use state to increment 
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    // if our product is already in the cart we run function 
    //find the product if it is already in the cart
    const productExit = CartItem.find((item) => item.id === product.id)
   
     //we run map to find if items and product match to display our products
    
    //increase our productExit by 1 if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      //we run map to find if items and product match to display our products
    //increase our productExit by 1 if item and product doesnt match then will add new items
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Step: 6
  const decreaseQty = (product) => {
   
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run setCartItem
    // inside setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {


        //we run map to find if items and product match to display our products
    //increase our productExit by 1 if item and product doesnt match then will add new items
       // if product is exit and its qty is 1 then we will run setCartItem
    // inside setCartItem we will run filter to check if item.id is match to product.id
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Router>
        {/* have product item show first, add header buy count*/}
        <Header CartItem={CartItem} />
        <Switch>
          {/* takes whatever product and routes to pages, define var */}
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          {/* bring result to cart page */}
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Route path='/contact' exact>
            <Contact />
          </Route>
        <Footer />
      </Router>
    </>
  )
}

export default App
