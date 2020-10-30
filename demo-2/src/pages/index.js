import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "./index.css"

const IndexPage = ({ data }) => {
  console.log(data)

  return <div>
    <h1>Hello</h1>
    <p>Small photo gallery</p>

    <div className="photos">
      {data.allFile.edges.map(({ node }) => {
        return <Img key={node.id} fluid={node.childImageSharp.fluid}/>
      })}
    </div>


  </div>
}

export const pageQuery = graphql`
  {
  allFile(filter: {absolutePath: {regex: "//photos//"}}, limit: 30) {
    edges {
      node {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default IndexPage
