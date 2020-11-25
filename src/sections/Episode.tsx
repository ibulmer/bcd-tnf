import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import { Characters } from "./Characters";
import { CharacterData } from "../App";

export type EpisodeType = {
  airDate: string;
  characterIds: number[];
  episode: string;
  id: number;
  name: string;
};

const useStyles = makeStyles({
  root: {
    marginBottom: "1rem",
  },
  showMore: {
    marginLeft: "auto",
  },
  field: {
    fontWeight: 800,
  },
  characters: {
    textAlign: "center",
    fontWeight: 800,
  },
});

interface Props extends EpisodeType {
  characters: CharacterData;
}

export const Episode = ({
  airDate,
  characters,
  characterIds,
  episode,
  id,
  name,
}: Props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={11} md={8}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <span className={classes.field}>Name:</span> {name}
          </Typography>
          <Typography variant="h5" component="h2">
            <span className={classes.field}>Air Date:</span> {airDate}
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="h5" component="h2">
              <span className={classes.field}>Episode:</span> {episode}
            </Typography>
            <Typography
              className={classes.characters}
              variant="h5"
              component="h2"
            >
              Characters
            </Typography>
            <Characters characters={characters} characterIds={characterIds} />
          </Collapse>
        </CardContent>

        <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            className={classes.showMore}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
