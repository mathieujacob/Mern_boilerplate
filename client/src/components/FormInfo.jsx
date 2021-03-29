import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import { withUser } from "./Auth/withUser";

class FormInfo extends Component {
  state = {
    title: "",
    author: "",
    contenu:"",
    publiDate: null,
    UserId:"",
    photo:"",
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
      photo:this.state.photo
    };
    apiHandler
    .addArticles(data)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
     
  };

  handleFileChange = (e) => {
    console.log("The file added by the use is:", e.target.files[0]);
    this.setState({
      photo: e.target.files[0],
    });
  };

  addStreetArtAndRedirectToDetailPage = (e) => {
    // To send information with "form-data" (like in Postman)
    const uploadData = new FormData();
    uploadData.append("title", this.state.title);
    uploadData.append("author", this.state.author);
    uploadData.append("contenu", this.state.contenu);
    uploadData.append("publiDate", this.state.publiDate);
    uploadData.append("userId", this.state.userId);
    uploadData.append('photo', this.state.photo)

    apiHandler
      .addArticles(uploadData)
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
      <h1>Create</h1>
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" onChange={this.handleChange}/>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author"onChange={this.handleChange} />
        <label htmlFor="contenu">Contenu</label>
        <input type="text" id="contenu" name="contenu"onChange={this.handleChange} />
        <label htmlFor="publiDate">Publication Date</label>
        <input type="Date" id="publiDate" name="publiDate"onChange={this.handleChange} />
        <label htmlFor="userId">userId</label>
        <input type="text" id="userId" name="userId"onChange={this.handleChange} />
        <label htmlFor="photo">Photo</label>
        <input type="file" id="photo" name="photo"onChange={this.handleFileChange} />
        <button onClick={this.addStreetArtAndRedirectToDetailPage}>Submit</button>
      </form>
      </div>
    );
  }
}

export default withRouter(withUser(FormInfo));