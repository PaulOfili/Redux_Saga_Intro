import React from 'react';
import {connect} from 'react-redux';

const UserList = ({users, loading}) => {
    return  !loading ?
        (<div className="App">
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>) : null;
};

function mapStateToProps(state) {
    return {
        users: state.users,
        loading: state.loading
    }
}
export default connect(mapStateToProps, null)(UserList);
