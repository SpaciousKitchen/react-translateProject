import styled from "styled-components";

export const ListContainer = styled.div`
  height: 30%;
  margin-left: 40px;
  margin-right: 40px;
  position: relative;

  @media only screen and (max-width: 768px) {
    padding: 30px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const ContainMessage = styled.div`
  padding: 20px;
  display: flex;
  flex: 0.5;
  height: 500px;
  border-radius: 0.28571429rem;
  flex-direction: column;
`;

export const Overlay = styled.div`
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

export const ContainForm = styled.div`
  padding: 20px;
  background: #ffffffff;
  display: flex;
  flex: 0.5;
  height: 500px;
  border-radius: 0.28571429rem;
  flex-direction: column;
`;

export const TemplateCol = styled.div`
  /* width: 100%; */
  padding: 10px 30px;
  height: 80%;
  position: relative;
  width: 40%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    marin: 0 auto;
  }
`;

export const TemplateContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 80%;
    display: block;
  }
`;

export const SimpleCol = styled.div`
  width: 50%;
  padding: 30px;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    marin: 0 auto;
  }
`;

export const SimpleContainer = styled.div`
  height: 70%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 60%;
    display: block;
  }
`;
