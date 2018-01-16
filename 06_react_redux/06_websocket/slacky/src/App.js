import React, { Component } from 'react';
import './App.css';
import Chat from './Chat.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      isLogged: false,
      text: "",
      textList: [],
      users: []
    };
    this.handleChangeU = this.handleChangeU.bind(this);
    this.handleSubmitU = this.handleSubmitU.bind(this);
    this.handleChangeT = this.handleChangeT.bind(this);
    this.handleSubmitT = this.handleSubmitT.bind(this);
  }

  handleSubmitT(event){
    event.preventDefault();
    let newTextList= this.state.textList
    newTextList.push(this.state.text)
    this.setState({textList: newTextList}, ()=>console.log(this.state.textList[0]))
  }

  handleChangeT(event) {
    this.setState({text: event.target.value});
  }

  handleSubmitU(event){
    this.setState({isLogged: !this.state.isLogged});
  }

  handleChangeU(event) {
    this.setState({username: event.target.value});
  }

  componentDidMount(){
    const nbUsersElem = document.getElementById("nbUsers");
    const ws = new WebSocket("ws://localhost:3500");
    ws.onmessage = (event) => {
      console.log("Message: " + event.data);
      nbUsersElem.innerHTML = event.data;
    };
    window.addEventListener("beforeunload", () => ws.send("CLOSE"));
  }

  render() {
    console.log(this.state.textList)
    return (
      <div className="App">
        <h1>Welcome to Slacky!</h1>
        {this.state.isLogged === false
        ?<form onSubmit={this.handleSubmitU}>
          <label>
            Please, give us your username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChangeU}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        : <Chat
            text={this.state.text}
            textList={this.state.textList}
            username={this.state.username}
            onSubmit={this.handleSubmitT}
            onChange={this.handleChangeT}
          />}
          <p onClick={this.usersConnected}>There is <span id="nbUsers">0</span> users connected.</p>
      </div>
    );
  }
}

export default App;
