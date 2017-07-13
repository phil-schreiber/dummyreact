import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { store } from './store'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
       <Provider store={store} >
        <App />
       </Provider>
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
