import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";

type ApiCharacter = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
};

type CharacterType = {
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
});

const Character = ({
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
            name: {name}
          </Typography>
          <Typography variant="h5" component="h2">
            origin: {origin}
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="h5" component="h2">
              gender: {gender}
            </Typography>
            <Typography variant="h5" component="h2">
              location: {location}
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

const useGridStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
  },
});

export const Characters = (props: RouteComponentProps) => {
  const defaultCharacters: CharacterType[] = [];
  const [characters, setCharacters] = useState(defaultCharacters);
  const classes = useGridStyles();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((result) => {
        const apiCharacters: ApiCharacter[] = result.results;
        const frontendCharacters: CharacterType[] = apiCharacters
          .slice(0, 16)
          .map((character) => ({
            gender: character.gender,
            id: character.id,
            image: character.image,
            location: character.location.name,
            name: character.name,
            origin: character.origin.name,
            species: character.species,
            status: character.status,
            type: character.type,
          }));
        setCharacters(frontendCharacters);
      });
  }, []);
  return (
    <div
    // className="character-page"
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    // }}
    >
      <Grid container spacing={3} className={classes.root} justify={"center"}>
        {characters.map(
          ({
            gender,
            id,
            image,
            location,
            name,
            origin,
            species,
            status,
            type,
          }) => (
            <Character
              gender={gender}
              id={id}
              image={image}
              location={location}
              name={name}
              origin={origin}
              species={species}
              status={status}
              type={type}
            />
          )
        )}
      </Grid>
    </div>
  );
};
