import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Todos extends React.Component {
        constructor(props) {
        super(props)
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)
        // this.toggleComplete = this.toggleComplete.bind(this)

        // this.state = {
        //     todos: []
        // }
    }

    componentWillMount() {
        this.getTodos()
    }

 getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))

    }
    
    addTodo(todo) {
        this.getTodos()
        // let newTodos = this.state.todos
        // newTodos.unshift(todo)
        // this.setState({todos: newTodos})
    }

    toggleComplete(todoId, isComplete) {
        fetch('/api/v1/todos/' + todoId + '/' + (isComplete ? 'complete' : 'incomplete'))
        .then(this.getTodos)
    }

    render() {
    let todos = this.props.sharedTodos.map((todo, key) => <Todo key={key} {...todo} toggleComplete={this.toggleComplete} />)

    if (todos.length === 0) {
        todos = <div className="alert alert-success text-center">Start by adding a task above.</div>
    }

        return <div>
                <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/completed')}>View Completed Todos</button>
                <addTodo onChange={this.addTodo} />
                <ul className="list-group">
                    {todos}
                </ul>
            </div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Todos)
