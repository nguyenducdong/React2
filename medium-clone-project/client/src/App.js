import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Feed from './components/Feed'
import Profile from './components/Profile'
import ArticleView from './components/ArticleView'
import Editor from './components/Editor'
import SignInWith from './components/SignInWith'
import requireAuthentication from './utils/requireAuth'


function App() {
  const pathName = window.location.pathname
  return (
    
    <div>
      {!pathName.includes('editor') ? <Header/> : ''}
      <SignInWith/>
      {/* <Login/> */}
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/articleview/:id" component={ArticleView} />
        <Route path="/editor" component={requireAuthentication(Editor)} />
        <Route path="**" component={Feed} />
      </Switch>
    </div>
  );
}

export default App;
