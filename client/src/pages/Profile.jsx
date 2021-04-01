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
      <div class="crypto-dets">
        <p class="crypto-header-bar"><Link class="crypto-header-bar-hover" to={`/`}>Home</Link>  > Profile </p>
        
        <h3>My account</h3>
        <div class="profile-form">
        <br></br>
        <img class="img-avatar" src={this.state.User.avatar} alt={this.state.User.avatar} />
        <br></br>
        <p class="profile-username">Username : {this.state.User.userName}</p>
        <p class="profile-email">Email : {this.state.User.email} </p>
         <p class="profile-role">Role : {this.state.User.role} </p>
         {/* <p> article: {this.state.User.article.title}</p> */}
        <p class="profile-crypto">My crypto : {this.state.User.myCrypto}</p>
        <br></br>
        <br></br>
        <button class="link-home4"> <Link to={`/api/user/edit/${this.state.User._id}`}>Edit Profile</Link></button>
        {/* <button>delete User</button> */}
        </div>
      </div>
    );
  }
}

export default withRouter(withUser(Profile));
