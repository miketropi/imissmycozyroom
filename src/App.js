import { useAppContext } from './context/AppContext';
import MusicCozyTemp from './templates/MusicCozyTemp';
import PlayList from './components/PlayList';

function App() {
  const { soundBgEnable, setSoundBgEnable } = useAppContext();

  return (
    <MusicCozyTemp>
      {/* I miss my cozy room... <button onClick={ e => setSoundBgEnable(!soundBgEnable) }>Music on/off</button> */}
      <PlayList />
    </MusicCozyTemp>
  );
}

export default App;
