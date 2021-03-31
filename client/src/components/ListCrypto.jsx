import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




class ListCrypto extends Component {
  state = {
    crypto: null,
  };
  

  componentDidMount() {
    axios
      .get("https://api.nomics.com/v1/currencies/ticker?key=7fba5315ed5a1113dbb1325f0400f873&interval=1d,30d&convert=EUR&per-page=100&page=1")
      .then((response) =>{
        // console.log(response);
        // With axios, your response data will always be at
        // response.data

        this.setState({ crypto: response.data });

        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  

  render() {
    if (this.state.crypto === null) {
      return <div>Loading....</div>;
    }
    return (
      
      <div class="crypto-dets">
        
           <p class="crypto-header-bar"><Link class="crypto-header-bar-hover" to={`/`}>Home</Link> > All the cryptocurrencies </p>
        <h3>Live Market Price</h3>
        <table class="crypto-all-table">
           <tr> 
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>#</th>
                  <th>Details</th>
                
                </tr>
        {this.state.crypto.map((cryptos) => {
          return (
            <tr key={cryptos.id}>
              <td><img class="logo-home" src={cryptos.logo_url} alt="" /></td>
              <td><h2>{cryptos.name} </h2></td>
              <td><h3>{cryptos.price}</h3></td>
              <td> <h5>{cryptos.rank}</h5></td>
             
              <td> <button class="link-home"> <Link to={`/crypto/${cryptos.id}`}>See more</Link></button> </td> 
              </tr>
          );
        })}
        </table>
      </div>
    );
  }
}

export default ListCrypto;
