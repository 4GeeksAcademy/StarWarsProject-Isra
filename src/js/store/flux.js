const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
    },
    actions: {
      getCharacterfromAPI: async () => {
        try {
          const respuesta = await fetch("https://swapi.tech/api/people");
          const dataCharacters = await respuesta.json();
          const charactersAPI = dataCharacters.results;
          console.log(charactersAPI);

          setStore({ characters: charactersAPI });
        } catch (error) {
          console.log(error);
        }
      },
      getPlanetsfromAPI: async () => {
        try {
          const respuesta = await fetch("https://swapi.tech/api/planets");
          const dataPlanet = await respuesta.json();
          const PlanetsAPI = dataPlanet.results;
          console.log(PlanetsAPI);
          setStore({ planets: PlanetsAPI });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
