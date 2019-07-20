
import React, { Component } from 'react';

class SignUpForm extends Component {
  render() {
    return (
      <div className="loginBox">
        <h1>Sign Up</h1>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

        <form onSubmit={onSubmit}>
          <TextField
            name="username"
            floatingLabelText="user name"
          />
          <TextField
            name="email"
            floatingLabelText="email"
          />
          <TextField
            type={type}
            name="password"
            floatingLabelText="password"

          />

          <div className="pwStrRow">
            {score >= 1 && (
              <div>
                <PasswordStr score={score} />
                <Button
                  className="pwShowHideBtn"
                  label={btnTxt}
                  style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
                />
              </div>
            )}
          </div>
          <TextField
            type={type}
            name="pwconfirm"
            floatingLabelText="confirm password"
            value={user.pwconfirm}
            onChange={onChange}
            errorText={errors.pwconfirm}
          />
          <br />
          <RaisedButton
            className="signUpSubmit"
            primary={true}
            type="submit"
            label="submit"
          />
        </form>
        <p>
          Aleady have an account? <br />
          <a href="/">Log in here</a>
        </p>
      </div>
    );
  }
}

export default SignUpForm;