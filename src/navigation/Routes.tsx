import React from "react";
import { Router } from "@reach/router";
import { Home } from "../sections/Home";
import { Characters } from "../sections/Characters";
import { Episodes } from "../sections/Episodes";
import { Registration } from "../sections/Registration";
import { CharacterData, EpisodeData, SetEmail, SetSubmitted } from "../App";
import { firstN } from "../utils/utils";

type Props = {
  characters: CharacterData;
  episodes: EpisodeData;
  email: string;
  setEmail: SetEmail;
  submitted: boolean;
  setSubmitted: SetSubmitted;
};

const characterIds = firstN(16);
const episodeIds = firstN(11);

export const Routes = ({
  characters,
  episodes,
  email,
  setEmail,
  submitted,
  setSubmitted,
}: Props) => {
  return (
    <Router>
      <Home path="/" />
      <Characters
        characters={characters}
        characterIds={characterIds}
        path="characters"
      />
      <Episodes
        characters={characters}
        episodes={episodes}
        episodeIds={episodeIds}
        path="episodes"
      />
      <Registration
        email={email}
        setEmail={setEmail}
        submitted={submitted}
        setSubmitted={setSubmitted}
        path="registration"
      />
    </Router>
  );
};
