import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";

import { LOGIN_REQUEST } from "../reducers/user";

const Login = () => {
  const { loginrequest } = useSelector((state) => state.user);
  const dispatch = useDispatch("");

  const responseSuccessGoogle = (response) => {
    dispatch({
      type: LOGIN_REQUEST,
      data: {
        googleId: response.googleId,
        userEamil: response.profileObj.email,
        userFamilyName: response.profileObj.familyName,
        userGivenName: response.profileObj.givenName,
      },
    });
  };

  const responseFailGoogle = (response) => {
    alert(response.error);
  };
  return (
    <>
      <GoogleLogin
        clientId={process.env.GOOGLE_LOGIN_CLIENT_ID}
        buttonText="로그인"
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            loading={loginrequest}
          >
            <Icon name="google" />
            Login
          </Button>
        )}
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailGoogle}
      />
    </>
  );
};

export default Login;
