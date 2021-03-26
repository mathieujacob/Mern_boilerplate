import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListCrypto extends Component {
  state = {
    crypto: null,
  };

  componentDidMount() {
    axios
      .get(
        "https://api.nomics.com/v1/currencies/ticker?key=7fba5315ed5a1113dbb1325f0400f873&ids=BTC,ETH,XRP,LTC,CRO&interval=1d,30d&convert=EUR&per-page=100&page=1"
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
                  <th>Charts</th>
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
                  <td class="price-home">{cryptos.price}</td>
                  <td>
                    <svg viewBox="0 0 500 100" class="chart">
                      <polyline
                        fill="none"
                        stroke="#0074d9"
                        stroke-width="2"
                        points="00,120
                           420, 70
                            440, 80"/>
                    </svg>
                  </td>
                  <td>
                    {" "}
                    <button class="link-home"> <Link to={`/crypto/${cryptos.id}`}>See Details</Link>{" "}</button>
                 
                  </td>
                </tr>
           
          );
        })}
        </table>
      </div>
    );
  }
}

export default ListCrypto;
