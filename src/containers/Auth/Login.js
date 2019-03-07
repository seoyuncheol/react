import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "redux/modules/auth";

import {
  AuthContent,
  InputWithLabel,
  AuthButton,
  RightAlignedLink
} from "components/Auth";

class Login extends Component {
  handleChange = e => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;

    AuthActions.changeInput({
      name,
      value,
      form: "login"
    });
  };
  render() {
    const { email, password } = this.props;
    const { handleChange } = this;

    return (
      <AuthContent title="로그인">
        <InputWithLabel
          label="이메일"
          name="email"
          value={email}
          placeholder="이메일"
          onChange={handleChange}
        />
        <InputWithLabel
          label="비밀번호"
          name="password"
          value={password}
          placeholder="비밀번호"
          type="password"
          onChange={handleChange}
        />
        <AuthButton>로그인</AuthButton>
        <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
      </AuthContent>
    );
  }
}

export default connect(
  ({ auth }) => ({
    register: auth.register
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(Login);
