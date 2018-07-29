// Code DelayedButton Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class DelayedButton extends React.Component {
  delayedResponse = (event) => {

    setTimeout((event) => this.props.onDelayedClick(event.persist()), this.props.delay);
  }
  render(){
    return <button onClick={this.delayedResponse}>Delayed Response</button>
  }
}
