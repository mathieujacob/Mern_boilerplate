import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ListCrypto extends Component {
  state = {
    crypto: null,
  };


  componentDidMount() {
    axios
      .get("https://api.nomics.com/v1/currencies/ticker?key=7fba5315ed5a1113dbb1325f0400f873&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
      .then((response) =>{
        // console.log(response);
        // With axios, your response data will always be at
        // response.data

        this.setState({ crypto: response.data });

        // console.log(response.data);
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
      <div>
        <h1>ALL THE Crypto</h1>
        {this.state.crypto.map((cryptos) => {
          return (
            <div key={cryptos._id}>
              <img src={cryptos.logo_url} alt="" classname='logo'/>
              <h5> currency:{cryptos.currency} </h5>
              <h5>status:{cryptos.status}</h5>
              <h5>market cap:{cryptos.market_cap}</h5>
              <h5>ranking :{cryptos.rank}</h5>
              <h5>ID:{cryptos.id}</h5>
              {/* <p>{cryptos.contributed_by}</p> */}
              {/* <Link to={`/beers/${beer._id}`}>See more !</Link> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListCrypto;
