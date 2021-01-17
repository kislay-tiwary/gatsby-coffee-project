import React, { useState, useEffect } from "react"
import Title from "../globals/Title"
import Img from "gatsby-image"

const Menu = props => {
  const [coffeeItems, setCoffeeItems] = useState(props.items)

  const [categories, setCategories] = useState([])

  const handleItems = category => {
    if (category !== "all") {
      setCoffeeItems({
        nodes: props.items.nodes.filter(item => item.category === category),
      })
    } else {
      setCoffeeItems(props.items)
    }
  }

  useEffect(() => {
    let allCatArray = []
    props.items.nodes.map(item => {
      allCatArray.push(item.category)
    })
    let uniqueCatArray = [...new Set(allCatArray)]
    uniqueCatArray = ["all", ...uniqueCatArray]
    setCategories(uniqueCatArray)
    console.log(categories)
  }, [])

  if (props.items.nodes.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          {/* categories  */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => handleItems(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          {/* items  */}
          <div className="row ">
            {coffeeItems.nodes.map(node => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  {/* item content   */}
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>${node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">{node.description.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="menu py-5">
      <div className="container">
        <Title title="best of our menu" />
        <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
          <h1>there are no item to display</h1>
        </div>
      </div>
    </section>
  )
}

export default Menu
