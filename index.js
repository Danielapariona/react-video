import React from 'react';  // Permite crear componentes
import ReactDom from 'react-dom'; // Permite renderizar elementos o componentes en el navegador

const app = document.getElementById('app');
const holaMundo = <h1>Hola mundo</h1>;

// ReactDOM.render(que voy a renderizar, donde lo haré);
ReactDom.render(holaMundo, app);
