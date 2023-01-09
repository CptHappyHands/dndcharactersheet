import React, { Component } from 'react';
import { render } from 'react-dom';
import Traits from "./Traits/traits";
import Header from "./UIComponents/Header";
import SideDrawer from "./UIComponents/SideDrawer";
import css from '../css/CharacterSheet.css';

class CharacterSheet extends Component{
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const sideDrawer = <SideDrawer />
    return (
      <div className="CharacterSheet">

        <Traits />
        { sideDrawer }
      </div>
    )
  }
}

export default CharacterSheet
