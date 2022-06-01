// LIBs
import SpotifyWebApi from 'spotify-web-api-js';

// TYPEs
import { hashParamsType } from '../types/hashParamsType';

const spotifyApi = new SpotifyWebApi();

export const Spotify = {

  // Pega o token na url
  getAccessToken: () => {
    var hashParams: hashParamsType = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,

    q = window.location.hash.substring(1);
    e = r.exec(q);

    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }

    return hashParams;
  },

  // Pega as informações do usuário
  getMe: async (token: string) => {
    spotifyApi.setAccessToken(token);

    try {
      let req = await spotifyApi.getMe();

      return req;
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  // Cria a playlist
  create: async (id: string) => {
    try {
      let req = await spotifyApi.createPlaylist(id, {name: 'Spotify LTD', public: false, collaborative: false, description: 'Playlist criada para você!'});

      return req;
    } catch(err) {
      console.log(err);
      return err;
    }
  },

  // Pega as músicas que o usuário mais esculta
  getMyTopTracks: async () => {
    try {
      let req = await spotifyApi.getMyTopTracks({limit: 30, time_range: 'long_term'});

      return req;
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  // Busca músicas recomendadas para o usúario com base nas cinco músicas que ele mais esculta
  getRecommendationsTacks: async (seed_tracks: string[], limit: number) => {
    try {
      let req = await spotifyApi.getRecommendations({
        limit: limit,
        seed_tracks: seed_tracks,
        market: 'GB'
      });

      return req;
    } catch(err) {
      console.log(err);
      return null;
    }
  },

  addTracksToPlaylist: async (playlist_id: string, tracks: SpotifyApi.TrackObjectSimplified[]) => {
    try {
      for(let x = 0;x<tracks.length;x++) {   
        await spotifyApi.addTracksToPlaylist(playlist_id.toString(), ["spotify:track:"+tracks[x].id]);
      }

      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  },

  getTracks: async (playlist_id: string) => {
    try {
      const req = await spotifyApi.getPlaylistTracks(playlist_id);

      return req;
    } catch(err) {
      console.log(err);
      return null;
    }
  }
}