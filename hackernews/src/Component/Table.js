import React, { Component } from 'react';
import Button from './Button'
import '../App.css'

const isSearched = searchTerm => item => 
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Table extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {list, onDismiss} = this.props
        if(!list) {return null;}
        return (
            <div className="table">
                {list.map(item => 
                    <div key={item.objectID} className="table-row">
                        <span>{item.title}</span>
                        <span>{item.author}</span>
                        <span>
                            <Button onClick={() => onDismiss(item.objectID)} className="button-inline">
                                Dismiss
                            </Button>
                         </span>
                        
                    </div>
                )}
            </div>
        );
    }
}

export default Table;