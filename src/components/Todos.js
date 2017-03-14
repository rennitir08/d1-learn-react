import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
        constructor(props) {
        super(props)
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)

        this.state = {
            todos: []
        }
    }

    componentWillMount() {
        this.getTodos()
    }

 getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.setState({todos: todos}))
    }
    
    addTodo(todo) {
        this.getTodos()
        // let newTodos = this.state.todos
        // newTodos.unshift(todo)
        // this.setState({todos: newTodos})
    }

    render() {
    var todos = this.state.todos.map((todo, key) => <Todo key={key} description={todo.todo} category={todo.category} todoId={todo.id} completed={todo.completed}/>)

        return <div>
                <addTodo onChange={this.addTodo} />
                <ul className="list-group">
                    {todos}
                </ul>
            </div>
    }
}

export default Todos;