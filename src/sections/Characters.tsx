import React from "react";
import { RouteComponentProps } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Character } from "./Character";
import { CharacterData } from "../App";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "2rem 0",
  },
});

export const firstN = (n: number) => {
  let arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
};

interface Props extends RouteComponentProps {
  characters: CharacterData;
  characterIds: number[];
}

export const Characters = ({ characters, characterIds }: Props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root} justify="center">
      {characterIds
        .filter((id) => characters[id])
        .map((id) => {
          const character = characters[id];
          return (
            <Character
              episodes={character.episodes}
              gender={character.gender}
              id={character.id}
              image={character.image}
              location={character.location}
              name={character.name}
              origin={character.origin}
              species={character.species}
              status={character.status}
              type={character.type}
            />
          );
        })}
    </Grid>
  );
};
