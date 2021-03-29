import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import { withUser } from "./Auth/withUser";

class UpdateInfo extends Component {
  state = {
    title: "",
    author: "",
    contenu:"",
    publiDate: null,
    UserId:"",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
      console.log(key);
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      title: this.state.title,
      author: this.state.author,
      contenu: this.state.contenu,
      publiDate: this.state.publiDate,
      UserId: this.state.UserId,
    };
    apiHandler
    .UpdateArticles(data)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  addStreetArtAndRedirectToDetailPage = (e) => {
      console.log("hello to my onclick");
    // To send information with "form-data" (like in Postman)
    const uploadData = new FormData();
    uploadData.append("title", this.state.title);
    uploadData.append("author", this.state.author);
    uploadData.append("contenu", this.state.contenu);
    uploadData.append("publiDate", this.state.publiDate);
    uploadData.append("userId", this.state.userId);

    apiHandler
      .UpdateArticles(uploadData)
      .then((createdStreetArt) => {
        // Redirect the user to another page
        this.props.history.push("/api/articles"); // TODO: change the URL
      })
      .catch((err) => {
        console.log("Error while adding the street art: ", err);
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
        <label htmlFor="title">Title</label>
        <input value={this.state.title} type="text" id="title" name="title" onChange={this.handleChange}/>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author"onChange={this.handleChange} />
        <label htmlFor="contenu">Contenu</label>
        <input type="text" id="contenu" name="contenu"onChange={this.handleChange} />
        <label htmlFor="publiDate">Publication Date</label>
        <input type="Date" id="publiDate" name="publiDate"onChange={this.handleChange} />
        <label htmlFor="userId">userId</label>
        <input type="text" id="userId" name="userId"onChange={this.handleChange} />
        <button onClick={this.addStreetArtAndRedirectToDetailPage}>Submit</button>
      </form>
      </div>
    );
  }
}

export default withRouter(withUser(UpdateInfo));