import { useAppContext } from "../context/AppContext";
import BackgroundVideo from "../components/BackgroundVideo";

export default function MusicCozyTemp({ children }) {
  const { videoBackgroundUrl, soundBgEnable } = useAppContext();
  return <div id="PAGE">
    <BackgroundVideo videoUrlMp4={ videoBackgroundUrl } muted={ soundBgEnable } />
    { children }
  </div>
}