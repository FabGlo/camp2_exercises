import React, { Component } from 'react';
import './App.css';
import _ from 'underscore';

function Row(props){
  return(
    <tr>
      <td>{props.input.decathlon_id}</td>
      <td>{props.input.title}</td>
      <td>{props.input.price}</td>
    </tr>
  )
}


class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      order: {decathlon_id: "asc", title: "asc", price: "asc"},
      productState : props.input
    }
  }
    sortArray(filter){
      if(this.state.order[filter]==="asc"){
      const sortedArray = _.sortBy(this.state.productState, filter);
      this.setState({productState: sortedArray});
      let newOrder = this.state.order
      newOrder[filter] = "desc"
      this.setState({order: newOrder})
    }else{
      const sortedArray = _.sortBy(this.state.productState, filter).reverse();
      this.setState({productState: sortedArray});
      let newOrder = this.state.order
      newOrder[filter] = "asc"
      this.setState({order: newOrder})
    }
    }
  render(){
    return (
      <div>
        <table>
          <tr>
            <th onClick={() => this.sortArray("decathlon_id")}>Id</th>
            <th onClick={() => this.sortArray("title")}>Title</th>
            <th onClick={() => this.sortArray("price")}>Price</th>
          </tr>
            {this.state.productState.map(element => <Row input={element}/>)}
        </table>
      </div>
    );
  }
}


export default Table;
