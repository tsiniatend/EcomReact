import React from "react"
import "./Contact.css"

const Contact = () => {
    return (
      <>
<div className="container2">
    <div className="contact-box">
      <form>
        <input type="text" className="input-field" placeholder="Your Name" />
        <input type="email" className="input-field" placeholder="Your Email" />
        <input type="text" className="input-field" placeholder="Phone Number" />
        <textarea
          type="text"
          className="input-field textarea-field"
          placeholder="Your message"
          defaultValue={""}
        />
        <button type="button" className="send">
          Send Message
        </button>
      </form>
    </div>
  </div>
      </>
    )
  }
  
  export default Contact
  
