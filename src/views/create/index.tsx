// LIBs
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';

// LIBs COMPONENTs
import * as Fa from "react-icons/fa";

// UTILs
import * as Cookie from "../../core/utils/Cookie";
import { Spotify } from "../../core/utils/Spotify";

// TYPEs
import { hashParamsType } from "../../core/types/hashParamsType";

// IMAGEs
import logo from "../../assets/logo.png";

// STYLE
import * as C from "./style";

export function Create() {

  const [ searchParams, setSearchParams ] = useSearchParams();

  const navigate = useNavigate();

  const [ reveal, setReveal ] = useState(false);

  useEffect(() => {
    setReveal(true);

    initialize();
  }, [])

  async function initialize() {
    let token: hashParamsType = Spotify.getAccessToken();

    Cookie.set('token', token);

    if(token && token.hasOwnProperty('access_token')) {
      const user = await Spotify.getMe(token.access_token);

      if(user && user.hasOwnProperty('id')) {
        await createPlaylist(user);
      } else {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }

  async function createPlaylist(user: SpotifyApi.CurrentUsersProfileResponse) {
    let create = await Spotify.create(user.id);

    if(create) {
      Cookie.set('user', create);
      Cookie.set('playlist', create);

      await myTopTracks();
    } else {
      navigate('/');
    }
  }

  async function myTopTracks() {
    let tracks = await Spotify.getMyTopTracks();
    let tracks_id: string[] = [];

    if(tracks?.items) {
      for(let x = 0;x<5;x++) {
        tracks_id.push(tracks.items[x].id);
      }
    }

    await recommendationsTracks(tracks_id);
  }

  async function recommendationsTracks(tracks_id: string[]) {
    let recommendations = await Spotify.getRecommendationsTacks(tracks_id, 30);

    if(recommendations) {
      await addTrackPlaylist(recommendations);
    } else {
      navigate('/');
    }
  }

  async function addTrackPlaylist(tracks: SpotifyApi.RecommendationsFromSeedsResponse) {
    let playlist = Cookie.get('playlist');

    if(playlist) {
      let req = await Spotify.addTracksToPlaylist(playlist.id, tracks.tracks);

      if(req) {
        navigate('/success');
      }
    }
  }
  
  return (
    <C.Container>
      <div className="container">
        <div className={`icon-area ${reveal ? 'active' : ''}`}>
          <Fa.FaSpotify />
        </div>

        <div className={`body-area ${reveal ? 'active' : ''}`}>
          <div className="title-area">
            <h1 className="title">
              CRIANDO <br />
              <span className="active">PLAYLIST</span>
            </h1>
          </div>

          <div className="loading-area">
            <Fa.FaSpotify />
          </div>
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