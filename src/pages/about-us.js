import React from "react"

import Layout from "../components/layout"
import SequenceItem from "../components/SequenceItem"
import {
  Looper,
  Looper2,
  Looper3,
  ContactImg,
  Triangle,
  Message,
  Call,
  Ellipse2,
  Ellipse1,
} from "../utils/imgImport"
import { services3, teams, contacts } from "../utils/staticData"
import ContactSection from "../components/ContactSection"
import FAQSection from "../components/FaqSection"

const AboutUs = () => {
  return (
    <Layout>
      <section className="sequence-hero">
        <img
          src={Triangle}
          className="triangle-img position-absolute"
          alt="triangle"
        />
        <img
          src={Looper}
          className="looper-img position-absolute"
          alt="looper"
        />
        <div className="container text-center">
          <p className="about-us-kicker">About us</p>
          <h1>Who we are</h1>
          <div className="row">
            {services3.map((item, idx) => (
              <div key={idx} className="col-sm-4">
                <SequenceItem data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="team-section">
        <img src={Ellipse2} alt="ellipse" className="ellipse2" />
        <div className="container ">
          <h2 className="text-center mb-5">Team</h2>
          <div className="row">
            {teams.map((item, idx) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-5" key={idx}>
                <img
                  src={item.avatar}
                  alt="example"
                  className="member-avatar"
                />
                <p className="member-name mt-4">{item.name}</p>
                <p className="member-role">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection />
      <section className="contacts-section">
        <img
          src={Looper2}
          alt="looper2"
          className="looper2-img position-absolute"
        />
        <img
          src={Looper3}
          alt="looper3"
          className="looper3-img position-absolute"
        />
        <img src={Ellipse1} alt="ellipse" className="ellipse1" />
        <div className="container">
          <h2 className="text-center mb-5">Contacts</h2>
          <div className="row">
            <div className="col-md-6">
              {contacts.map((item, idx) => (
                <div className="contact-item" key={idx}>
                  <h4 className="mb-3">{item.type}</h4>
                  <div className="row">
                    <div className="col-sm-6 d-flex align-items-center mb-2">
                      <img src={Call} alt="call" className="me-2" />
                      <a href={`tel:${item.phone1}`} className="contact-link">
                        {item.phone1}
                      </a>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center mb-2">
                      <img src={Call} alt="call" className="me-2" />
                      <a href={`tel:${item.phone2}`} className="contact-link">
                        {item.phone2}
                      </a>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center mb-2">
                      <img src={Message} alt="message" className="me-2" />
                      <a
                        href={`mailto:${item.email1}`}
                        className="contact-link"
                      >
                        {item.phone1}
                      </a>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center mb-2">
                      <img src={Message} alt="message" className="me-2" />
                      <a
                        href={`mailto:${item.email2}`}
                        className="contact-link"
                      >
                        {item.phone1}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img src={ContactImg} alt="contact img" className="contact-img" />
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </Layout>
  )
}

export default AboutUs
