// Code DelayedButton Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class DelayedButton extends React.Component {
  delayedResponse = (event) => {
    event.persist()
    return setTimeout(event => this.props.onDelayedClick(event), this.props.delay);
  }
  render(){
    return <button onClick={this.delayedResponse}>Delayed Response</button>
  }
}
