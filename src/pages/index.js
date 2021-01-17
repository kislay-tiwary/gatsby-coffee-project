import React from "react"
import Layout from "../components/layout"
import Info from "../components/home/Info"
import { graphql } from "gatsby"
import BackgroundSection from "../components/globals/BackgroundSection"
import Menu from "../components/home/Menu"
import Products from "../components/home/Products"
import Contact from "../components/home/Contact"

export default function Home({ data }) {
  return (
    <Layout>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="regular joe's"
        styleClass="default-background"
      />
      <Info />
      <Menu items={data.menu} />
      <Products />
      <Contact />
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
    menu: allContentfulCoffeeItem {
      nodes {
        id
        title
        price
        category
        description {
          description
        }
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
`

//https://youtu.be/oAVhEPey_qA?t=15736
