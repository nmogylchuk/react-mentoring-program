import React from 'react';
import {Provider} from 'react-redux'
import App from './App';
import {store} from './store/store';
import './index.scss';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const root = (
    <React.StrictMode>
        <Provider store={store}>
            <App
                Router={BrowserRouter}
            />
        </Provider>
    </React.StrictMode>
);

hydrate(root, document.getElementById('root'));
