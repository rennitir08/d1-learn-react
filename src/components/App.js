import React from 'react';
// import Image from './Image';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos />
                </div>
            </div>
        </div>
    }
}

export default App;