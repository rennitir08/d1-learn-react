import React from 'react';

class Layout extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

export default Layout;