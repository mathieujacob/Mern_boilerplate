import React, { Component } from 'react'
import api from "./../api/apiHandler";
import { Link } from 'react-router-dom';
import apiHandler from './../api/apiHandler';


class Info extends Component {
    state = {
      article: [],
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
      if (this.state.Article === null) {
        return <div>Loading....</div>;
      }
   
      return (
        <div class="crypto-dets">
           <p class="crypto-header-bar"><Link class="crypto-header-bar-hover" to={`/`}>Home</Link> > All the news </p>
          <h3>Blog Review </h3>
          <br></br>
         <p> <button class="link-home"><Link to={`/api/articles/create`}> Submit your own article</Link> </button> </p>
         <br></br>
          {this.state.article.map((infos) => {
               
            return (
              <div key={infos._id}>
                 <img class="img-info" src={infos.photo} alt="whatevs"/><br></br>
                <span class="info-title">{infos.title} </span>
                <p>by {infos.author}</p>
                <button class="link-home"><Link to={`/api/article/${infos._id}`}>See more </Link></button> 
                <button class="link-home"><Link to={`/api/article/edit/${infos._id}`}>Update</Link></button>
                <button class="link-home" onClick={() => this.handleDelete(infos._id)}> delete</button>
              </div>
            );
          })}
        </div>
      );
    }
  }
  
  export default Info;