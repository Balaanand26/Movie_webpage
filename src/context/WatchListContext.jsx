import { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const toggleWatchList = (movie) => {
    const index = watchList.findIndex((item) => item.id === movie.id);
    if (index === -1) {
      setWatchList([...watchList, movie]);
    } else {
      setWatchList([
        ...watchList.slice(0, index),
        ...watchList.slice(index + 1),
      ]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchList, toggleWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};
