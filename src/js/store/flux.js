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

          setStore((prevState) => {
            console.log(prevState);
            console.log("Holaa");
          });

          //   setStore((prevState) => ({
          //     ...prevState,
          //     characters: charactersAPI,
          //   }));
        } catch (error) {
          console.log(error);
        }
      },
      getPlanetfromAPI: async () => {
        try {
          const respuesta = await fetch("https://swapi.tech/api/planets");
          const dataPlanet = await respuesta.json();
          const PlanetAPI = dataPlanet.results;
          console.log(PlanetsAPI);
          setStore((prevState) => ({
            ...prevState,
            planets: {
              ...prevState.planets,
              PlanetAPI,
            },
          }));
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
