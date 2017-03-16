import React from 'react';

class Todo extends React.Component {
    render() {
        return <li className="list-group-item">
                    <div className="checkbox">
                    <label className={this.props.completed === 'yes' ? 'done' : ''}>
                        <input type="checkbox" checked={this.props.completed === 'yes' ? true : false} onChange={(e) => this.props.toggleComplete(this.props.id, e.target.checked)}/>
                        {this.props.todo}       
                        </label>
                    </div>
                    <div className="checkbox text-right">
                        <div className="label label-default">
                            {this.props.category}
                        </div>
                    </div>
                </li>                         
            }
        }


export default Todo;