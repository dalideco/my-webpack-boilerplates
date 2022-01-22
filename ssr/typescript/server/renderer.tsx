import React from 'react';
import { StaticRouter as Router } from 'react-router-dom/server';
import App from '../client/App';

export default function renderer({url}) {
  return (<Router location={url}>
            <App/>
        </Router>)  
}
