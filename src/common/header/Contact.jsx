import React from "react"
import "./Contact.css"

const Contact = () => {
    return (
      <>
<div className="container2">
    <div className="contact-box">
      <form method="post" action="https://ecomhost.herokuapp.com/contact" >
        <input type="text" className="input-field" placeholder="Your Name" name="name" id="name"/>
        <input type="email" className="input-field" placeholder="Your Email" name="email" id="email"/>
        <input type="text" className="input-field" placeholder="Phone Number" name="phone" id="phone"/>
        <textarea
          type="text"
          className="input-field textarea-field"
          placeholder="Your message"
          defaultValue={""}
          name="message"
          id="message"
        />
        <button type="sumbit" value="send" className="send">
          Send Message
        </button>
      </form>
    </div>
  </div>
      </>
    )
  }
  
  export default Contact
  
