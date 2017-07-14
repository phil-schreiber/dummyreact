import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';

const TextFields = () =>{

return (
    <div>
        <TextField
            hintText="Email"
            onChange=""
        /><br />

        <TextField onChange=""
            hintText="Your comment"
            multiLine={true}
            rows={5}
        /><br />
    </div>
)};


class CommentModal extends React.Component {
    state = {
        open: false,
        emailFieldValue: '',
        commentFieldValue: ''
    };

    handleEmailFieldChange = (e) => {
        this.setState({
            emailFieldValue: e.target.value
        });
    }

    handleCommentFieldChange =  (e) => {
        this.setState({
            commentFieldValue: e.target.value
        });
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
        this.setState({open: false});
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleSubmit}
            />,
        ];

        return (
            <div>


                <FloatingActionButton disabled={false} onTouchTap={this.handleOpen} title="Add Comment">
                    <Add />
                </FloatingActionButton>
                <Dialog
                    title="Add Comment"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <TextFields />
                </Dialog>
            </div>
        );
    }
}

export default CommentModal