// import React, { Component } from 'react'


// class Info extends Component {
//     state = {
//       Article: null,
//     };
  
  
//     componentDidMount() {
//         api.getArticle().then((ArticleFromApi) => {
//           this.setState({ Article: ArticleFromApi });
//         });
//       }

  
//     render() {
//       if (this.state.Article === null) {
//         return <div>Loading....</div>;
//       }
//       return (
//         <div>
//           <h1>ALL THE INFO</h1>
//           {this.state.Article.map((infos) => {
//             return (
//               <div key={infos._id}>
    
//                 <h2>{infos.title} </h2>
//                 <h3>{infos.author}</h3>
//                 <h4>{infos.contenu}</h4>
//                 <h5>{infos.contenu}</h5>
//                 <h6>{info.userID}</h6>
//               </div>
//             );
//           })}
//         </div>
//       );
//     }
//   }
  
//   export default Info;