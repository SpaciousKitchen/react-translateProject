import React, { useState, useEffect, useCallback, memo } from "react";
import Router from "next/router";

import propTypes from "prop-types";
import { Menu } from "semantic-ui-react";

const AppLayout = memo(({ children }) => {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = useCallback(
    (e, { name }) => {
      setActiveItem(name);
    },
    [activeItem],
  );
  useEffect(() => {
    console.log("use", activeItem);
    if (activeItem === "존댓말 변환") {
      // console.log("존맷말로 변환할게요");
      Router.push("/");
    } else if (activeItem === "업무 템플릿") {
      console.log("업무 템플릿으로 변환할게요");
      Router.push("/template");
    }
  }, [activeItem]);

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
      </Menu>
      {children}
    </div>
  );
});

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};
export default AppLayout;
