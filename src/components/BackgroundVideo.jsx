import VideoBg from "reactjs-videobg";

export default function BackgroundVideo({ videoUrlMp4, muted }) {

  return <div className="background-video">
    <VideoBg muted={ muted } autoPlay={ true } loop={ true }>
      <VideoBg.Source src={ videoUrlMp4 } type="video/mp4" />
    </VideoBg>
    {/* <div className="overlay-layer"></div> */}
  </div>
}