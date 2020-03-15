import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductCategory from "../components/product-category"

const LandingPage = props => {
  return(
    <Layout lang={ props.pageContext.lang }>
      <SEO 
      	title="Duro" 
      	lang={ props.pageContext.lang}
      />
      <ProductCategory site={ props.pageContext.lang }/>
    </Layout>
  )
}

export default LandingPage
