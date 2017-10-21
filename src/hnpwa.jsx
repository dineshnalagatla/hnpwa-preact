import App from './views/app';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

if (window) {
    window.addEventListener('load', () => {
        var el = document.getElementById('container');
        ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>, el);
    });
}