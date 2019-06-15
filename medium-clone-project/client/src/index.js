import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {configureStore, history} from './redux/store/configureStore'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import  * as constant from './constants/constant_action_type'
import {getUser} from './redux/actions/action'
import './asset/medium.css'
// import './asset/bootstrap3.css'
// import './components/newComponent/headerNew.css'
import Immutable from 'immutable'

const initialState = Immutable.Map()


const store = configureStore(/* provide initial state if any */);
// localStorage.removeItem('Auth');

if(localStorage.Auth) {
    // update localStorage
    store.dispatch({type: constant.SET_USER, payload: {user: JSON.parse(localStorage.Auth)}});
    var _id = JSON.parse(localStorage.Auth)._id;
    getUser(_id).then(res => {
        store.dispatch({type: constant.SET_USER, payload: {user: res}});
    })
}



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
