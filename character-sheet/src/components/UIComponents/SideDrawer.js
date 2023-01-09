import React, { Component } from 'react';
import { connect } from 'react-redux';
import Backdrop from "./Backdrop";

const { Fragment } = React;

const mapStateToProps = (state) => {
  return {
    isVisible: state.ui.sideDrawerVisible
  }
}

const mapDispatchToProps = dispatch => {
  //eventually have getCharacters Thunk
  return {

  }
}

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { isVisible } = this.props;
    if(!isVisible) {
      return null;
    }
    return (
      <Fragment>
        <Backdrop type="sideDrawer" />
        <div className="SideDrawer">
          List of Characters
        </div>
      </Fragment>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)
