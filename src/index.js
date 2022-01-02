
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import RutaApp from './RutaApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/RutaApp.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RutaApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
