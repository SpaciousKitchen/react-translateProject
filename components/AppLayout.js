import React, { useState, useEffect, useCallback, memo } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import propTypes from "prop-types";
import { Menu, Message } from "semantic-ui-react";

import Login from "./Login";
import Logout from "./Logout";

import { ContainMessage } from "./src/style";

const AppLayout = memo(({ children }) => {
  const [activeItem, setActiveItem] = useState();
  const [visible, setvisible] = useState(false);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (activeItem === "존댓말 변환") {
      Router.push("/");
    } else if (activeItem === "업무 템플릿") {
      Router.push("/template");
    }
  }, [activeItem]);

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
          {user == null ? <Login /> : <Logout setvisible={setvisible} />}
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
