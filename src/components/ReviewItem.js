import React from "react"
import StarRatings from "react-star-ratings"

const ReviewItem = ({ data }) => {
  return (
    <div className="review-item">
      <p className="review-text">{data.text}</p>
      <div className="d-flex">
        <img src={data.avatar} alt="avatr" className="review-avatar" />
        <div className="review-info">
          <p className="review-name">{data.name}</p>
          <StarRatings
            rating={data.rates}
            starDimension="15px"
            starSpacing="2.5px"
            starRatedColor="#E8C15D"
          />
        </div>
      </div>
    </div>
  )
}

export default ReviewItem
