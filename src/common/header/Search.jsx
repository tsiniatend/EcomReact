import React from "react"
import logo from "../../components/assets/images/cringewear.png"
import { Link } from "react-router-dom"


const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
    {/* set up area for our search bar, use same container naming convention, add our logo  */}
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

      {/* our search box  */}
          <div className='search-box f_flex'>
            {/* search emoji */}
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Start your CringeBINGE....' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>

            {/* link to seperate cart page using icon */}
            <div className='cart'>
              {/* if items in cart is added then relays length */}
              <Link to='./Cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
