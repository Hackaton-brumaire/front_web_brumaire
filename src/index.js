import React from 'react';
import ReactDOM from 'react-dom';
import './sass/App.scss';
import App from "./App";
import {AuthProvider} from "./context/AuthProvider";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
