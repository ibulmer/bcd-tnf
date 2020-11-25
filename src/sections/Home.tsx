import React from "react";
import { RouteComponentProps } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Rick from "../rick.jpeg";

export const Home = (props: RouteComponentProps) => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      margin: "2rem 0",
    },
    title: {
      textAlign: "center",
      fontWeight: 800,
      fontSize: "4rem",
      color: "aqua",
    },
  });
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root} justify="center">
      <Grid className={classes.title} item xs={12}>
        Welcome To The Rick and Morty Experience!!
      </Grid>
      <img
        alt="Rick and Morty"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          minWidth: "100%",
          minHeight: "100%",
          zIndex: -1,
        }}
        src={Rick}
      ></img>
    </Grid>
  );
};
