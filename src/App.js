import React, { Component } from 'react'

import { connect } from 'react-redux'
import { requestUsersAndPosts, selectPost, selectUser } from './actions/index'
import Users from './components/Users'
import Post from './components/Post'
import logo from './logo.svg'
import './App.css'

class App extends Component {


  componentDidMount () {
        this.props.requestUsersAndPosts()

  }

  render () {
    const {UserPosts,selectedPost,selectPost, selectedUser, selectUser} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Mother of Blog of Blogs</h2>
        </div>
          {

              selectedPost == null && selectedUser == null ?
              <Users users={UserPosts} onSelectPost={(selectedPost) => selectPost(selectedPost)} onSelectUser={(selectedUser) => selectUser(selectedUser)} /> :
              <Post post={selectedPost} user={selectedUser} onSelectPost={(selectedPost) => selectPost(selectedPost)} onSelectUser={(selectedUser) => selectUser(selectedUser)} />
          }
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
    return {
        requestUsersAndPosts: () => dispatch(requestUsersAndPosts()),
        selectPost: (selectedPost) =>  dispatch(selectPost(selectedPost)),
        selectUser: (selectedUser) =>  dispatch(selectUser(selectedUser))

    }
}


const mapStateToProps = state => {
  return {
      Posts: state.Posts.posts,
      Users: state.Users.users,
      UserPosts: state.General.userPostList,
      selectedPost: state.Posts.selectedPost,
      selectedUser: state.Users.selectedUser


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);