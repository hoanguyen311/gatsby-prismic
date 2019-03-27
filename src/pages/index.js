import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data: { allPrismicBlog } }) => {
  console.log(allPrismicBlog);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {allPrismicBlog.edges.map(({ node }) => <div><Link to={`/${node.uid}`}>{node.data.title.text}</Link></div>)}
    </Layout>
  );
}

export default IndexPage;


export const query = graphql`
  {
    allPrismicBlog {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`;