import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/GlobalStyle';
import { Themes } from './styles/Themes';
import store from './store';

import App from './App';
import * as serviceWorker from './serviceWorker';

const render = (
   <Provider store={store}>
      <ThemeProvider theme={Themes.main}>
         <GlobalStyle />
         <App />
      </ThemeProvider>
   </Provider>
)

ReactDOM.render(render, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();