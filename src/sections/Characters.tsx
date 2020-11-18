import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";

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

type Props = {
  name: string;
  origin: string;
};

const Character = ({ name, origin }: Props) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div>name: {name}</div>
      <div>origin: {origin}</div>
    </div>
  );
};

export const Characters = (props: RouteComponentProps) => {
  const defaultCharacters: CharacterType[] = [];
  const [characters, setCharacters] = useState(defaultCharacters);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((result) => {
        const apiCharacters: ApiCharacter[] = result.results;
        const frontendCharacters: CharacterType[] = apiCharacters.map(
          (character) => ({
            gender: character.gender,
            id: character.id,
            image: character.image,
            location: character.location.name,
            name: character.name,
            origin: character.origin.name,
            species: character.species,
            status: character.status,
            type: character.type,
          })
        );
        setCharacters(frontendCharacters);
      });
  }, []);
  return (
    <div
      className="character-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>Characters Page</div>
      <div className="characterList">
        {characters.map(({ name, origin }) => (
          <Character name={name} origin={origin} />
        ))}
      </div>
    </div>
  );
};
