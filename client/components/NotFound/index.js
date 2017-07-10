/**
 * ./client/components/NotFound/index.js
 * @type {Component}
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

class NotFound extends React.Component {

  render() {
    const { className } = this.props;
    return (
      <div style={{textAlign: 'center'}} className={classnames('NotFound', className)} >
        <h1>NotFound page</h1>
      </div>);
  }
}

NotFound.propTypes = {
  className: PropTypes.string
};

export default NotFound;
