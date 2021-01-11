import React, { useCallback } from "react";

import { useDispatch } from "react-redux";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import styled from "styled-components";
import { SEND_EMAIL_REQUEST } from "../../reducers/user";
import useTextInput from "../../hooks/useTextInput";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainForm = styled.div`
  padding: 20px;
  background: #ffffffff;
  display: flex;
  flex: 0.5;
  height: 500px;
  border-radius: 0.28571429rem;
  flex-direction: column;
`;

const SendMail = ({ onClickClosed, setclickMail }) => {
  const dispatch = useDispatch("");

  const [email, onChangeEmail] = useTextInput("");
  const [subject, onChangeSubject] = useTextInput("");
  const [content, onChangeContent] = useTextInput("");

  const onSubmit = useCallback(() => {
    console.log("submit");
    console.log(email);

    dispatch({
      type: SEND_EMAIL_REQUEST,
      data: {
        emailAdress: email,
        emailSubject: subject,
        emailContent: content,
      },
    });

    // console.log(text);
  }, [setclickMail, email, subject, content]);

  return (
    <>
      <Overlay>
        <ContainForm>
          <div>
            <Icon
              link
              name="close"
              onClick={onClickClosed}
              style={{ float: "right" }}
            />
          </div>

          <Form onSubmit={onSubmit}>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <Input iconPosition="left" placeholder="Email">
                <Icon name="at" />
                <input onChange={onChangeEmail} value={email} />
              </Input>
            </Form.Field>
            <Form.Field>
              <label>Subject</label>
              <input
                placeholder="Subject here.."
                onChange={onChangeSubject}
                value={subject}
              />
            </Form.Field>
            <Form.TextArea
              style={{ resize: "none", height: "200px" }}
              label="Content"
              placeholder="Enter the text here..."
              onChange={onChangeContent}
              value={content}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </ContainForm>
      </Overlay>
    </>
  );
};
export default SendMail;
