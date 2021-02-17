import React from "react";
import Routes from "./Routes";
import { StylesProvider } from "@material-ui/core";

import "../assests/sass/main.scss";

interface IProps {}

const app = (props: IProps) => {
  return (
    <StylesProvider injectFirst>
      <Routes />
    </StylesProvider>
  );
};

export default app;
