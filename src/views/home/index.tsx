// LIBs
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// LIBs COMPONENTs
import * as Fa from 'react-icons/fa';

// IMAGEs
import image1 from '../../assets/home/01.webp';
import image2 from '../../assets/home/02.webp';
import image3 from '../../assets/home/03.webp';
import image4 from '../../assets/home/04.webp';
import image5 from '../../assets/home/05.webp';
import logo from '../../assets/logo.png';

// STYLE
import * as C from './styled';

export function Home() {

  const [ clientWidth, setClientWidth ] = useState<number>(0);
  const [ reveal, setReveal ] = useState(false);

  useEffect(() => {
    setReveal(true);
    setClientWidth(document.documentElement.clientWidth);

    window.onresize = resize;
  }, [])

  function resize() {
    setClientWidth(document.documentElement.clientWidth);
  }

  return (
    <C.Container>
      <div className="container">
        <div className={`application-presentation-area ${reveal ? 'active' : ''}`}>
          <div className="icon-area">
            <Fa.FaSpotify />
          </div>

          <div className="presentation-area">
            <p className="title">VENHA CONHECER</p>

            <p className="sub-title">NOVAS MÚSICAS</p>
          </div>
        </div>

        <div className={`images-area ${reveal ? 'active' : ''}`}>
          <C.Image src={image1} x={clientWidth > 400 ? 10 : 0} y={clientWidth > 400 ? 10 : 0} delay={.3} />
          <C.Image src={image2} x={clientWidth > 400 ? 60 : 40} y={clientWidth > 400 ? 40 : 30} delay={.6} />
          <C.Image src={image3} x={clientWidth > 400 ? 110 : 80} y={clientWidth > 400 ? 70 : 60} delay={.9} />
          <C.Image src={image4} x={clientWidth > 400 ? 160 : 120} y={clientWidth > 400 ? 100 : 90} delay={1.2} />
          <C.Image src={image5} x={clientWidth > 400 ? 210 : 160} y={clientWidth > 400 ? 130 : 120} delay={1.5} />
        </div>

        <div className={`phrase-area ${reveal ? 'active' : ''}`}>
          <span className='phrase-one'>NOVAS</span>

          <span className='phrase-two'>SENSAÇÕES</span>
        </div>

        <div className={`button-area ${reveal ? 'active' : ''}`}>
          <a href="https://accounts.spotify.com/authorize?client_id=cd49ae1b55404059a82fc04c8edbf96b&response_type=token&redirect_uri=http://localhost:3000/create&scope=streaming%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20ugc-image-upload%20playlist-modify-private%20playlist-modify-public%20user-read-email%20playlist-read-collaborative%20playlist-read-private%20user-read-currently-playing%20user-follow-modify%20user-follow-read%20user-read-recently-played%20user-read-playback-position%20user-top-read" className="button">
            <p className='text'>CONECTE-SE COM SPOTIFY</p> <Fa.FaSpotify />
          </a>
        </div>

        <div className={`logo-area ${reveal ? 'active' : ''}`}>
          <a href="https://www.ltdeveloper.com.br/" target='_blank' className='logo'>
            <img src={logo} />
          </a>
        </div>
      </div>
    </C.Container>
  )
}