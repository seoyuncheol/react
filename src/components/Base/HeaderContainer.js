import React, { Component } from "react";
import Header from "components/Base/Header";
import LoginButton from "./Header/LoginButton";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  render() {
    const { visible } = this.props;
    if (!visible) return null;

    return (
      <Header>
        <LoginButton />
      </Header>
    );
  }
}

export default connect(
  ({ base }) => ({
    visible: base.header.visible
  }),
  dispatch => ({})
)(HeaderContainer);
