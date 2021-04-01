import React, { Component } from 'react'
import api from "../api/apiHandler";
import { Link } from 'react-router-dom';
class InfoDets extends Component {

    state = {
        article: null,
      };

     

      componentDidMount() {
        let ArticlesId = this.props.match.params.id;
       console.log(ArticlesId);
        api.getArticle(ArticlesId).then((ArticleFromApi) => {
          console.log(ArticlesId);
          this.setState({ article: ArticleFromApi });
        });
      }
    
    

    render() {
        if (this.state.article === null) {
            return <div>Loading...</div>;
          }
          console.log(this.state.article)

        return (
          
        
      <div class="crypto-dets">
        <p class="crypto-header-bar"><Link class="crypto-header-bar-hover" to={`/api/articles`}>All The Articles</Link>  > This article </p>
        <br></br>
        <div class="crypto-info-dets-all">
       <h3>{this.state.article.title} </h3> 
       <br></br>
       <p><img class="img-info" src={this.state.article.photo} alt="whatevs"/></p>
       <br></br>
       <p class="crypto-info-dets-contenu"> {this.state.article.contenu} </p>
       <br></br>
       <p class="crypto-info-dets-author"> {this.state.article.author} </p>
       <p class="crypto-info-dets-date"> Date of publication : {this.state.article.publiDate} </p>
       </div>
       <br></br>
       <div class="crypto-info-dets-user">
       <img class="img-avatar" src={this.state.article.userId.avatar} alt="avatar"/> <p class="crypto-info-dets-username">  {this.state.article.userId.userName} is {this.state.article.userId.role}</p>
      </div>
      </div>
        )
       
        
    }
    }



export default InfoDets;