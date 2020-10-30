import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Lorem Ipsum Page 2</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Fugiat provident aut ipsum eligendi rem deserunt, animi at et, veritatis ducimus labore. Rerum asperiores quibusdam at veniam quia sunt ratione alias!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Fugiat provident aut ipsum eligendi rem deserunt, animi at et, veritatis ducimus labore. Rerum asperiores quibusdam at veniam quia sunt ratione alias!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Fugiat provident aut ipsum eligendi rem deserunt, animi at et, veritatis ducimus labore. Rerum asperiores quibusdam at veniam quia sunt ratione alias!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
