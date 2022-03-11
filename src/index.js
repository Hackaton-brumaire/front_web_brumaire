import React from 'react';
import ReactDOM from 'react-dom';
import './sass/App.scss';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import { CometChat } from '@cometchat-pro/chat';
import config from './componentes/faq/Config.js';


CometChat.init(config.appID)


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
