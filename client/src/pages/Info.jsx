import React, { Component } from 'react'
import api from "./../api/apiHandler";

class Info extends Component {
    state = {
      article: [],
    };
  
  
    componentDidMount() {
        api.getArticles().then((ArticleFromApi) => {
          this.setState({ Article: ArticleFromApi });
        });
      }

  
    render() {
      if (this.state.Article === null) {
        return <div>Loading....</div>;
      }
      return (
        <div>
          <h1>ALL THE INFO</h1>
          {this.state.article.map((infos) => {
            return (
              <div key={infos._id}>
                <h2>{infos.title} </h2>
                <h3>{infos.author}</h3>
                <h4>{infos.contenu}</h4>
                <h6>{infos.userID}</h6>
              </div>
            );
          })}
        </div>
      );
    }
  }
  
  export default Info;