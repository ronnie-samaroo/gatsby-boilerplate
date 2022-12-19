import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServiceItem from "../components/ServiceItem"
import { Brain, HomeHero, Ellipse1, Ellipse2 } from "../utils/imgImport"
import { blogs, products, reviews, services } from "../utils/staticData"
import ProductItem from "../components/ProductItem"
import ReviewItem from "../components/ReviewItem"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import ContactSection from "../components/ContactSection"
import BlogItem from "../components/BlogItem"
import Loadable from "@loadable/component"
const OwlCarousel = Loadable(() => import("react-owl-carousel"))

const options = {
  items: 3,
  loop: true,
  margin: 0,
  autoplay: true,
  autoWidth: true,
  slidetransition: "linear",
  autoplaySpeed: 20000,
  autoplayHoverPause: false,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
}
const options2 = {
  items: 3,
  loop: true,
  margin: 0,
  autoplay: true,
  autoWidth: true,
  slidetransition: "linear",
  autoplaySpeed: 30000,
  autoplayHoverPause: false,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
}

const lates_blogs = blogs.slice(1, 4)

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="landing-hero">
      <img src={Ellipse1} alt="ellipse" className="ellipse1" />
      <div className="container position-relative">
        <div className="landing-hero__text">
          <h1>Technology to your e-discovery lifecycle</h1>
          <button className="btn-primary">Find out more</button>
        </div>
        <img src={HomeHero} alt="home hero" className="landing-hero__img" />
      </div>
    </section>
    <section className="cta-section">
      <div className="container">
        <img src={Ellipse2} alt="ellipse" className="ellipse2" />
        <div className="cta-section--border">
          <div className="row">
            <div className="col-sm-6">
              <img src={Brain} alt="brain" className="w-100" />
            </div>
            <div className="col-sm-6 d-flex flex-column justify-content-center">
              <div className="cta-section__content">
                <h2>Who we are</h2>
                <p className="txt-grey">
                  We automate the mundane so you can close cases faster.
                  Technical expertise and procedural rigour perfectly matched to
                  the latest technologies.
                </p>
                <button className="btn-primary">Contact us now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="service-section">
      <img src={Ellipse1} alt="ellipse" className="ellipse1" />
      <div className="container">
        <h2 className="text-center">Our service</h2>
        <div className="row">
          {services.map((item, idx) => (
            <div key={idx} className="col-sm-6">
              <ServiceItem data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="product-section">
      <img src={Ellipse2} alt="ellipse" className="ellipse2" />
      <div className="container">
        <h2 className="text-center">Our products</h2>
        <div className="row">
          {products.map((item, idx) => (
            <div key={idx} className="col-md-6 mb-5">
              <ProductItem data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="review-section">
      <img src={Ellipse2} alt="ellipse" className="ellipse2" />
      <h2 className="text-center">Customer testimonials</h2>
      <OwlCarousel className="owl-theme" {...options}>
        {reviews.map((item, idx) => (
          <ReviewItem data={item} key={idx} />
        ))}
      </OwlCarousel>
      <OwlCarousel className="owl-theme" {...options2}>
        {reviews.map((item, idx) => (
          <ReviewItem data={item} key={idx} />
        ))}
      </OwlCarousel>
    </section>
    <section className="blog-section">
      <img src={Ellipse1} alt="ellipse" className="ellipse1" />
      <div className="container">
        <h2 className="text-center">Blog</h2>
        <div className="row">
          <div className="col-md-6 blog mb-4">
            <BlogItem data={blogs[0]} type="col" />
          </div>
          <div className="col-md-6 blog-list">
            {lates_blogs.map((item, idx) => (
              <BlogItem data={item} key={idx} type="row" />
            ))}
          </div>
        </div>
      </div>
    </section>
    <ContactSection />
  </Layout>
)

export default IndexPage
