import React from 'react'
import './search.css'
/* function Search(props) {
  return(
    <form action=""></form>
  )
} */

const Search = () => {
  return (
    <form className='Search'>
      <input
        type="text"
        placeholder='Buscat tu video favorito'
        className='Search-input' />
    </form>
  )
}

export default Search