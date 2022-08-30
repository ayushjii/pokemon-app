import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be in AppContextProvider");
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (poke) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.concat(poke);

    setFavorites(newFavorites);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.filter((poke) => poke.id !== id);

    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider
      value={(favorites, addToFavorites, removeFromFavorites)}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
