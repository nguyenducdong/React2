import React, { Component } from 'react';
class Search extends Component {
    constructor(props){
      super(props);
      if(this.input){
        this.input.focus();
      }
    }
  
    render() {
      const {value, onChange, children, onSubmit} = this.props;
      return (
        <form onSubmit={onSubmit}>
          <input type="text" value={value} onChange={onChange} ref={el => this.input = el}/>
          <button type="submit">{children}</button>
        </form>
      );
    }
  }

  export default Search