import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacterfromAPI();
  }, []);

  console.log(store.characters);

  return (
    <div className="text-center mt-5">
      <h1>Personajes</h1>
      <ul>
        {store.characters.map((character) => (
          <li>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};
