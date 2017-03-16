import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.onClickAddTodo = this.onClickAddTodo.bind(this)
        this.state = {
            description: '',
            category: '',
            addTodo: props.addTodo
        }

    }

    addTodo(getTodos) {
        fetch('/api/v1/todos', {
            method:'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        .then(response => response.json())
        .then(getTodos)
    }



    onClickAddTodo() {
        if(this.state.description !== '' && this.state.category !== '') {
        // 1. POST to /api/v1/todos
        fetch('/api/v1/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               todo: this.state.description,
               category: this.state.category, 
               completed: false
            })
        })
        .then(response => response.json())
        .then(todo => {
            this.setState({
                description: '',
                category: '',
            })
        })
    }
 }
    render() {
        return <div>
                <h1 className="text-center">Todo List</h1>
                <div className="form-group">
                        <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                            <option value="">Select Category</option>
                            <option value="important">Important</option>
                            <option value="personal">Personal</option>
                            <option value="school">School</option>
                            <option value="work">Work</option>
                            <option value="other">Other</option>
                        </select> 
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={() => this.onClickAddTodo()}> Add Todo</button>
                    </span>
                </div>
            </div>
        </div>                           
    }
 }



export default AddTodo;