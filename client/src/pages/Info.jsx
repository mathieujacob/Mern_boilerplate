import React, { Component } from 'react'
import api from "./../api/apiHandler";
import { Link } from 'react-router-dom';


class Info extends Component {
    state = {
      article: [],
    };
  
  
    componentDidMount() {
        api.getArticles().then((ArticleFromApi) => {
          this.setState({ article: ArticleFromApi });
        });
      }

  
    render() {
      if (this.state.Article === null) {
        return <div>Loading....</div>;
      }
   
      return (
        <div>
          <h1>ALL THE INFO</h1>
          <Link to={`/api/article/create`}>create one article</Link>
          {this.state.article.map((infos) => {
            return (
              <div key={infos._id}>
                <h2>{infos.title} </h2>
                <h3>{infos.author}</h3>
                <Link to={`/api/article/${infos._id}`}>See more !</Link>
             
              </div>
            );
          })}
        </div>
      );
    }
  }
  
  export default Info;