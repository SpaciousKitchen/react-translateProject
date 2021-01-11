import React from "react";
import Proptypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";
import "semantic-ui-css/semantic.min.css";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>번역 서비스</title>
      </Head>

      <Component />
    </>
  );
};

App.Proptypes = {
  Component: Proptypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
