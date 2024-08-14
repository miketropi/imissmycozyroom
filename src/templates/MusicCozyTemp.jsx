import { useAppContext } from "../context/AppContext";
import BackgroundVideo from "../components/BackgroundVideo";
import Header from "../components/Header";

export default function MusicCozyTemp({ children }) {
  const { videoBackgroundUrl, soundBgEnable } = useAppContext();
  return <div id="PAGE" className="music-cozy-template-page">
    <BackgroundVideo videoUrlMp4={ videoBackgroundUrl } muted={ soundBgEnable } />
    <Header />
    <main className="main-container">
      { children }
    </main>
  </div>
}