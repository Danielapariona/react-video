import React from 'react';  // Permite crear componentes
import { render } from 'react-dom'; // Permite renderizar elementos o componentes en el navegador
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

// ReactDOM.render(que voy a renderizar, donde lo haré);
render(<Media type="video" title={"¿Por qué aprender bitcoin?" }author="Daniela Pariona" image={"./images/covers/bitcoin.jpg"} />, app);
