import { createContext, useContext, useState } from "react";
import playListData from "../libs/playListData";

const AppContext = createContext(null);
const __NAV_LINKS = [
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'Report',
    to: '/reports',
  }
]

const AppContextProvider = ({ children }) => {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(null);

  const value = {
    menu: __NAV_LINKS,
    videoBackgroundUrl: 'https://learn-fly-mike.fly.dev/storage/uploads/2024/08/13/A-meal-to-warm-your-heart----Animation-loop-animation-Doggie-Corgi_uid_66bb0c8bbc7a4.mp4',
    playList: playListData,
    muted, setMuted, 
    playing, setPlaying,
  }

  return <AppContext.Provider value={ value }>
    { children }
  </AppContext.Provider> 
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppContextProvider, useAppContext }