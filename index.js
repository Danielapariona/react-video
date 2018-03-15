import React from 'react';  // Permite crear componentes
import { render } from 'react-dom'; // Permite renderizar elementos o componentes en el navegador
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json'

const app = document.getElementById('app');

// ReactDOM.render(que voy a renderizar, donde lo haré);
render(<Playlist data={data} />, app);
