import React, { useCallback } from "react";
import { GoogleLogout } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { LOGOUT_REQUEST } from "../../reducers/user";

const Logout = () => {
  const dispatch = useDispatch("");

  const { user } = useSelector((state) => state.translate);

  const logoutGoogle = useCallback(() => {
    // console.log('logout');
    dispatch({ type: LOGOUT_REQUEST, id: user });
  });

  return (
    <>
      <GoogleLogout
        clientId="939267278265-sdm785tivv8fjkl18b3pvhalhe37i46l.apps.googleusercontent.com"
        buttonText="logout"
        render={(renderProps) => (
          <Button
            circular
            icon="log out"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          />
        )}
        onLogoutSuccess={logoutGoogle}
      />
    </>
  );
};
export default Logout;
