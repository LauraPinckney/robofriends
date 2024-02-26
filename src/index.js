import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Card } from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  </React.StrictMode>
);
