import React, { Component } from 'react'
import api from "./../api/apiHandler";
import { Link } from 'react-router-dom';
import apiHandler from './../api/apiHandler';


class Info extends Component {
    state = {
      article: null,
    };
  
  
    componentDidMount() {
        api.getArticles().then((ArticleFromApi) => {
          this.setState({ article: ArticleFromApi });
          
        });

        
      }

      handleDelete = (ArticlesId) => {
        console.log(ArticlesId);
       
        apiHandler
        .deleteArticles(ArticlesId)
        .then(() => {
          console.log("SUCCESS!");
           this.setState({ ArticlesId: null })
          this.props.history.push("/api/articles")
         
        })
      };

  
    render() {
      if (this.state.article === null) {
        return <div>Loading....</div>;
      }
   
      return (
        <div>
          <h1>ALL THE INFO</h1>
          <Link to={`/api/articles/create`}>create one article</Link>
      
          {this.state.article.map((infos) => {
            console.log(infos.userId.userName)
               
            return (
              <div key={infos._id}>
                <h2>{infos.title} </h2>
                <h3>{infos.author}</h3>
                <p>{infos.userId.email}</p>
                <p>added by {infos.userId.userName}</p>
                <Link to={`/api/article/${infos._id}`}>See more !</Link>
                <Link to={`/api/article/edit/${infos._id}`}>Update</Link>
                <img src={infos.photo} alt="whatevs"/>
                <button onClick={() => this.handleDelete(infos._id)}> delete</button>
              </div>
            );
          })}
        </div>
      );
    }
  }
  
  export default Info;