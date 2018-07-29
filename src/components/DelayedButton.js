// Code DelayedButton Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class DelayedButton extends React.Component {
  delayedResponse = (event) => {
    const savedEvent = event;
    return setTimeout((savedEvent) => this.props.onDelayedClick(savedEvent), this.props.delay);
  }
  render(){
    return <button onClick={(e) => this.delayedResponse(e.persist())}>Delayed Response</button>
  }
}
