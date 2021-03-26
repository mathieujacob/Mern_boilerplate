import React, { Component } from 'react'
import axios from "axios";

class SingleCrypto extends Component {

    state = {
        crypto: null,
      };

      componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        axios
          .get(`https://api.nomics.com/v1/currencies/ticker?key=7fba5315ed5a1113dbb1325f0400f873&interval=1d,30d&convert=EUR&per-page=100&page=1/${id}`)
          .then((response) => {
          console.log(response);
            this.setState({crypto: response.data });
    
             console.log(response.data);
          })
          .catch((error) => {
             console.log(error);
          });
      }
    

    render() {
        const id = this.props.match.params.id;
        console.log(id)
        if (this.state.crypto === null) {
            return <div>Loading...</div>;
          }
          console.log(this.state.crypto[0].id)
    
        return (
          
      <div class="crypto-dets"> 
          <h1>  
          <img class="logo-size" src= {this.state.crypto.filter(curr => curr.id === id)[0].logo_url}alt="" /> </h1> 
         <h2> {this.state.crypto.filter(curr => curr.id === id)[0].id} is ranked number {this.state.crypto.filter(curr => curr.id === id)[0].rank}</h2> 
         <h3> The Market Cap is currently at {this.state.crypto.filter(curr => curr.id === id)[0].market_cap} €</h3> 
         <h4> The status off this cryptocurrency is {this.state.crypto.filter(curr => curr.id === id)[0].status}</h4> 
         <h5> Here is the price date : {this.state.crypto.filter(curr => curr.id === id)[0].price_date}</h5> 
         <h5> Current Price of the {this.state.crypto.filter(curr => curr.id === id)[0].id} : {this.state.crypto.filter(curr => curr.id === id)[0].price} €</h5>
      
      </div>
        )
       
        
    }
    }



export default SingleCrypto;