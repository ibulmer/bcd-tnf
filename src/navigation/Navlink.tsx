import React from "react";
import { Link } from "@reach/router";
type LinkProps = React.ComponentProps<typeof Link>;

export const NavLink = (props: LinkProps) => (
  <Link
    {...props}
    getProps={(linkGetProps) => {
      // the object returned here is passed to the
      // anchor element's propss
      return {
        className:
          (props.className || "") + (linkGetProps.isCurrent ? " active" : ""),
      };
    }}
  />
);
