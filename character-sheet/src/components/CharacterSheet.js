import React, { Component } from 'react';
import { render } from 'react-dom';
import Traits from "./Traits/traits";

class CharacterSheet extends Component{
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="CharacterSheet">
      <Traits />
      </div>
    )
  }
}

export default CharacterSheet