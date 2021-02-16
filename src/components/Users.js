import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li>{user.username}</li>)
    let userCount = this.props.userCount
    return (
      <div>
        <ul>
          Users!
          {users}
          {userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};


// connect this component to Redux
export default connect(mapStateToProps)(Users); 
