import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Search from './components/Search'
import About from './components/pages/About'
import {v4 as uuid4 } from 'uuid'
import './App.css'

 class App extends Component {
  state = {
    todos: [
       {
        id: uuid4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid4(),
        title: 'Dinner with friends',
        completed: false

      },
      {
        id: uuid4(),
        title: 'Meeting with boss',
        completed: true

      },
      {
        id: uuid4(),
        title: 'Complete the assignment',
        completed: false
      },
      {
        id: uuid4(),
        title: 'Visit the dentist',
        completed: true
      },
      {
        id: uuid4(),
        title: 'Walk the dog',
        completed: false
      }
      
    ]
  }
  
  /*
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }
  */

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })})
    
  }

  delTodo = (id) => {
     this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}) 
    
  }

  addTodo = (title) => {
     const newTodo = {
      id: uuid4(),
      title: title,
      completed: false
    } 
    this.setState({todos: [...this.state.todos, newTodo]}) 
    
  }
  
  search = (title) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.title.indexOf(title) !== -1)]}) 
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Search search={this.search} />
            <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo}/>
          </Fragment>
        )} />
        <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>
    )
  }
}

export default App