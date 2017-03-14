import React from 'react';

class AddTodo extends React.Component {
    render() {
        return <div className="form-group">
                    <label for="category">
                        Select a category:
                    </label>
                        <select className="form-control">
                            <option>Important</option>
                            <option>Personal</option>
                            <option>School</option>
                            <option>Work</option>
                            <option>Other</option>
                        </select> 
                </div>                           
    }
}

export default AddTodo;