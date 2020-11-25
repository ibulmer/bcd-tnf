import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";

export type CharacterType = {
  episodes: number[];
  gender: string;
  id: number;
  image: string;
  location: string;
  name: string;
  origin: string;
  species: string;
  status: string;
  type: string;
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
});

export const Character = ({
  episodes,
  name,
  origin,
  gender,
  image,
  location,
}: CharacterType) => {
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
            <span className={classes.field}>Origin:</span> {origin}
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="h5" component="h2">
              <span className={classes.field}>Gender:</span> {gender}
            </Typography>
            <Typography variant="h5" component="h2">
              <span className={classes.field}>Location:</span> {location}
            </Typography>
            <Typography variant="h5" component="h2">
              <img src={image} alt={name} />
            </Typography>
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
