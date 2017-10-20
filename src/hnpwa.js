import { createTestApp } from './components/TestComponent';
import ReactDOM from 'react-dom';
import React from 'react';

if (window) {
    window.addEventListener('load', () => {
        var el = document.getElementById('container');
        ReactDOM.render(createTestApp(), el);
    });
}