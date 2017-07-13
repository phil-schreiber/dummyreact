import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardExpandable, CardTitle, CardText} from 'material-ui/Card'
import {List,ListItem} from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'


class UserCard extends Component {

    render() {
        const {data,onSelectPost,onSelectUser} = this.props;

        return (
            <Card>
                <CardHeader
                    title="Author"

                    actAsExpander={true}
                    showExpandableButton={true}

                />
                <CardTitle title={data.name} subtitle={data.website} />
                <CardText expandable={true}>
                    <div>
                    <List>
                        {

                            data.stories[0].map((entry, idx) => {

                                return <ListItem key={idx} primaryText={entry.title} onClick={
                                    () => {
                                        onSelectUser(data)
                                        onSelectPost(entry)
                                    }
                                }
                                />
                            })
                        }
                    </List>
                    </div>
                </CardText>
                <CardActions>
                    <FlatButton label="Expand to see stories"/>
                </CardActions>
            </Card>
        )
    }
}

export default UserCard;