import React from "react"
import logo from "../../components/assets/images/cringewear.png"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1><img src={logo} alt='' /></h1>
            <p></p>
            <div className='icon d_flex'>
              
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>CRINGE Careers</li>
              <li>Our Stores</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className='box'>
            <h2>CRINGE Care</h2>
            <ul>
        
              <li>How to CRINGEBINGE? </li>
              <li>Track Your Order </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact CRINGE</h2>
            <ul>
              <li>Charlotte, NC </li>
              <li>Email: cringesupport@wegotyou.com</li>
              <li>Phone: +1 557 359 9384</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
