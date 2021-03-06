import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends PureComponent {
  // Estado de la aplicación
  state = {
    author: 'Daniela Pariona C.'
  }

  /* constructor(props) {
    // Para poder utilizar las propiedades
    super(props)
    this.state = {
      author: props.author
    }
    // Referencia del evento y bind(this) enlaza el componente
    this.handleClick = this.handleClick.bind(this);
  } */

  // Heredan el contexto de su padre
  /* handleClick = (event) => {
    // console.log(this.props.title);
    this.setState({
      author: 'Ricardo Celis'
    })
  } */

  render() {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    
    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;