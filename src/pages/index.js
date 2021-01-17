import React from "react"
import Layout from "../components/layout"
import Info from "../components/home/Info"
import { graphql } from "gatsby"
import BackgroundSection from "../components/globals/BackgroundSection"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="overlay">
        <BackgroundSection
          img={data.img.childImageSharp.fluid}
          title="regular joe's"
          styleClass="default-background"
        />
        <Info />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

// https://youtu.be/oAVhEPey_qA?t=8816
