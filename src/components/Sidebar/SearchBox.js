import React from 'react'
import styled from 'styled-components'
import { navigateTo } from "gatsby-link"

const Container = styled.div`
  display: flex;
  flex: 1;
  input {
    display: inline-block;
    font-size: 14px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 2px;
    height: 32px;
    line-height: 20px;
    vertical-align: baseline;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 4px;
    margin-bottom: 10px;
  }
`

class SearchBox extends React.Component {
  constructor() {
    super()
    this.autocompleteSelected = this.autocompleteSelected.bind(this)
  }

  autocompleteSelected(e) {
    e.stopPropagation()
    // Use an anchor tag to parse the absolute url (from autocomplete.js) into a relative url
    // eslint-disable-next-line no-undef
    const a = document.createElement(`a`)
    a.href = e._args[0].url
    navigateTo(`${a.pathname}${a.hash}`)
  }

  componentDidMount(){
    window.addEventListener(
      `autocomplete:selected`,
      this.autocompleteSelected,
      true
    )

    if(window.docsearch){
      window.docsearch({ 
        apiKey: process.env.GATSBY_DOCSEARCH_API_KEY, 
        indexName: process.env.GATSBY_DOCSEARCH_INDEX, 
        inputSelector: '#docs-search',
        algoliaOptions: {
          hitsPerPage: 5
        },
        debug: true // Set debug to true if you want to inspect the dropdown,
      });
    }
  }

  render() {
    return (
      <Container>
        <form onSubmit={e => e.preventDefault()}>
          <input id="docs-search" type="search" placeholder="Search..." onFocus={() => this.setState({ focussed: true })}
          />
        </form>
      </Container> 
    )
  }
}

export default SearchBox
