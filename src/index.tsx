import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/app/app.reducer';
import './App.css';

const composeEnhancers = 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    
const store = createStore(rootReducer as any, composeEnhancers)

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

serviceWorker.unregister();
