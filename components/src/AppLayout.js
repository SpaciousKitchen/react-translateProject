import React, { useState, useEffect, useCallback, memo } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import propTypes from "prop-types";
import { Menu, Message } from "semantic-ui-react";

import styled from "styled-components";
import Login from "./Login";
import Logout from "./Logout";

const ContainMessage = styled.div`
  padding: 20px;
  display: flex;
  flex: 0.5;
  height: 500px;
  border-radius: 0.28571429rem;
  flex-direction: column;
`;

const AppLayout = memo(({ children }) => {
  const [activeItem, setActiveItem] = useState();
  const [visible, setvisible] = useState(false);
  const { user, sendEmailsuccess } = useSelector((state) => state.user);

  useEffect(() => {
    if (activeItem === "존댓말 변환") {
      // console.log("존맷말로 변환할게요");
      Router.push("/");
    } else if (activeItem === "업무 템플릿") {
      console.log("업무 템플릿으로 변환할게요");
      Router.push("/template");
    }
  }, [activeItem]);

  useEffect(() => {
    if (sendEmailsuccess) {
      console.log("보여랏Success");
      setvisible(true);
    }
  }, [sendEmailsuccess]);

  const handleItemClick = useCallback(
    (e, { name }) => {
      setActiveItem(name);
    },
    [activeItem],
  );

  const handleDismiss = () => {
    setvisible(false);
  };

  return (
    <div>
      <Menu attached="top" tabular>
        <Menu.Item
          name="존댓말 변환"
          active={activeItem === "존댓말 변환"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="업무 템플릿"
          active={activeItem === "업무 템플릿"}
          onClick={handleItemClick}
        />

        <Menu.Menu position="right" style={{ padding: "10px" }}>
          {user == null ? <Login /> : <Logout />}
        </Menu.Menu>
      </Menu>
      {children}
      {visible === true ? (
        <ContainMessage>
          <Message
            style={{ zIndex: 1000, width: "335px", margin: "auto" }}
            onDismiss={handleDismiss}
            icon="inbox"
            header="메일 전송을 완료 하였습니다"
          />
        </ContainMessage>
      ) : (
        <></>
      )}
    </div>
  );
});

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};
export default AppLayout;
