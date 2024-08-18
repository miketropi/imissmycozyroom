import { useAppContext } from "../context/AppContext";
import BackgroundVideo from "../components/BackgroundVideo";
import Header from "../components/Header";

export default function MusicCozyTemp({ children }) {
  const { muted, playing } = useAppContext();

  return <div id="PAGE" className="music-cozy-template-page">
    <BackgroundVideo videoUrl={ playing?.source } muted={ muted } />
    <Header />
    <main className="main-container">
      {/* { JSON.stringify(playing) } */}
      { children }
    </main>
  </div>
}