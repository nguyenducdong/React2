import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Login from './Login'
import {Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <Fragment>
      <Menu/>
      <Container>
        <Login/>
      </Container>
    </Fragment>
    // <Login/>
  );
}

export default App;
