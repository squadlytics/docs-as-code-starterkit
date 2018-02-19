import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Sidebar from '../Sidebar'

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  padding: 16px;
  color: #333;
  line-height: 1.2;

  a {
    text-decoration: none;
    color: blue;
    &:hover {
      filter: brightness(80%);
    }
  }
`
const Content = styled.div`
  display: flex;
`

const Main = styled.div`
  display: flex;
  flex: 1 0 auto;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 26px;
  }

  h2 {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 22px;
  }

  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 18px;
  }

  p {
    margin-bottom: 8px;
  }
`

const Page = styled.div`
  flex: 1;
`

const Chrome = ({ children, header }) => (
  <Container>
    {header}
    <Content>
      <Sidebar />
      <Main>
        <Page>
        {children}
        </Page>
      </Main>
    </Content>
  </Container>
)

Chrome.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
}

export default Chrome