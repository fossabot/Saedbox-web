/**
 * ./client/components/App/index.js
 * @type {Component}
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';

import './style.css';

class App extends React.Component {

  render() {
    const { className } = this.props;
    return (
      <div style={{textAlign: 'center'}} className={classnames('App', className)} >
        <h1>Hello World</h1>
        <Button>Click me!</Button>
      </div>);
  }
}

App.propTypes = {
  className: PropTypes.string
};

export default App;
