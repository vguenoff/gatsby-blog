import React from 'react'
import Link from 'gatsby-link'
// import uuid from 'uuid-v4'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: posts } = data;

  return (
    <div>
      <Link to="/page-2/">Go to page 2 / </Link>
      <Link to="/page-3/">Go to page 3</Link>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <hr />
      <p>Blog posts</p>
      <ul>
        {posts.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={edge.node.frontmatter.path}>
              {edge.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query allBlogPosts {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
          }
        }
      }
    }
  }
`

export default IndexPage
