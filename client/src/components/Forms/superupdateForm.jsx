import React from "react";
import api from "./../../api/apiHandler";
import { Link } from 'react-router-dom';

class superUpdateForm extends React.Component {
  state = {
    title: "",
    author: "",
    contenu: "",
    publiDate: "",
    photo: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFileChange = (e) => {
    console.log("will it blend?");
    this.setState({
      photo: e.target.files[0],
    });
  };

  updateArticleAndRedirect = (e) => {
    const ArticlesId = this.props.match.params.id;
    console.log("hello");
    const uploadData = new FormData();
    uploadData.append("title", this.state.title);
    uploadData.append("author", this.state.author);
    uploadData.append("contenu", this.state.contenu);
    uploadData.append("publiDate", this.state.publiDate);
    uploadData.append("photo", this.state.photo);

    api
      .updateArticles(ArticlesId, uploadData)
      .then(() => {
        this.props.history.push("/api/articles");
      })
      .catch((error) => {
        console.log("error while creating a new artist", error);
      });
  };

  render() {
    return (
      <div class="crypto-dets">
       
        <p class="crypto-header-bar"><Link class="crypto-header-bar-hover" to={`/api/articles`}>All The Articles</Link>  > Update this article </p>
        <h3>Update an article</h3>
        <br></br>
        <div class="crypto-info-update-all">
        <div className="col">
        <label> Title </label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
            placeholder="new title..."
          />
          <br></br>
          <br></br>
           <label> Author </label>
          <input
            type="text"
            value={this.state.author}
            onChange={this.handleChange}
            name="author"
            placeholder=" new author..."
          />
            <br></br>
          <br></br>
           <label> Content </label>
          <input
          class="form-content"
            type="text"
            value={this.state.contenu}
            onChange={this.handleChange}
            name="contenu"
            placeholder="new content..."
          />
               <br></br>
          <br></br>
          <label>Date </label>
          <input
            type="date"
            value={this.state.publiDate}
            onChange={this.handleChange}
            name="publiDate"
            placeholder="Date of publication"
          />
        </div>
        <br></br>
        
        <div className="containerA">
        <label for="file" class="label-file">Upload your photo</label>
          <input id="file" class="input-file" type="file" name="photo" onChange={this.handleFileChange} />
        </div>
        </div>
        <br></br>
        <button class="link-home4" onClick={this.updateArticleAndRedirect}>
          Update an article
        </button>
      
      </div>
    );
  }
}

export default superUpdateForm;
