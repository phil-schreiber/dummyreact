import React, { Component } from 'react'
import PostCard from './PostCard'
import Paper from 'material-ui/Paper';

const paperStyles = {
    height: 'auto',
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class Posts extends Component {


    render () {
        const {posts} = this.props;

        return (
            <div>
            {posts.map((entry, idx) =>
                {

                    return (
                        <Paper key={idx} style={paperStyles} zDepth={5} >
                            <PostCard data={entry} />
                        </Paper>

                    );
                }
            )}
            </div>

        );
    }
}

export default Posts;
