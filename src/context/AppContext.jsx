import { createContext, useContext, useState, useEffect } from "react";
import playListData from "../libs/playListData";
import { getPlayList, getViewerMessages } from '../libs/api';
import iIcon from '../images/i-icon.svg';
import bugIcon from '../images/bug-icon.svg';

const AppContext = createContext(null);
const __NAV_LINKS = [
  {
    name: 'about',
    icon: iIcon,
    to: '/about'
  },
  {
    name: 'report',
    icon: bugIcon,
    to: '/report',
  }
]

const AppContextProvider = ({ children }) => {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(null);
  const [contentPlayList, setContentPlayList] = useState(null);
  const [contentViewrMessage, setContentViewrMessage] = useState(null);
  const [initLoading, setInitLoading] = useState(true);

  const __getPlayList = async ( ) => {
    const res = await getPlayList();
    setContentPlayList(res);
  }

  const __getViewerMessage = async ( ) => {
    const res = await getViewerMessages();
    setContentViewrMessage(res);
  }

  const __contentLoaderInit = async () => {
    await Promise.all([__getPlayList(), __getViewerMessage()]);
    setInitLoading(false);
  }

  useEffect(() => {
    __contentLoaderInit();

    // eslint-disable-next-line 
  }, [])

  const value = {
    menu: __NAV_LINKS,
    videoBackgroundUrl: 'https://learn-fly-mike.fly.dev/storage/uploads/2024/08/13/A-meal-to-warm-your-heart----Animation-loop-animation-Doggie-Corgi_uid_66bb0c8bbc7a4.mp4',
    playList: playListData,
    contentPlayList, setContentPlayList,
    contentViewrMessage, setContentViewrMessage,
    muted, setMuted, 
    playing, setPlaying,
    initLoading, setInitLoading,
  }

  return <AppContext.Provider value={ value }>
    { children }
  </AppContext.Provider> 
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppContextProvider, useAppContext }