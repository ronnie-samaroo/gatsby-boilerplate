import React from "react"
import { Link } from "gatsby"

const ProductItem = ({ data }) => (
  <div className="product">
    <img src={data.icon} alt="product icon" className="product-icon" />
    <h4>{data.title}</h4>
    <p className="txt-grey">{data.text}</p>
    <div className="d-flex">
      <Link className="btn-primary" to={`/${data.to}`}>
        Find out more
      </Link>
    </div>
  </div>
)

export default ProductItem
