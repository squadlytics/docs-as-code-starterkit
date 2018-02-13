import React, { Component } from 'react';
import Helmet from 'react-helmet';
class Template extends Component {
  render() {
    const { markdownRemark: page } = this.props.data;
    return (
      <div>
        <Helmet title={`Docs | ${page.frontmatter.title}`} />
        <div className="page">
          <header>
            <h1>{page.frontmatter.title}</h1>
            <span>{page.frontmatter.baseline}</span>
          </header>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
      </div>
    );
  }
}
export default Template
export const pageQuery = graphql`
  query DocsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
;