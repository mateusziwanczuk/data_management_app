import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer';
import './App.css';

const composeEnhancers = 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    
const store = createStore(rootReducer, composeEnhancers)

export const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(
    <Provider store={store}>
        <AppWithRouter />
    </Provider>, 
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
