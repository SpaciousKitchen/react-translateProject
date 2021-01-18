import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, TextArea, Button, Icon, Dropdown } from "semantic-ui-react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import AppLayout from "../components/AppLayout";
import { TRANSLATE_TEMPLATE_REQUEST } from "../reducers/translate";

import { TemplateCol, TemplateContainer } from "../components/src/style";

const options = [
  { key: 1, text: "축하", value: 1 },
  { key: 2, text: "요청", value: 2 },
  { key: 3, text: "권유", value: 3 },
  { key: 4, text: "결재", value: 4 },
  { key: 5, text: "감사", value: 5 },
];

const Template = () => {
  const [textStart, setTextStart] = useState("");
  const [textMiddle, setTextMiddle] = useState("");
  const [textEnd, setTextEnd] = useState("");
  const [optionSelected, setoptionSelected] = useState(1);
  const [textOut, setTextOut] = useState("");

  const {
    templateTemplatesuccess,
    templateTemplaterequest,
    templateTemplatefailure,

    template,
  } = useSelector((state) => state.translate);

  const dispatch = useDispatch("");

  useEffect(() => {
    setTextOut("");
    switch (optionSelected) {
      case 1:
        setTextStart(template["1"].InputStart);
        setTextMiddle(template["1"].InputMiddle);
        setTextEnd(template["1"].InputEnd);
        break;
      case 2:
        setTextStart(template["2"].InputStart);
        setTextMiddle(template["2"].InputMiddle);
        setTextEnd(template["2"].InputEnd);
        break;

      case 3:
        setTextStart(template["3"].InputStart);
        setTextMiddle(template["3"].InputMiddle);
        setTextEnd(template["3"].InputEnd);
        break;

      case 4:
        setTextStart(template["4"].InputStart);
        setTextMiddle(template["4"].InputMiddle);
        setTextEnd(template["4"].InputEnd);
        break;
      case 5:
        setTextStart(template["5"].InputStart);
        setTextMiddle(template["5"].InputMiddle);
        setTextEnd(template["5"].InputEnd);
        break;
      default:
        alert("불가능한 설정입니다.");
        break;
    }
  }, [optionSelected]);

  useEffect(() => {
    if (templateTemplatefailure) {
      alert("불가능한 문장입니다.");
    }
  }, [templateTemplatefailure]);

  useEffect(() => {
    if (templateTemplatesuccess) {
      switch (optionSelected) {
        case 1:
          setTextOut(template["1"].Output);
          break;
        case 2:
          setTextOut(template["2"].Output);
          break;

        case 3:
          setTextOut(template["3"].Output);
          break;

        case 4:
          setTextOut(template["4"].Output);
          break;
        case 5:
          setTextOut(template["5"].Output);
          break;
        default:
          alert("불가능한 설정입니다.");
          break;
      }
    }
  }, [templateTemplatesuccess]);

  const onSubmit = useCallback(() => {
    console.log("submit");
    // console.log(text);
    if (
      textStart.trim("") === "" &&
      textMiddle.trim("") === "" &&
      textEnd.trim("") === ""
    ) {
      alert("내용을 입력하세요");
      return;
    }
    const result = `${textStart}\n${textMiddle}\n${textEnd}`;
    console.log(result);
    dispatch({
      type: TRANSLATE_TEMPLATE_REQUEST,
      data: { content: result },
      value: optionSelected,
    });
  });

  const onChangeStart = useCallback(
    (e) => {
      setTextStart(e.target.value);
    },
    [textStart],
  );
  const onChangeMiddle = useCallback(
    (e) => {
      setTextMiddle(e.target.value);
    },
    [textMiddle],
  );
  const onChangeEnd = useCallback(
    (e) => {
      setTextEnd(e.target.value);
    },
    [textEnd],
  );

  const onClickRedoStart = useCallback(() => {
    setTextStart("");
  }, []);
  const onClickRedoMiddle = useCallback(() => {
    setTextMiddle("");
  }, []);
  const onClickRedoEnd = useCallback(() => {
    setTextEnd("");
  }, []);

  const onChangeOption = useCallback(
    (e, { value }) => {
      setoptionSelected(value);
    },
    [optionSelected],
  );

  return (
    <AppLayout>
      <Dropdown
        onChange={onChangeOption}
        placeholder="선택"
        clearable
        options={options}
        selection
        defaultValue={1}
        defaultOpen
        style={{ marginTop: "10px", marginLeft: "30px" }}
      />
      <div style={{ position: "fixed", height: "100%", width: "100%" }}>
        <TemplateContainer>
          <TemplateCol style={{ flex: 0.7 }}>
            <Form style={{ height: "100%", width: "100%" }}>
              <div style={{ height: "22%", position: "relative" }}>
                <textarea
                  className="textAreaTemlate"
                  style={{
                    height: "100%",
                    width: "100%",
                    resize: "none",
                    border: "1px solid rgba(34,36,38,.15)",
                    borderRadius: ".28571429rem",
                    padding: "11px 46px 11px 11px",
                  }}
                  placeholder="텍스트를 입력하세요..."
                  onChange={onChangeStart}
                  value={textStart}
                />
                <Button
                  style={{
                    top: "4px",
                    right: "9px",
                    position: "absolute",
                    boxShadow: "none",
                  }}
                  position
                  basic
                  icon="redo"
                  color="rgba(34,36,38,.15)"
                  onClick={onClickRedoStart}
                />
              </div>

              <div
                style={{
                  height: "51.5%",
                  marginTop: "15px",
                  position: "relative",
                }}
              >
                <TextArea
                  style={{
                    height: "100%",
                    resize: "none",
                    width: "100%",
                    border: "1px solid rgba(34,36,38,.15)",
                    borderRadius: ".28571429rem",
                    padding: "11px 46px 11px 11px",
                  }}
                  placeholder="텍스트를 입력하세요..."
                  onChange={onChangeMiddle}
                  value={textMiddle}
                />
                <Button
                  style={{
                    top: "4px",
                    right: "9px",
                    position: "absolute",
                    boxShadow: "none",
                  }}
                  position
                  basic
                  icon="redo"
                  color="rgba(34,36,38,.15)"
                  onClick={onClickRedoMiddle}
                />
              </div>
              <div
                style={{
                  height: "22%",
                  marginTop: "15px",
                  position: "relative",
                }}
              >
                <TextArea
                  style={{
                    height: "100%",
                    resize: "none",
                    width: "100%",
                    padding: "11px 46px 11px 11px",
                    border: "1px solid rgba(34,36,38,.15)",
                    borderRadius: ".28571429rem",
                  }}
                  placeholder="텍스트를 입력하세요..."
                  onChange={onChangeEnd}
                  value={textEnd}
                />
                <Button
                  style={{
                    top: "4px",
                    right: "9px",
                    position: "absolute",
                    boxShadow: "none",
                  }}
                  position
                  basic
                  icon="redo"
                  color="rgba(34,36,38,.15)"
                  onClick={onClickRedoEnd}
                />
              </div>
            </Form>
          </TemplateCol>

          <TemplateCol style={{ flex: 0.2, textAlign: "center" }}>
            <Button
              onClick={onSubmit}
              type="submit"
              loading={templateTemplaterequest}
            >
              변환
              <br />
              <br />
              <div>
                <Icon name="exchange" size="large" />
              </div>
            </Button>
          </TemplateCol>

          <TemplateCol style={{ flex: 0.7 }}>
            <div
              style={{
                width: "100%",
                background: "#EBEBEB",
                height: "100%",
                padding: ".78571429em 1em",
                borderRadius: ".28571429rem",
                overflow: "auto",
                whiteSpace: "pre",
              }}
            >
              {textOut}
            </div>
            <CopyToClipboard text={textOut}>
              <Button
                onClick={() => {}}
                icon="copy outline"
                style={{
                  bottom: "35px",
                  right: "36.5px",
                  position: "absolute",
                  background: "#EBEBEB",

                  zIndex: 1000,
                }}
              />
            </CopyToClipboard>
          </TemplateCol>
        </TemplateContainer>
      </div>
    </AppLayout>
  );
};

export default Template;
