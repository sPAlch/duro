import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductPage = props => {

  console.log(props)
  return(
    <Layout lang={ props.pageContext.lang}>
      <SEO title="Duro" />
    </Layout>
  )
}

export default ProductPage
