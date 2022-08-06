import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Variabel from './variabel';
// import StateProps from './StateProps';
// import Map from './Map'
// import Lifecycle from './latihan/Lifecycle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
);

