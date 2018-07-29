// Code CoordinatesButton Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class CoordinatesButton extends React.Component {
  logCoordinates = (event)=> {
    const coordinates = [event.clientX, event.clientY]
    return this.props.onReceiveCoordinates(coordinates);
  }
  render(){
    return <button onClick={this.logCoordinates}>Get Coordinates</button>
  }
}
