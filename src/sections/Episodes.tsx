import React from "react";
import { RouteComponentProps } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Episode } from "./Episode";
import { CharacterData, EpisodeData } from "../App";

export type ApiEpisode = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: "https://rickandmortyapi.com/api/episode/1";
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "2rem 0",
  },
});

interface Props extends RouteComponentProps {
  characters: CharacterData;
  episodes: EpisodeData;
  episodeIds: number[];
}

export const Episodes = ({ characters, episodes, episodeIds }: Props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root} justify="center">
      {episodeIds
        .filter((id) => episodes[id])
        .map((id) => {
          const episode = episodes[id];
          return (
            <Episode
              airDate={episode.airDate}
              characterIds={episode.characterIds}
              characters={characters}
              episode={episode.episode}
              id={episode.id}
              name={episode.name}
            />
          );
        })}
    </Grid>
  );
};
