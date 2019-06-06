import {applyMiddleware, createStore, compose} from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'


export const history = createBrowserHistory();

export const configureStore =  (preloadedState) => {
    const middlewares = [routerMiddleware(history), thunk];
    const middlewaresEnhancer = applyMiddleware(...middlewares)
    const enhancers = [middlewaresEnhancer];
    const composedEnhancers = compose(...enhancers)
    const store = createStore(
        rootReducer(history),
        preloadedState,
        composedEnhancers
    )
    return store;

}

// compose(
//     applyMiddleware(
//       routerMiddleware(history), // for dispatching history actions
//       // ... other middlewares ...
//     ),
//   ),