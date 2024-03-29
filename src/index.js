import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#fe3847',
            dark: '#4a4a4a',
        },
        secondary: {
            main: '#972fb2',
        },
        error: {
            main: '#ff0000',
        },
    },
});

ReactDOM.render(<MuiThemeProvider theme={muiTheme}>
    <App />
</MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
