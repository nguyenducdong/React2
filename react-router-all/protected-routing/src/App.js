import React, { Component } from 'react';
import { Redirect, Link, Route,Switch } from 'react-router-dom';
import Category from './component/Category';
import Products from './component/Products';
import  Login, { fakeAuth }  from './component/Login';

class App extends Component {
  render(){

    return (
      <div>

        <nav className="navbar navbar">     
        <ul className="nav navbar-nav">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/category">Category</Link></li>
         <li><Link to="/product">Product</Link></li>
         <li><Link to="/admin">Admin</Link></li>
        </ul>
        </nav>

        <Switch>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
          <Route path="/category" component={Category}/>
          <PrivateRoute path='/admin' component = {Admin} />
          <Route path="/products" component={Products}/>
        </Switch>
      </div>
    )

  }
}

//Private router function
const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

//Home component
const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
)

//Admin component
const Admin = ({ match }) => {
  return(<div> <h2>Welcome admin </h2></div>)


}



export default App;
