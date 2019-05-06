import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route,Switch} from 'react-router-dom'
import Category from './component/Category'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Content/>
      </div>
    )
  }
}

const Navigation = () => (
  <nav className="navbar navbar-light">
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/category">Category</Link></li>
    </ul>
  </nav>
)

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/products" component={Products}/>
    <Route path="/category" component={Category}/>
  </Switch>
)

/**Home component */
const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
)
/*Product component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)
/*Category component*/
// const Category = () => (
//   <div>
//     <h2>Category</h2>
//   </div>
// )
export default App;
