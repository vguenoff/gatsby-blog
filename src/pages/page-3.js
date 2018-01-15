import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () => (
  <div>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/page-2/">Go back to the page 2</Link>
  </div>
)

export default ThirdPage
