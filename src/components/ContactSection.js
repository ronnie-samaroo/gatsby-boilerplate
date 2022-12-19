import React from "react"
import {
  Call,
  ContactBack1,
  ContactBack2,
  Ellipse1,
  Location,
  Message,
  Profile,
} from "../utils/imgImport"

const links = [
  {
    name: "example@gmail.com",
    to: "mailto:example@gmail.com",
    icon: Message,
  },
  {
    name: "(480) 555-0103",
    to: "tel:+4805550103",
    icon: Call,
  },
  {
    name: "4140 Parker Rd. Allentown",
    to: "http://maps.google.com",
    icon: Location,
  },
]

const ContactSection = () => {
  return (
    <section className="contact-section">
      <img src={Ellipse1} alt="ellipse" className="ellipse1" />
      <img src={ContactBack1} alt="contact back1" className="contact-back1" />
      <img src={ContactBack2} alt="contact back2" className="contact-back2" />
      <div className="contact-form">
        <h2 className="text-center">Get in Touch</h2>
        <p className="txt-grey mt-3 mb-5 text-center">
          Welcome, if you have any other questions!
        </p>
        <form className="form">
          <div className="row">
            <div className="form-group col-sm-6">
              <img src={Profile} alt="profile" id="input_img" />
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="form-group col-sm-6">
              <img src={Message} alt="Message" id="input_img" />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="mail@example.com"
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
        <ul className="contact-links">
          {links.map((item, idx) => (
            <li key={idx} className="contact-link">
              <img src={item.icon} alt="link icon" className="me-2" />
              <a href={item.to}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ContactSection
