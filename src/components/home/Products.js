import React from "react"
import Title from "../globals/Title"
import Product from "./Product"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    products: allContentfulCoffeeProduct {
      nodes {
        title
        id
        price
        image {
          fluid(maxHeight: 426) {
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

const Products = () => {
  const data = useStaticQuery(getData)
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {data.products.nodes.map(product => {
            return <Product key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
