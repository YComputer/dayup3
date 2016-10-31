import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root';
import configStore from './configStore';


const store = configStore();

ReactDom.render(
    <Root store={store}/>,
    document.getElementById('root')
);