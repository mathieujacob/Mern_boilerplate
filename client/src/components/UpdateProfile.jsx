import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import { withUser } from "./Auth/withUser";

class UpdateProfile extends Component {
  state = {
    userName: "",
    email: "",
    password:"",
    role: "",
    avatar:"",
    myCrypto:"",
    article: null,
  };


  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
      console.log(key);
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
   
    console.log("hello to my handle");
    event.preventDefault();
    let data = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
      avatar: this.state.avatar,
      myCrypto: this.state.myCrypto,
      article: this.state.article,
    };
    const UserId = this.props.match.params.id
    apiHandler
    .UpdateUser(UserId, data )
      .then(() => {
        this.props.context.setUser();
        this.props.history.push("/signin")
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

 
  render() {
    // if (this.props.context.user) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div>
      <h1>update</h1>
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="title">userName</label>
        <input value={this.state.userName} type="text" id="userName" name="userName" onChange={this.handleChange}/>
        <label htmlFor="email">email</label>
        <input type="text" id="email" name="email"onChange={this.handleChange} />
        <label htmlFor="password">password</label>
        <input type="text" id="password" name="password"onChange={this.handleChange} />
        <label htmlFor="role">role</label>
        <input type="text" id="role" name="role"onChange={this.handleChange} />
        <label htmlFor="avatar">avatar</label>
        <input type="text" id="avatar" name="avatar"onChange={this.handleChange} />
        <label htmlFor="mycrypto">My Crypto</label>
        <input type="text" id="mycrypto" name="mycrypto"onChange={this.handleChange} />
        <label htmlFor="Article">Article</label>
        <input type="text" id="Article" name="Article"onChange={this.handleChange} />
        <button>Submit</button>
      </form>
      </div>
    );
  }
}

export default withRouter(withUser(UpdateProfile));