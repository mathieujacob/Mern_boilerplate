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
        <div class="crypto-dets">
           <p class="crypto-header-bar"><Link class="crypto-header-bar-hover" to={`/`}>Home</Link>  > News </p>
          <h3>Blog Review </h3>
          <br></br>
         <p> <button class="link-home"><Link to={`/api/articles/create`}> Submit your own article</Link> </button> </p>
         <br></br>
          {this.state.article.map((infos) => {
            console.log(infos.userId.userName)
               
            return (
              <div key={infos._id}>
                <div class="crypto-info-dets-all">
                 <img class="img-info" src={infos.photo} alt="whatevs"/><br></br> <br></br>
                <span class="info-title">{infos.title} </span>
                <p> {infos.author}</p>
                <br></br>
                <button class="link-home"><Link to={`/api/article/${infos._id}`}>Read this article </Link></button> &nbsp;
                <button class="link-home"><Link to={`/api/article/edit/${infos._id}`}>Update</Link></button> &nbsp;
                <button class="link-home" onClick={() => this.handleDelete(infos._id)}> delete</button>
              </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
  
  export default Info;