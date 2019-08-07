import rootReducer from '../reducers/rootReducer'
import {createStore, applyMiddleware} from 'redux'
import rootSage from '../sagas'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()

const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(saga)
)

saga.run(rootSage)

export default store;