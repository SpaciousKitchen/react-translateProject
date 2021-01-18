import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button } from "semantic-ui-react";
import { REMOVE_SIMPLE_REQUEST } from "../reducers/translate";

const History = ({ onItemClick }) => {
  const { simple } = useSelector((state) => state.translate);

  const dispatch = useDispatch("");

  const onClickRemove = useCallback(
    (id) => () => {
      dispatch({ type: REMOVE_SIMPLE_REQUEST, id });
    },
    [],
  );

  return (
    <>
      <List
        divided
        style={{
          height: "65%",
          width: "100%",
          overflow: "auto",
          overflowX: "hidden",
        }}
      >
        {simple?.map((v, index) => (
          <List.Item
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "7px",
            }}
          >
            <div
              tabIndex={index}
              role="button"
              style={{ flexGrow: "2" }}
              onKeyPress={onItemClick(v.Input, v.Output)}
              onClick={onItemClick(v.Input, v.Output)}
            >
              <span style={{ fontSize: "15px" }}>{v.Input}</span>
            </div>
            <Button
              style={{ zIndex: 1000 }}
              icon="trash alternate outline"
              onClick={onClickRemove(v.id)}
            />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default History;
