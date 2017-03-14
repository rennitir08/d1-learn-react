import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
    render() {
        return <ul className="list-group">
            <Todo description="feed dog" />
            <Todo description="pay bills" />
            <Todo description="take a nap" />
            <Todo description="finish homework" />
            <Todo description="make todo list" />
        </ul>
    }
}

export default Todos;