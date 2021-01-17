import React from "react"
import Layout from "../components/layout"
import Info from "../components/home/Info"
import { graphql } from "gatsby"
import BackgroundSection from "../components/globals/BackgroundSection"

export default function AboutPage({ data }) {
  return (
    <Layout>
      <div className="overlay">
        <BackgroundSection
          img={data.img.childImageSharp.fluid}
          title="about us"
          styleClass="about-background"
        />
        <Info />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
