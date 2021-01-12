import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { Button, Icon } from "semantic-ui-react";

import { LOGIN_REQUEST } from "../../reducers/user";

const Login = () => {
  const dispatch = useDispatch("");

  const responseSuccessGoogle = (response) => {
    console.log(response);
    dispatch({
      type: LOGIN_REQUEST,
      data: {
        googleId: response.googleId,
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
          <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <Icon name="google" />
            Login
          </Button>
        )}
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailGoogle}
        cookiePolicy="single_host_origin"
        isSignedIn
      />
    </>
  );
};
export default Login;
