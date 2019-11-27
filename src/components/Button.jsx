import React from 'react';
import {getUsers} from '../actions/button_actions';
import {connect} from 'react-redux';

function Button({getUsers}) {
    return (
        <div className="App">
           <button onClick={getUsers}>Get news</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
};
export default connect(null, mapDispatchToProps)(Button);
