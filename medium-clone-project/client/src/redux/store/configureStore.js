import {applyMiddleware, createStore, compose} from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import rootSaga from '../../saga'
import createSagaMiddleware from 'redux-saga'
 


export const history = createBrowserHistory();

const saga = createSagaMiddleware()

export const configureStore =  (preloadedState) => {
    const middlewares = [routerMiddleware(history), saga];
    const middlewaresEnhancer = applyMiddleware(...middlewares)
    const enhancers = [middlewaresEnhancer];
    const composedEnhancers = compose(...enhancers)
    const store = createStore(
        rootReducer(history),
        preloadedState,
        composedEnhancers
    )
    saga.run(rootSaga);
    return store;
}





// compose(
//     applyMiddleware(
//       routerMiddleware(history), // for dispatching history actions
//       // ... other middlewares ...
//     ),
//   ),