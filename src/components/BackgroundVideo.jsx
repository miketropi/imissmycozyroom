import VideoBg from "reactjs-videobg";
import ReactPlayer from 'react-player'

export default function BackgroundVideo({ videoUrl, muted }) {


  return <div className="background-video">
    {/* <VideoBg muted={ muted } autoPlay={ true } loop={ true }>
      <VideoBg.Source src={ videoUrlMp4 } type="video/mp4" />
    </VideoBg> */}
    
    <ReactPlayer 
      className='full-background-video'
      playing={ true } 
      loop={ true } 
      muted={ muted } 
      config={{
        youtube: {
          playerVars: { showinfo: 0 }
        }
      }}
      width={ '100%' }
      height={ '100%' }
      url={ videoUrl ?? 'https://www.youtube.com/watch?v=3xsP20G3lRw' } />
    <div className="overlay-layer"></div>
  </div>
}