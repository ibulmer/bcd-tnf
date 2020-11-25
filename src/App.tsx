import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes } from "./navigation/Routes";
import { Navbar } from "./navigation/Navbar";
import { BottomBar } from "./navigation/BottomBar";
import { EpisodeType } from "./sections/Episode";
import { CharacterType } from "./sections/Character";
import { firstN } from "./utils/utils";

export type ApiEpisode = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: "https://rickandmortyapi.com/api/episode/1";
};

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

export type EpisodeData = {
  [key: number]: EpisodeType;
};

export type CharacterData = {
  [key: number]: CharacterType;
};

const createFeCharFromAPIChar = (apiCharacter: ApiCharacter) => {
  const episodes = apiCharacter.episode.map((e) =>
    parseInt(e.split("episode/")[1])
  );

  const frontEndCharacter: CharacterType = {
    episodes,
    gender: apiCharacter.gender,
    id: apiCharacter.id,
    image: apiCharacter.image,
    location: apiCharacter.location.name,
    name: apiCharacter.name,
    origin: apiCharacter.origin.name,
    species: apiCharacter.species,
    status: apiCharacter.status,
    type: apiCharacter.type,
  };
  return frontEndCharacter;
};

export type SetEmail = React.Dispatch<React.SetStateAction<string>>;
export type SetSubmitted = React.Dispatch<React.SetStateAction<boolean>>;

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [episodes, setEpisodes] = useState({} as EpisodeData);
  const [characters, setCharacters] = useState({} as CharacterData);

  const charactersUrl = "https://rickandmortyapi.com/api/character/";
  const episodesUrl = "https://rickandmortyapi.com/api/episode/";

  //get characters
  useEffect(() => {
    const characterNumbers = firstN(16);
    fetch(charactersUrl + characterNumbers)
      .then((data) => data.json())
      .then((result: ApiCharacter[]) => {
        result.forEach((apiCharacter) => {
          const frontEndCharacter = createFeCharFromAPIChar(apiCharacter);

          setCharacters((characters) => ({
            ...characters,
            [apiCharacter.id]: frontEndCharacter,
          }));
        });
      });
  }, []);

  //get episodes
  useEffect(() => {
    const episodeNumbers = firstN(11);
    fetch(episodesUrl + episodeNumbers)
      .then((data) => data.json())
      .then((result: ApiEpisode[]) => {
        let allCharacters: number[] = [];

        result.forEach((apiEpisode) => {
          const characters = apiEpisode.characters.map((c) =>
            parseInt(c.split("character/")[1])
          );
          allCharacters = [...allCharacters, ...characters];
          const frontEndEpisode: EpisodeType = {
            airDate: apiEpisode.air_date,
            characterIds: characters,
            episode: apiEpisode.episode,
            id: apiEpisode.id,
            name: apiEpisode.name,
          };
          setEpisodes((episodes) => ({
            ...episodes,
            [apiEpisode.id]: frontEndEpisode,
          }));
        });

        allCharacters = allCharacters
          .filter((v, i, a) => a.indexOf(v) === i)
          .sort((a, b) => a - b);
        // get all characters appearing in the each episode
        fetch(charactersUrl + allCharacters)
          .then((data) => data.json())
          .then((result: ApiCharacter[]) => {
            result.forEach((apiCharacter) => {
              const frontEndCharacter = createFeCharFromAPIChar(apiCharacter);

              setCharacters((characters) => ({
                ...characters,
                [apiCharacter.id]: frontEndCharacter,
              }));
            });
          });
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {email && submitted && <BottomBar email={email} />}
      <Routes
        characters={characters}
        episodes={episodes}
        email={email}
        setEmail={setEmail}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
    </div>
  );
}

export { App };
