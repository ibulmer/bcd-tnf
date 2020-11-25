import React from "react";
import "./BottomBar.css";

type Props = {
  email: string;
};

export const BottomBar = ({ email }: Props) => {
  return <div className="bottombar">{email && <div>{email}</div>}</div>;
};
