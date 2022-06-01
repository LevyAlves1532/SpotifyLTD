// LIBs
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// COMPONENTs
import { Track } from '../../components/Track';

// LIBs COMPONENTs
import * as Fa from 'react-icons/fa';

// UTILs
import * as Cookie from '../../core/utils/Cookie';
import { Spotify } from '../../core/utils/Spotify';

// IMAGEs
import logo from "../../assets/logo.png";

// STYLE
import * as C from './style';

export function Success() {

  const listTrackRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const [ reveal, setReveal ] = useState(false);
  const [ playlistId, setPlaylistId ] = useState<string>();
  const [ tracks, setTracks ] = useState<SpotifyApi.PlaylistTrackResponse>();

  useEffect(() => {
    initialize();

    setReveal(true);
  }, [])

  async function initialize() {
    let token = Cookie.get('token');
    let playlist = Cookie.get('playlist');

    await Spotify.getMe(token.access_token);

    if(playlist.id) {
      setPlaylistId(playlist.id);

      let tracks = await Spotify.getTracks(playlist.id);

      if(tracks) {
        setTracks(tracks);
      } else {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }

  return (
    <C.Container>
      <div className="container">
        <div className={`application-presentation-area ${reveal ? 'active' : ''}`}>
          <div className="presentation-area">
            <p className="title">PLAYLIST CRIADA</p>

            <p className="sub-title">FIQUE A VONTADE E CURTA!</p>
          </div>
          
          <div className="icon-area">
            <Fa.FaSpotify />
          </div>
        </div>

        <div className={`tracks-list-area ${reveal ? 'active' : ''}`}>
          <div className="inside" ref={listTrackRef}>
            { (tracks?.items && tracks.items.length > 0) &&
              tracks.items.map((item, key) => (
                <Track data={item} key={key} />
              ))
            }
          </div>
        </div>

        <div className={`button-redirect-area ${reveal ? 'active' : ''}`}>
          <a href={`https://open.spotify.com/playlist/${playlistId}`} target="_blank" className="button-redirect">Ouvir no spotify <Fa.FaSpotify /></a>
        </div>

        <div className={`logo-area ${reveal ? 'active' : ''}`}>
          <a href="https://www.ltdeveloper.com.br/" target="_blank" className="logo">
            <img src={logo} />
          </a>
        </div>
      </div>
    </C.Container>
  )
}