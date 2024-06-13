import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";

export const Home = () => {
  const { store, actions } = useContext(Context);

  actions.getCharacterfromAPI();
  useEffect(() => {
    actions.getPlanetsfromAPI();
  }, []);

  return (
    <div className=" d-flex justify-content-center text-center mt-5">
      {store.characters.map((character) => (
        <CharacterCard
          key={character.uid}
          img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
          name={character.name}
        />
      ))}
    </div>
  );
};
