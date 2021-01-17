import React from "react"
import { Link } from "gatsby"
import Title from "../globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              gravida consequat consectetur. Sed eget mattis enim, eu tempus
              tortor. Cras tempor pretium mi ac vehicula. Sed mauris justo,
              pretium id metus eleifend, vestibulum eleifend eros. Proin nec
              tortor a ante aliquam elementum. Cras maximus ipsum sed iaculis
              interdum. Nulla elementum ex turpis, id iaculis nibh suscipit sit
              amet.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
