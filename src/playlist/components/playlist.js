import React from "react";
import Media from "./media";
import "./playlist.css";
import Play from '../../icons/components/play'
import FullScreen from '../../icons/components/full-screen'
import Volume from '../../icons/components/volume'
import Pause from '../../icons/components/pause'

function Playlist(props) {
  const categories = props.data.categories;
  categories.map(item => {
    console.log(item.id);
  });

  const playlist = props.data.categories[0].playlist;
  return (
    <div className="Playlist">
      <Play size='50' color='red'/>
      <FullScreen size='50' color='green'/>
      <Volume size='50' color='green'/>
      <Pause size='50' color='green'/>
      {playlist.map(item => {
        return <Media {...item} key={item.id} />;
      })}
    </div>
  );
}

export default Playlist;
