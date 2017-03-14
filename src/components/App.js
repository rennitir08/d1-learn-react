import React from 'react';
// import Image from './Image';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
    render() {

        // var Images = [];

        // for(var i=0; i<50; i++) {
        //     Images.push(<Image number={i} />)
        // }

        return <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <AddTodo />
                    <Todos />
                </div>
            </div>
        </div>
    }
}

export default App;