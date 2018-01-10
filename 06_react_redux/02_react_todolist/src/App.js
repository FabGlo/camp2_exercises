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
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
