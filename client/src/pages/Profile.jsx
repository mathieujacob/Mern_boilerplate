import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";
import { withRouter, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class Profile extends Component {
  state = {
    User: null,
  };
  // const { context } = props;

  componentDidMount() {
    const UserId = this.props.match.params.id;

    apiHandler.getUsers(UserId).then((UserFromApi) => {
      this.setState({ User: UserFromApi });
      console.log(this.props.match.params);
    });
  }

  render() {
    
    if (this.state.User === null) {
      return <div>Loading...</div>;
    }
    console.log(this.state.User);
    console.log("------------");
    return (
      <div>
        <h1>MY ACCOUNT</h1>
        <img src={this.state.User.avatar} alt={this.state.User.avatar} />
        <p>Username: {this.state.User.userName}</p>
        <p> email : {this.state.User.email} </p>
         <p> role : {this.state.User.role} </p>
         <p> article: {this.state.User.article.title}</p> 
        <p>myCrypto : {this.state.User.myCrypto}</p>
        <Link to={`/api/user/edit/${this.state.User._id}`}>Edit Profile</Link>
        <button>delete User</button>
      </div>
    );
  }
}

export default withRouter(withUser(Profile));
