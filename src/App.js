import { useState, useRef } from 'react';
import { useAppContext } from './context/AppContext';
import MusicCozyTemp from './templates/MusicCozyTemp';
import PlayList from './components/PlayList';
import ViewerMessage from './components/ViewerMessage';
import musicIcon from './images/music-icon.svg';

function App() {
  const { soundBgEnable, setSoundBgEnable } = useAppContext();

  return (
    <MusicCozyTemp>
      {/* I miss my cozy room... <button onClick={ e => setSoundBgEnable(!soundBgEnable) }>Music on/off</button> */}
      <div>
        <h2 className="ss-heading">Viewer messages</h2>
        <ViewerMessage />
        
        <h2 className="ss-heading"><img width={ '26px' } src={ musicIcon } alt="#music" /> Playlist</h2>
        <PlayList />
      </div>
    </MusicCozyTemp>
  );
}

export default App;
