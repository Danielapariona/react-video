import React, { Component } from 'react'
import Media from './media'
import './playlist.css'

class Playlist extends Component {
  render() {
    const categories = this.props.data.categories
    categories.map((item)=>{
      console.log(item.id);
    })

    // console.log(categories);
    const playlist = this.props.data.categories[0].playlist
    return (
      <div className="Playlist">
        {
          playlist.map((item) => {
            return <Media {...item} key={item.id} />
          })
        }
      </div>
    )
  }
}

export default Playlist;