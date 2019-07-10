import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../redux/actions'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './header/Header';
import Landing from './landing/Landing';
const Dashboard = () => <h2>Dashboard</h2>
const ServeyNew = () => <h2>ServeyNew</h2>


class App extends React.Component {

  componentDidMount(){
    this.props.fetchUser();
  }


  render(){
    return (
      <div className="container" style={{width:'90%'}}>
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route exact={true} path="/" component={Landing}/>
              <Route path="/servey" component={Dashboard}/>
              <Route path="/servey/new" component={ServeyNew}/>
              <Route path="**" component={Landing}/>
            </Switch>
          </div>
        </BrowserRouter>
        <a href="/auth/google">Sign In With Google</a>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUser
}


const mapStateToProps = state => {
  return;
}

export default connect(null, mapDispatchToProps)(App);
