import React from "react"

import Layout from "../components/layout"
import ServiceItem from "../components/ServiceItem"
import {
  Burst,
  ForensyncLogo,
  Topology1,
  Message,
  Topology2,
  Topology3,
  Workflow1,
  Workflow2,
  Workflow3,
  Workflow4,
  Workflow5,
  Workflow6,
  Ellipse2,
  Ellipse1,
} from "../utils/imgImport"
import { ecosystems, services4 } from "../utils/staticData"
import ContactSection from "../components/ContactSection"
import Pricing from "../components/PricingSection"
const Edr = () => {
  return (
    <Layout>
      <section className="forensync-hero">
        <img
          src={Burst}
          className="triangle-img position-absolute"
          alt="triangle"
        />
        <img
          src={Topology1}
          className="looper-img position-absolute"
          alt="looper"
        />
        <div className="container text-center forensync">
          <img src={ForensyncLogo} alt="sequence logo" className="mt-3" />
          <h1>Technology to your e-discovery lifecycle</h1>
          <div className="d-flex position-relative justify-content-between my-3">
            <img src={Message} alt="Message" id="input_img" />
            <input type="email" id="email" placeholder="mail@example.com" />
            <button className="btn-primary">Find out more</button>
          </div>
        </div>
      </section>
      <section className="service-section">
        <img src={Ellipse2} alt="ellipse" className="ellipse2" />
        <div className="container">
          <h2 className="text-center">We focus on three pillars:</h2>
          <div className="row">
            {services4.map((item, idx) => (
              <div key={idx} className="col-sm-4">
                <ServiceItem data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="workflow-section">
        <img
          src={Topology2}
          className="topology2-img position-absolute"
          alt="Topology2"
        />
        <img
          src={Topology3}
          className="topology3-img position-absolute"
          alt="Topology3"
        />
        <div className="container position-relative">
          <h2 className="text-center">
            Easily manage workflows across your entire lab
          </h2>
          <div className="row">
            <div className="col-sm-6">
              <img src={Workflow1} alt="workflow" className="workflow-img" />
            </div>
            <div className="col-sm-6">
              <img src={Workflow2} alt="workflow" className="workflow-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="ecosystem-section">
        <img src={Ellipse2} alt="ellipse" className="ellipse2" />
        <div className="container">
          <h2 className="mb-5 text-center">Connector ecosystem </h2>
          <div className="d-flex justify-content-center mb-5 flex-wrap">
            {ecosystems.map((item, idx) => (
              <img src={item} key={idx} alt="ecosystem" className="mx-5 mb-5" />
            ))}
          </div>
        </div>
      </section>
      <section className="workflow-section">
        <img src={Ellipse1} alt="ellipse" className="ellipse1" />
        <div className="container">
          <h2 className="text-center">
            Management workflows across your entire lab
          </h2>
          <div className="row">
            <div className="col-sm-6">
              <img src={Workflow3} alt="workflow" className="workflow-img" />
            </div>
            <div className="col-sm-6">
              <img src={Workflow4} alt="workflow" className="workflow-img" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <img src={Workflow5} alt="workflow" className="workflow-img" />
            </div>
            <div className="col-sm-6">
              <img src={Workflow6} alt="workflow" className="workflow-img" />
            </div>
          </div>
        </div>
      </section>
      <Pricing />
      <ContactSection />
    </Layout>
  )
}

export default Edr
