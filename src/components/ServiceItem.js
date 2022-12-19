import React from "react"

const ServiceItem = ({ data }) => (
  <div className="service-item">
    <img src={data.icon} alt="service icon" className="service-icon" />
    <h4>{data.title}</h4>
    <p className="txt-grey">{data.text}</p>
  </div>
)

export default ServiceItem
