import React, { useState, useCallback, memo, useEffect } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import History from "../components/History";
import AppLayout from "../components/AppLayout";
import {
  SimpleCol,
  SimpleContainer,
  ListContainer,
} from "../components/src/style";
import { TRANSLATE_SIMPLE_REQUEST } from "../reducers/translate";

const Main = memo(() => {
  const {
    simple,
    translateSimplerequeset,
    translateSimplesuccess,
    translateSimplefailure,
  } = useSelector((state) => state.translate);
  const [text, setText] = useState("");
  const [textOut, setTextOut] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (translateSimplefailure) {
      console.log("불가능한문장");
      alert("불가능한 문장입니다.");
    }
  }, [translateSimplefailure]);

  useEffect(() => {
    if (translateSimplesuccess) {
      setTextOut(simple[0].Output);
    }
  }, [translateSimplesuccess]);

  const onSubmit = useCallback(() => {
    if (text.trim("") === "") {
      alert("내용을 입력하세요");
      return;
    }
    dispatch({ type: TRANSLATE_SIMPLE_REQUEST, data: { content: text } });
  }, [text]);
  const onChangeText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text],
  );

  const onClickCopy = useCallback(() => {}, []);

  const onItemClick = useCallback(
    (Input, Output) => () => {
      setTextOut(Output);
      setText(Input);
    },
    [],
  );

  const onClickRedo = useCallback(() => {
    setText("");
  }, []);
  return (
    <AppLayout>
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          overflow: "auto",
        }}
      >
        <SimpleContainer>
          <SimpleCol>
            <Form style={{ height: "100%" }} onSubmit={onSubmit}>
              <TextArea
                style={{
                  height: "100%",
                  resize: "none",
                  padding: "11px 46px 11px 11px",
                }}
                placeholder="텍스트를 입력하세요..."
                onChange={onChangeText}
                value={text}
              />

              <Button
                style={{
                  bottom: "5px",
                  right: "9px",
                  position: "absolute",
                  boxShadow: "none",
                }}
                position
                basic
                icon="exchange"
                type="submit"
                loading={translateSimplerequeset}
              />
            </Form>
            <Button
              style={{
                top: "35px",
                right: "39px",
                position: "absolute",
                boxShadow: "none",
              }}
              position
              basic
              icon="redo"
              onClick={onClickRedo}
              color="rgba(34,36,38,.15)"
            />
          </SimpleCol>

          <SimpleCol>
            <div
              style={{
                width: "100%",
                background: "#e0e1e2",
                height: "100%",
                padding: "11px 35px 11px 11px",
                borderRadius: ".28571429rem",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
              }}
            >
              {textOut}
            </div>

            <CopyToClipboard text={textOut}>
              <Button
                onClick={onClickCopy}
                icon="copy outline"
                style={{
                  bottom: "35px",
                  right: "36.5px",
                  position: "absolute",
                  Index: 1000,
                }}
              />
            </CopyToClipboard>
          </SimpleCol>
        </SimpleContainer>

        <ListContainer>
          <div> 검색내역</div>
          {/* <Divider /> */}
          <History onItemClick={onItemClick} style={{ overflow: "scroll" }} />
        </ListContainer>
      </div>
    </AppLayout>
  );
});

export default Main;
