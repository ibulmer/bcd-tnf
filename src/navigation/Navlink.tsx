import React from "react";
import { Link, Link_Needed_Props } from "@reach/router";

export const NavLink = (props: Link_Needed_Props) => (
  <Link
    {...props}
    getProps={(linkGetProps) => {
      // the object returned here is passed to the
      // anchor element's propss
      return {
        className:
          (props.className || "") + (linkGetProps.isCurrent ? "active" : ""),
      };
    }}
  />
);
