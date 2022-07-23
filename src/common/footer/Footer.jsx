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
            <p>.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>

                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>CRINGE Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
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
