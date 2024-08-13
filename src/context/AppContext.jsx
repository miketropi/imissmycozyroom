import { createContext, useContext, useState, useEffect } from "react";
import playListData from "../libs/playListData";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [soundBgEnable, setSoundBgEnable] = useState(true);

  const value = {
    videoBackgroundUrl: 'https://learn-fly-mike.fly.dev/storage/uploads/2024/08/13/A-meal-to-warm-your-heart----Animation-loop-animation-Doggie-Corgi_uid_66bb0c8bbc7a4.mp4',
    playList: playListData,
    soundBgEnable, setSoundBgEnable, 
  }

  return <AppContext.Provider value={ value }>
    { children }
  </AppContext.Provider> 
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppContextProvider, useAppContext }