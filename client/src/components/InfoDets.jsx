import React, { Component } from 'react'
import api from "./../api/apiHandler";

class InfoDets extends Component {

    state = {
        article: [],
      };

     

      componentDidMount() {
        let ArticlesId = this.props.match.params.id;
       
        api.getArticle(ArticlesId).then((ArticleFromApi) => {
          this.setState({ article: ArticleFromApi });
        });
      }
    
    

    render() {
        if (this.state.article === null) {
            return <div>Loading...</div>;
          }

        return (
        
      <div> 

       <h1>{this.state.article.title} </h1> 
       <p> by {this.state.article.author} </p>
       <p> {this.state.article.contenu} </p>
       <p> {this.state.article.publiDate} </p>

      </div>
        )
       
        
    }
    }



export default InfoDets;