import React, { useCallback, useState, useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { LOGOUT_REQUEST, SEND_EMAIL_END } from "../reducers/user";

import SendMail from "./SendMail";

const Logout = ({ setvisible }) => {
  const dispatch = useDispatch("");
  const { user, sendEmailsuccess } = useSelector((state) => state.user);
  const [clickMail, setclickMail] = useState(false);

  useEffect(() => {
    if (sendEmailsuccess) {
      setclickMail(false);
      setvisible(true);
    }
    dispatch({ type: SEND_EMAIL_END });
  }, [sendEmailsuccess, clickMail]);

  const onClickSendMail = useCallback(() => {
    setclickMail(true);
  }, [clickMail]);
  const onClickClosed = useCallback(() => {
    setclickMail(false);
  }, [clickMail]);

  const logoutGoogle = () => {
    // console.log('logout');
    dispatch({ type: LOGOUT_REQUEST, id: user });
  };

  return (
    <>
      <Button circular icon="mail outline" onClick={onClickSendMail} />
      <GoogleLogout
        clientId={process.env.GOOGLE_LOGIN_CLIENT_ID}
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
      {clickMail && (
        <SendMail
          onClickClosed={onClickClosed}
          setclickMail={setclickMail}
          clickMail={clickMail}
        />
      )}
    </>
  );
};
export default Logout;
