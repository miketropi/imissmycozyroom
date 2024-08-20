import PlayList from './components/PlayList';
import ViewerMessage from './components/ViewerMessage';
import musicIcon from './images/music-icon.svg';
import messageIcon from './images/message-icon.svg';

function App() {
  return ( 
    <div>
      <h2 className="ss-heading">
        <img width={ '26px' } src={ messageIcon } alt="#music" /> Viewer messages
      </h2>
      <ViewerMessage />
      
      <h2 className="ss-heading">
        <img width={ '26px' } src={ musicIcon } alt="#music" /> Playlist</h2>
      <PlayList />
    </div>
  );
}

export default App;
