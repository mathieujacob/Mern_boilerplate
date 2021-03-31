import React, { Component } from 'react'
import api from "../api/apiHandler";

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
          
        
      <div> 

       <h1>{this.state.article.title} </h1> 
       <p> by {this.state.article.author} </p>
       <p> {this.state.article.contenu} </p>
       <p> {this.state.article.userId.userName} </p>

      </div>
        )
       
        
    }
    }



export default InfoDets;