import React from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";
import { Home } from "../sections/Home";
import { Characters } from "../sections/Characters";
import { Episodes } from "../sections/Episodes";
import { Registration } from "../sections/Registration";

export const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Characters path="characters" />
      <Episodes path="episodes" />
      <Registration path="registration" />
    </Router>
  );
};
