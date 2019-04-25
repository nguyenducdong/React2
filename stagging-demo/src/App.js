import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


const withAmount = (currencyComponent) => 
  class Amount extends Component {
    constructor(props){
      super(props);
      this.state = {
        amount: 0
      }
    }


    onIncrement = () => {
      this.setState(preState => {
        return {
          amount: preState.amount + 1
        }
      })
    }

    onDecrement = () => {
      this.setState(preState => ({amount: preState.amount -1}))
    }

    render(){
      return (
        <div>
          {/* <Amount amount={this.state.amount} onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
          <Euro amount={this.state.amount}/>
          <Pound amount={this.state.amount}/> */}
          <span>US Dollar: {this.state.amount}</span>
          <button type="button" onClick={this.onIncrement}>+</button>
          <button type="button" onClick={this.onDecrement}>-</button>

          {/* {this.props.children(this.state.amount)} */}

          {currencyComponent.map(CurrencyComponent => {
            return <CurrencyComponent amount={this.state.amount}/>
          })}
        </div>
      )
    }
  }

// const App = () => (
//   <Amount>
//   {(amount) => (
//     <div>
//       <h1>My currency converter</h1>
//       <Euro amount={amount}/>
//     <Pound amount={amount}/>
//     </div>
//   )}
//   </Amount>
// );

const Euro = ({amount}) => <p>Euro: {amount * 0.86}</p>
const Pound = ({amount}) => <p>Pound: {amount * 0.76}</p>
const CurrenciesWithAmount = withAmount([Euro,Pound]);
const App = () => <CurrenciesWithAmount/>

export default App;
