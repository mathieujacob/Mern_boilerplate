import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BarChartsHome from "./BarChartsHome"

class ListCrypto extends Component {
  state = {
    crypto: null,
  };

  componentDidMount() {
    axios
      .get(
        "https://api.nomics.com/v1/currencies/ticker?key=7fba5315ed5a1113dbb1325f0400f873&ids=BTC,ETH,XRP,LTC,CRO&interval=1h,1d,7d,30d,365d,ytd&convert=EUR&per-page=100&page=1"
      )
      .then((response) => {
        // console.log(response);
        // With axios, your response data will always be at
        // response.data

        this.setState({ crypto: response.data });

        console.log(response.data);
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
        <table>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Logo</th>
                  <th>Price</th>
                  <th>Market Cap</th>
                  <th>Details</th>
                </tr>
        {this.state.crypto.map((cryptos) => {
          return (
            <tr key={cryptos.id}>
           
                <td class="rank-home">{cryptos.rank}</td>
                  <td class="name-home">{cryptos.id}</td>
                  <td>
             
                    <img class="logo-home" src={cryptos.logo_url} alt="" />
                  </td>
                  <td class="price-home">{cryptos.price}€</td>
                  <td class="price-home">{cryptos.market_cap}€</td>
                  <td>
                    {" "}
                    <button class="link-home"> <Link to={`/crypto/${cryptos.id}`}>See Details</Link>{" "}</button>
                  
                  </td>
                </tr>
         
          );
     
        })}
        </table>
        <br></br>
        <br></br>
        <p>Five Cryptocurrencies in comparision</p>
        <BarChartsHome data={this.state.crypto}/>
      </div>
    );
  }
}

export default ListCrypto;
