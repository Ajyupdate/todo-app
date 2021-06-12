import React, { Component } from 'react'
import TodoItem from './TodoItem'
import todosData from "./todosData";
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      todos : todosData

    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    this.setState(prevstate =>{
      const updatedTodos = prevstate.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos: updatedTodos
      }
    })
  }
  
  render(){
    const todoItems = this.state.todos.map(item => <TodoItem handleChange={this.handleChange} key={item.id} item={item}/>)
    return(
      <div className="todo-list">
        
        {todoItems}
      </div>
    )
  }
}


export default App