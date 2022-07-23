import React from "react"
import "./style.css"

// call the picture title and desc for each service

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
    <article className="featurePage">
    <figure className="feat">
      <img src="./images/shops/ship.png" alt="" className="featureIcon" />
      <span className="featureTitle">FREE SHIP4NEW DRIP</span>
      <span className="featureDesc">
        We want all of our cutsomers CRINGE'd OUT! Free shipping on all orders.
      </span>
    </figure>
    <figure className="feat">
      <img className="featureIcon" src="./images/shops/return.png" alt="" />
      <span className="featureTitle">NO HASSLE RETURNS</span>
      <span className="featureDesc">
        Here @CRINGE we dont believe in cliche. If you have an issue with our
        product then returns are easy, refunds in 14 days.
      </span>
    </figure>
    <figure className="feat">
      <img className="featureIcon" src="./images/shops/giftcard.png" alt="" />
      <span className="featureTitle">CRINGE(GIFT)CARDS</span>
      <span className="featureDesc">
        Buy gift cards and use coupon codes easily. The best gift for the
        uncultured.{" "}
      </span>
    </figure>
    <figure className="feat">
      <img className="featureIcon" src="./images/shops/think.png" alt="" />
      <span className="featureTitle">CONTACT US!</span>
      <span className="featureDesc">
        Let us know what you want to see! We love feedback and communicating
        with our customer base.{" "}
      </span>
    </figure>
  </article>

      {/* <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section> */}
    </>
  )
}

export default Wrapper
