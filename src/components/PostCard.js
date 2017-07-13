import React, { Component } from 'react'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class PostCard extends Component {

    render() {
        const {data} = this.props;
        return (
            <Card>
                <CardTitle title={data.title} subtitle="Card subtitle"/>
                <CardText>
                    {data.body}
                </CardText>
                <CardActions>
                    <FlatButton label="Expand to see stories"/>
                </CardActions>
            </Card>
        )
    }
}

export default PostCard;