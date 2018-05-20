import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

const Description = (props) => (
  <div className="page-container">
    { ReactHtmlParser(props.content) }
  </div>
);

Description.propTypes = {
  content: PropTypes.string.isRequired
};

export default Description;
