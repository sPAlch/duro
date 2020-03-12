import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductPage = props => {
  return(
    <Layout lang={ props.pageContext.lang}>
      <SEO 
      	title="Duro" 
      	lang={ props.pageContext.lang}
      />
    </Layout>
  )
}

export default ProductPage
