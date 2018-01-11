import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      taskList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    let newList= this.state.taskList;
    newList.push({value:this.state.value, check: false})
    this.setState({taskList:newList, value:""})
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  strikeThrough(index){
    let newTaskList = this.state.taskList;
    if(newTaskList[index].check === false)
    newTaskList[index]={
      value: this.state.taskList[index].value,
      check: true
    }
    else {
      newTaskList[index]={
        value: this.state.taskList[index].value,
        check: false
    }
  }
  this.setState({taskList:newTaskList})
}
deleteTask(index){
  let newTaskList2 = this.state.taskList;
  newTaskList2.splice(index,1);
  this.setState({taskList:newTaskList2})
}
  render() {
    return (
      <div>
        <div className="App">
          <h1 className="App-header">Hello to the #1 todoapp on Apple store</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Add a task:
              <input type="text" id="task" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>

          <div className="App-intro">
            {this.state.taskList.map((task,index)=>(
              <div className={"classCheck" + task.check}>
                <span>{task.value}</span>
                <input type="checkbox" checked={task.check} onChange={() => this.strikeThrough(index)}/>
                {task.check
                ?<input type="submit" value="Delete" onClick={() => this.deleteTask(index)}/>
                :<span/>}
                <img src="https://www.google.fr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjCn8aJ9c3YAhUHXRQKHeOTDZAQjRwIBw&url=https%3A%2F%2Fgiphy.com%2Fartists&psig=AOvVaw2zvhZsN8shXh9Nq3EuL5yr&ust=1515691523860234"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
