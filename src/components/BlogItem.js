import React from "react"

const BlogItem = ({ data, type }) => {
  return (
    <>
      {type === "row" ? (
        <div className="row mb-4">
          <div className="col-md-5">
            <img src={data.image} alt="blog" className="blog-list__image" />
          </div>
          <div className="col-md-7">
            <div className="blog-info">
              <span
                className={`blog-info__category ${data.category.toLowerCase()}`}
              >
                {data.category}
              </span>
              <span className="blog-info__date">{data.date}</span>
              <span className="blog-info__date">{data.time}</span>
            </div>
            <h5>{data.title}</h5>
            <p className="txt-grey">{data.text}</p>
          </div>
        </div>
      ) : (
        <>
          <img src={data.image} alt="blog" className="blog__image" />
          <div className="blog-info">
            <span
              className={`blog-info__category ${data.category.toLowerCase()}`}
            >
              {data.category}
            </span>
            <span className="blog-info__date">{data.date}</span>
            <span className="blog-info__date">{data.time}</span>
          </div>
          <h4>{data.title}</h4>
          <p className="txt-grey">{data.text}</p>
        </>
      )}
    </>
  )
}

export default BlogItem
