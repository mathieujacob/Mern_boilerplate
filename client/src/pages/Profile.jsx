import React, { Component } from 'react'
import apiHandler from "../api/apiHandler";


class Profile extends Component {
  state = {
    User: null,
  };
  
    componentDidMount() {
       let UserId = this.props.match.params.id
         console.log(UserId);
          apiHandler.getUser(UserId).then((UserFromApi) => {
            this.setState({ User: UserFromApi });
          });
        }


  render(){
    if (this.state.User === null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>MY PROFIL USER</h1>
        <h1>{this.state.User.userName} </h1> 
       <p> {this.state.User.email} </p>
       <p> {this.state.User.password} </p>
       <p> {this.state.User.role} </p>
      </div>
    );
  };
}


export default Profile;
