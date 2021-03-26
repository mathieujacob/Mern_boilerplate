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
        "https://api.nomics.com/v1/currencies/ticker?key=7fba5315ed5a1113dbb1325f0400f873&interval=1d,30d&convert=EUR&per-page=100&page=1"
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
        {this.state.crypto.map((cryptos) => {
          return (
            <div key={cryptos.id}>
              <table>
                <tr>
                  <td>name</td>
                  <td>logo</td>
                  <td>market cap</td>
                  <td>graphique</td>
                  <td>details</td>
                </tr>
                <tr>
                  <td>{cryptos.id}</td>
                  <td>
                    {" "}
                    <img src={cryptos.logo_url} alt="" />
                  </td>
                  <td>{cryptos.market_cap}</td>
                  <td>
                    <svg viewBox="0 0 500 100" class="chart">
                      <polyline
                        fill="none"
                        stroke="#0074d9"
                        stroke-width="2"
                        points="
       00,120
      
       420, 70
       440, 80
     "
                      />
                    </svg>
                  </td>
                  <td>
                    {" "}
                    <Link to={`/crypto/${cryptos.id}`}>See more !</Link>{" "}
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListCrypto;
