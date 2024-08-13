import { useAppContext } from './context/AppContext';
import MusicCozyTemp from './templates/MusicCozyTemp';

function App() {
  const { soundBgEnable, setSoundBgEnable } = useAppContext();

  return (
    <MusicCozyTemp>
      I miss my cozy room... <button onClick={ e => setSoundBgEnable(!soundBgEnable) }>Music on/off</button>
    </MusicCozyTemp>
  );
}

export default App;
