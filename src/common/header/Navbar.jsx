import React, { useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
         

          <div className='navlink'>
            {/* set our conditional that allows the switch between tabs once clicked */}
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
          
              <li>
                <Link to='/'>home</Link>
              </li>
            
              <li>
                <Link to='/user'>CRINGE User Sccount</Link>
              </li>
              <li>
                <Link to='./Contact'>Contact CRINGE</Link>
              </li>
            </ul>

          
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
