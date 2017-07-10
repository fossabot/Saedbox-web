/**
 * ./client/components/About/index.js
 * @type {Component}
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

class About extends React.Component {

  render() {
    const { className } = this.props;
    return (
      <div style={{textAlign: 'center'}} className={classnames('About', className)} >
        <h1>About page</h1>
      </div>);
  }
}

About.propTypes = {
  className: PropTypes.string
};

export default About;
