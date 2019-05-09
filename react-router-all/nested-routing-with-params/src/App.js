import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import Category from './component/Category'
import Product from './component/Product'

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/products">Products</Link></li>
            <li className="nav-item"><Link to="/category">Category</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Product} />
          <Route path="/category" component={Category} />
        </Switch>

      </div>
    )
  }
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

export default App;
