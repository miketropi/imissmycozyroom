import { Link } from "react-router-dom";
import { useAppContext } from '../context/AppContext';
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  const { menu, soundBgEnable, setSoundBgEnable } = useAppContext(); 

  return <header className="music-cozy-header">
    <div className="header-container">
      <a className="site-brand" href="/">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'I miss my cozy room...',
            1000, 
            'I miss you.',
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
          {
            menu.map((item, __index) => {
              const { name, to } = item;
              return <Link key={ __index } to={ to }>{ name }</Link>
            })
          }
          <li><button onClick={ e => setSoundBgEnable(!soundBgEnable) }>Music on/off</button></li>
        </ul>
      </div>
    </div>
  </header>
}