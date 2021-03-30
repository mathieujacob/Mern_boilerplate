import React, { Component } from 'react'
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";
import { withRouter, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
class Profile extends Component {
  state = {
    User: [],
  };
  // const { context } = props;

    componentDidMount() {
       const UserId = this.props.match.params.id
         console.log(UserId);
          apiHandler.getUser(UserId).then((UserFromApi) => {
            this.setState({ User: UserFromApi });
          });
        }


  render(){
    if (this.state.User === null) {
      return <div>Loading...</div>;
    }
    console.log(this.state.User);
    return (
     
      <div>
        <h1>MY ACCOUNT</h1>
      
       <p> email : {this.state.User.email} </p>
       {/* <p> {this.state.User.avatar} </p> */}
       <p> role : {this.state.User.role} </p>
       <Link to={`/api/user/edit/${this.state.User._id}`}>Update</Link>
       <button>delete User</button>
      </div>
    );
  };
}

export default withRouter(withUser(Profile));
