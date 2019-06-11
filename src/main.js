import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { AppContainer } from 'react-hot-loader';
import App from './App';
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
);

// if (module.hot) {
//     //实现热更新
//     module.hot.accept();
// }