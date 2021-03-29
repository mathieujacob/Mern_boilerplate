import React from "react";
import api from "./../../api/apiHandler";

class superForm extends React.Component {
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
      console.log("will it blend?")
    this.setState({
      photo: e.target.files[0],
    });
  };

  addArticleAndRedirect = (e) => {
      console.log('hello')
    const uploadData = new FormData();
    uploadData.append("title", this.state.title);
    uploadData.append("author", this.state.author);
    uploadData.append("contenu", this.state.contenu);
    uploadData.append("publiDate", this.state.publiDate);
    uploadData.append("photo", this.state.photo);

    api
      .addArticles(uploadData)
      .then((createdArticle) => {
          console.log(createdArticle)
        this.props.history.push("/api/articles");
      })
      .catch((error) => {
        console.log("error while creating a new artist", error);
      });
  };

  render() {
    return (
      <div className="containerA">
        <h1>Add an article</h1>
        <label> Fill in the Blanks</label>
        <div className="col">
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
            placeholder="title"
          />
          <input
            type="text"
            value={this.state.author}
            onChange={this.handleChange}
            name="author"
            placeholder="author"
          />
          <input
            type="text"
            value={this.state.contenu}
            onChange={this.handleChange}
            name="contenu"
            placeholder="Content"
          />
          <input
            type="date"
            value={this.state.publiDate}
            onChange={this.handleChange}
            name="publiDate"
            placeholder="Date of publication"
          />
        </div>
        <label>Photo</label>
        <div className="containerA">
          <input type="file" name="photo" onChange={this.handleFileChange} />
        </div>
        <button className="btn" onClick={this.addArticleAndRedirect}>Add an article</button>
      </div>
    );
  }
}

export default superForm;
