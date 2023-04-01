import React, { Component } from 'react'
import Header from './component/header/index'
import Footer from './component/footer/index'
import List from './component/list/index'
import { nanoid } from 'nanoid'

import './App.css';
class App extends Component {
  state = {
    todos: [
      { id: nanoid(), name: '吃饭', done: true },
      { id: nanoid(), name: '睡觉', done: true },
      { id: nanoid(), name: '打豆豆', done: true }
    ]
  }

  addTodo = (value) => {
    const { todos } = this.state;
    let p = { id: nanoid(), name: value, done: false }
    this.setState({ todos: [p, ...todos] });

  };

  checked = (id, checked) => {
    const { todos } = this.state
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: checked }
      }
      return todo;
    })
    this.setState({ todos: newTodo })
  };

  //点击删除按钮，删除其中一行
  deleteById = (id) => {
    const { todos } = this.state;
    // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
    const newTo = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todos: newTo })
  }

  //全选
  choseAll = (done) => {
    const { todos } = this.state

    const newTo = todos.map((todo) => {
      return { ...todo, done };

    })
    this.setState({ todos: [...newTo] })
  }


  //删除选中的内容
  Alldelete = () => {
    const { todos } = this.state;
    // filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
    const newTo = todos.filter((todo) => {
      return todo.done !== true
    })
    this.setState({ todos: newTo })
  }
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todos={this.state.todos} checked={this.checked} deleteById={this.deleteById} />
          <Footer todos={this.state.todos} choseAll={this.choseAll} Alldelete={this.Alldelete} />
        </div>
      </div>
    );
  }
}

export default App
