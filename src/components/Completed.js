import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'


class Completed extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                <h1 className="text-center">Completed Todos</h1> 
                <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button>
                </div>
            </div>
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
export default connect(mapStateToProps)(Completed)
