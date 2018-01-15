import React, { Component } from "react";
import _ from "underscore";

function Row(props) {
  return (
    <tr>
      <td name="dktid">{props.decathlon_id}</td>
      <td>{props.title}</td>
      <td>{props.price}</td>
    </tr>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: this.props.lines,
      sortedBy: "decathlon_id",
      reverseSort: false
    };
  }

  filter(filterBy) {
    if (this.state.sortedBy === filterBy) {
      this.setState({reverseSort: !this.state.reverseSort});
    } else {
      this.setState({
        sortedBy: filterBy,
        reverseSort: false
      });
    }
  }

  render() {
    let sortedLines = _.sortBy(this.state.lines, this.state.sortedBy);
    if (this.state.reverseSort) {
      sortedLines.reverse();
    }
    return (
      <div>
      <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th onClick={() => this.filter("decathlon_id")}>ID</th>
              <th onClick={() => this.filter("title")}>Title</th>
              <th onClick={() => this.filter("price")}>Price</th>
            </tr>
          </thead>
          {sortedLines.map(Row)}
        </table>
      </div>
    );
  }
}

export default App;
