import React, { Component } from 'react'
import UserCard from './UserCard'
import Paper from 'material-ui/Paper';

const paperStyles = {
    height: 'auto',
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class Users extends Component {


    render () {
        const {users,onSelectPost,onSelectUser} = this.props;

        return (
            <div>
            {users.map((entry, idx) =>
                {

                    return (
                        <Paper key={idx} style={paperStyles} zDepth={5} >
                            <UserCard data={entry} onSelectPost={onSelectPost} onSelectUser={onSelectUser} />
                        </Paper>

                    );
                }
            )}
            </div>

        );
    }
}

export default Users;
