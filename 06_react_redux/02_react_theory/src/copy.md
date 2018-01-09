import React, { Component } from 'react';
import './App.css';
import _ from 'underscore';

function Row(props) {
  return (
    <tr>
      <td>{props.product.decathlon_id}</td>
      <td>{props.product.title}</td>
      <td>{props.product.price}</td>
    </tr>
  )
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    }
  }

  handleClick = filter => {
    const sortedProducts = _.sortBy(this.state.products, filter)
    this.setState({products: sortedProducts});
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th onClick={() => this.handleClick('decathlon_id')}>ID</th>
            <th onClick={() => this.handleClick('title')}>TITLE</th>
            <th onClick={() => this.handleClick('price')}>PRICE</th>
          </tr>
          {this.state.products.map(p => <Row product={p}/>)}
        </table>
      </div>
    );
  }
}


export default Table;
