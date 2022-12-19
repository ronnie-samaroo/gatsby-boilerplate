import React, { useState } from "react"
import Layout from "../components/layout"
import {
  Ellipse1,
  Ellipse2,
  Looper4,
  Looper5,
  Topology4,
  Topology5,
} from "../utils/imgImport"
import { blogs } from "../utils/staticData"
import ContactSection from "../components/ContactSection"
import ReactPaginate from "react-paginate"
import BlogItem from "../components/BlogItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const BlogPage = () => {
  const lates_blogs = blogs.slice(1, 4)
  const [currentPage, setCurrentPage] = useState(0)
  const PER_PAGE = 9
  const offset = currentPage * PER_PAGE
  const currentPageData = blogs.slice(offset, offset + PER_PAGE)
  const pageCount = Math.ceil(blogs.length / PER_PAGE)

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  }

  return (
    <Layout>
      <section className="sequence-hero">
        <img
          src={Topology4}
          className="triangle-img position-absolute"
          alt="triangle"
        />
        <img
          src={Topology5}
          className="looper-img position-absolute"
          alt="looper"
        />
        <div className="container text-center">
          <p className="about-us-kicker">Blog</p>
          <h1>All the important insights and news you need to know</h1>
        </div>
      </section>
      <section className="blog-section">
        <div className="container">
          <h2 className="text-center">Latest Posts</h2>
          <div className="row">
            <div className="col-md-6 blog mb-4">
              <img src={blogs[0].image} alt="blog" className="blog__image" />
              <div className="blog-info">
                <span
                  className={`blog-info__category ${blogs[0].category.toLowerCase()}`}
                >
                  {blogs[0].category}
                </span>
                <span className="blog-info__date">{blogs[0].date}</span>
                <span className="blog-info__date">{blogs[0].time}</span>
              </div>
              <h4>{blogs[0].title}</h4>
              <p className="txt-grey">{blogs[0].text}</p>
            </div>
            <div className="col-md-6 blog-list">
              {lates_blogs.map((item, idx) => (
                <BlogItem data={item} key={idx} type="row" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section position-relative">
        <img src={Ellipse1} alt="ellipse" className="ellipse1" />
        <img src={Ellipse2} alt="ellipse" className="ellipse2" />
        <img
          src={Looper4}
          alt="looper"
          className="looper4-img position-absolute"
        />
        <img
          src={Looper5}
          alt="looper"
          className="looper5-img position-absolute"
        />
        <div className="container">
          <h2 className="text-center mb-5">More from Redutech </h2>
          <div className="row">
            {currentPageData.map((item, idx) => (
              <div className="col-md-4 mb-5" key={idx}>
                <BlogItem data={item} type="col" />
              </div>
            ))}
          </div>
          <ReactPaginate
            previousLabel={
              <FontAwesomeIcon icon={faAngleLeft} className="fa-lg" />
            }
            nextLabel={
              <FontAwesomeIcon icon={faAngleRight} className="fa-lg" />
            }
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination-link"}
            nextLinkClassName={"pagination-link"}
            disabledClassName={"pagination-link__disabled"}
            activeClassName={"pagination-link__active"}
          />
        </div>
      </section>
      <ContactSection />
    </Layout>
  )
}

export default BlogPage
