import React, { Component } from 'react'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Paper from 'material-ui/Paper';

const paperStyles = {
    height: 'auto',
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class Post extends Component {

    render() {
        const {post,user, onSelectUser, onSelectPost} = this.props;
console.log(post);
        return (
            <div>
            <Card>
                <CardTitle title={post.title} subtitle={user.name} />
                <CardText>
                    {post.body}
                </CardText>
                <CardActions>
                    <FloatingActionButton disabled={false} onClick={
                        () => {
                            onSelectUser(null)
                            onSelectPost(null)
                        }
                    }>
                        <ArrowBack />
                    </FloatingActionButton>
                </CardActions>

            </Card>
                <div>
                    {post.comments[0].map((entry, idx) =>{
                        return(
                            <Paper key={idx} style={paperStyles} zDepth={5} >
                                <Card>
                                    <CardTitle title={entry.name} subtitle={entry.email} />
                                    <CardText>
                                        {entry.body}
                                    </CardText>

                                </Card>
                            </Paper>
                        )

                    })}
                </div>
            </div>
        )
    }
}

export default Post;