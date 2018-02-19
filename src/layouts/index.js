import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Chrome from '../components/Chrome'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <Chrome header={<Header />}>
    <Helmet
      title="Welcome to the docs!"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </Chrome>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper