import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrawerToggle from './DrawerToggle';

const mapStateToProps = (state) => {
  return {
    auth:true
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(){
    const {auth} = this.props;
    const drawerToggle = auth ? <DrawerToggle /> : null;
    return (
      <div>
        <div className="ui Header">
          <h1>Character Sheet 5e</h1>
        </div>
        {drawerToggle}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Header)
