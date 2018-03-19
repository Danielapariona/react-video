import React from 'react';  // Permite crear componentes
import { render } from 'react-dom'; // Permite renderizar elementos o componentes en el navegador
import Home from '../pages/containers/home'
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json'

const app = document.getElementById('app');

// ReactDOM.render(que voy a renderizar, donde lo haré);
render(<Home data={data}/>, app);
