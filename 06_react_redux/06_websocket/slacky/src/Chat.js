import React, { Component } from 'react';
import './App.css';

class Chat extends Component{
  constructor(props){
    super(props);
    console.log(this.props.textList)
  }
  render() {
    return(
      <div className="App2"><span>Type your message {this.props.username}</span>
        <form onSubmit={this.props.onSubmit}>
          <label>
            <input type="text" name="text" value={this.props.text} onChange={this.props.onChange}/>
          </label>
          <input type="submit" value="Send"/>
          <span>{this.props.textList.map((element)=>
            (<div>{this.props.username} says: {element}</div>)
          )}
          </span>
        </form>
      </div>
    )
  }
}

export default Chat;
