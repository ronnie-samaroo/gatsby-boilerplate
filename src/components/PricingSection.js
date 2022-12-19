import React from "react"
import {
  Check,
  Ellipse2,
  Headless,
  Standard,
  Ultimate,
} from "../utils/imgImport"

const Pricing = () => {
  return (
    <section className="pricing">
      <img src={Ellipse2} alt="ellipse" className="ellipse2" />
      <div className="container">
        <h2 className="text-center">Pricing</h2>
        <div className="row">
          <div className="col-md-4 mb-3 d-flex align-items-center">
            <div className="pricing-box">
              <div className="pricing-heading">
                <div className="">
                  <p className="pricing-type">Headless</p>
                  <h3 className="price">
                    100$
                    <small>/ month</small>
                  </h3>
                </div>
                <img src={Headless} alt="pricing icon" />
              </div>
              <button className="btn-secondary w-100 mt-5 mb-4">
                Choose Headless
              </button>
              <ul className="pricing-details">
                <li className="d-flex align-items-center">
                  <img src={Check} alt="check" />
                  Cost-savings and efficiencies
                </li>
                <li className="d-flex align-items-center">
                  <img src={Check} alt="check" />
                  Cost-savings and efficiencies
                </li>
                <li className="d-flex align-items-center">
                  <img src={Check} alt="check" />
                  Cost-savings and efficiencies
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 mb-3 d-flex align-items-center">
            <div className="pricing-box active">
              <div className="pricing-heading">
                <div className="">
                  <p className="pricing-type">Standard</p>
                  <h3 className="price">
                    200$
                    <small>/ month</small>
                  </h3>
                </div>
                <img src={Standard} alt="pricing icon" />
              </div>
              <button className="btn-primary w-100 mt-5 mb-4">
                Choose Standard
              </button>
              <ul className="pricing-details">
                <li className="d-flex align-items-center">
                  <img src={Check} alt="check" />
                  Cost-savings and efficiencies
                </li>
                <li className="d-flex align-items-center">
                  <img src={Check} alt="check" />
                  Cost-savings and efficiencies
                </li>
                <li className="d-flex align-items-center">
                  <img src={Check} alt="check" />
                  Cost-savings and efficiencies
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 mb-3 d-flex align-items-center">
            <div className="pricing-box">
              <div className="pricing-heading">
                <div className="">
                  <p className="pricing-type">Ultimate</p>
                  <h3 className="price">
                    300$
                    <small>/ month</small>
                  </h3>
                </div>
                <img src={Ultimate} alt="pricing icon" />
              </div>
              <button className="btn-secondary w-100 mt-5 mb-4">
                Choose Ultimate
              </button>
              <ul className="pricing-details">
                <li className="d-flex align-items-center">
                  <img src={Check} alt="check" />
                  Cost-savings and efficiencies
                </li>
                <li className="d-flex align-items-center">
                  <img src={Check} alt="check" />
                  Cost-savings and efficiencies
                </li>
                <li className="d-flex align-items-center">
                  <img src={Check} alt="check" />
                  Cost-savings and efficiencies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
