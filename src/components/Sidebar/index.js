import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import SearchBox from './SearchBox'

const SidebarContainer = styled.div`
  width:  250px;

  header {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }

  ul {
    margin: 0 0 16px 0;
  }
`

const Sidebar = () => (
  <SidebarContainer>
    {process.env.GATSBY_DOCSEARCH_API_KEY && process.env.GATSBY_DOCSEARCH_INDEX && (
      <SearchBox />
    )}
    <header>Quick start</header>
    <ul>
      <li><Link to="/getting-started">Getting Started</Link></li>
    </ul>
    <header>About</header>
    <ul>
      <li><Link to="/about">About us</Link></li>
    </ul>
  </SidebarContainer>
)

export default Sidebar