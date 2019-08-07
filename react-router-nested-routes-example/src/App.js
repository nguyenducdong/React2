import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom'


class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation/>
          <Switch>
            <Route exact path="/faq" component={Faq}/>
            <Route path="/" component={Dashboard}/>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}


const Navigation = () => (
  <ul>
    <li>
      <Link to="/">DashBoard</Link>
    </li>
    <li>
      <Link to="/faq">FAQ</Link>
    </li>
  </ul>
)

const Faq = () => <h1>FAQ</h1>

const Dashboard = () => (
  <div>
    <h1>DashBoard</h1>
    <Switch>
      <Route exact path="/step-one" component={StepOne}/>
      <Route exact path="/step-two" component={StepTwo}/>
      <Route exact path="/" component={StepZero}/>
    </Switch>
  </div>
)


//declaration navigation
const StepZero = () => (
  <div>
    <h2>Status: Step zero</h2>
    <Link to="/step-one">Declarative navigation to Step 1</Link>

  </div>
)

// Programmatic Navigation
const StepOne = ({ history }) => (
  <div>
    <h2>Status: Step One</h2>

    <button onClick={() => history.push('/step-two')} type="button">
      Programmatic navigation to Step 2
    </button>
  </div>
);

const StepTwo = () => <h2>Status: Step Two</h2>;


export default App;
