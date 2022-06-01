// STYLEs
import * as C from './style';

type Props = {
  data: any
}

export function Track(props: Props) {

  console.log(props);  

  return (
    <C.Container>
      <div className="info-music">
        <p className="title-music">{props.data.track.name}</p>

        <p className="title-album">{props.data.track.album.name}</p>
      </div>

      <div className="author-area">
        <p className="author">
          {props.data.track.artists[0].name}
        </p>
      </div>
    </C.Container>
  )
}