import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  return <header className="music-cozy-header">
    <div className="header-container">
      <a className="site-brand" href="/">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'I miss my cozy room...',
            1000, 
            'my cozy space.',
            1000, 
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.5em', display: 'inline-block' }}
          repeat={ Infinity }
        />
      </a>
      <div className="site-nav">
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/report">Report</a></li>
        </ul>
      </div>
    </div>
  </header>
}