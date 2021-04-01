import React, { Component } from 'react'
import axios from "axios";
import Faves from "./Forms/Cryptos/favorites/faves"
import BarChart from "./BarCharts"
import { Link } from "react-router-dom";
import BarChartSupply from "./BarChartsSupply"

class SingleCrypto extends Component {

    state = {
        crypto: null,
      };

      componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        axios
          .get(`https://api.nomics.com/v1/currencies/ticker?key=7fba5315ed5a1113dbb1325f0400f873&interval=1h,1d,7d,30d,365d,ytd&convert=EUR&per-page=100&page=1/${id}`)
          .then((response) => {
          console.log(response);
            this.setState({crypto: response.data });
    
             console.log(response.data);
          })
          .catch((error) => {
             console.log(error);
          });

          axios
          .patch(`http://localhost:4000/addFaves/${id}`,  )
          .then((response) =>{
            console.log(response);
            this.setState({crypto:response.data})
          })
      }

      // editFaves(e) =>{

      // }
    

    render() {
        const id = this.props.match.params.id;
        console.log(id)
        if (this.state.crypto === null) {
            return <div>Loading...</div>;
          }
          console.log(this.state.crypto[0]["30d"])
    
        return (
          
      <div class="crypto-dets"> 
       <p class="crypto-header-bar"><Link class="crypto-header-bar-hover" to={`/crypto/`}>All the cryptocurrency</Link> > {this.state.crypto.filter(curr => curr.id === id)[0].id}</p>
          <span class="crypto-title">  <img class="logo-size2" src= {this.state.crypto.filter(curr => curr.id === id)[0].logo_url}alt="" /> 
          &nbsp;&nbsp; Prix en {this.state.crypto.filter(curr => curr.id === id)[0].name} &nbsp; <p class="crypto-title-id"> ({this.state.crypto.filter(curr => curr.id === id)[0].id})</p></span>
         <div class="crypto-all-chart"> <h4 class="crypto-chart-style">   <BarChart data={this.state.crypto.filter(curr => curr.id === id)}/></h4> <h4 class="crypto-chart-style2"><BarChartSupply data={this.state.crypto.filter(curr => curr.id === id)}/></h4>
         <p class="crypto-text-desc">The price History in the first chart, give you the day (X axes) depending on the price (Y axes). You can now compare and see the evolution of the {this.state.crypto.filter(curr => curr.id === id)[0].name} in realtime. Furthermore, if you click on
         the market Cap History button, you will have the relative size of the {this.state.crypto.filter(curr => curr.id === id)[0].name}. It is calculated by multiplying the current market price of a particular coin or token with the total number of coins in circulation. <br></br>  <br></br> 
         On the second chart, you can see the supply history of the {this.state.crypto.filter(curr => curr.id === id)[0].name}. The maximum supply of a cryptocurrency refers to the maximum number of coins or tokens that will be ever created. This means that once the maximum supply is reached, 
         there won’t be any new coins mined, minted or produced in any other way. </p> </div>   <br></br> 
        <div class="crypto-all-chart4">
         <div class="crypto-chart-style3">  
         <h4>A propos du {this.state.crypto.filter(curr => curr.id === id)[0].name} </h4>
         <br></br>
         <p class="cryp-text-desc2">{this.state.crypto.filter(curr => curr.id === id)[0].name} is ranked number {this.state.crypto.filter(curr => curr.id === id)[0].rank} worldwide. {this.state.crypto.filter(curr => curr.id === id)[0].name} is stored and traded securely over the internet using a digital ledger called a blockchain. The status of this cryptocurrency is {this.state.crypto.filter(curr => curr.id === id)[0].status}.</p>
         </div>
         <div class="crypto-link-info">
         <Link class="crypto-header-bar-hover" to={`/api/articles`}> <p class="crypto-link-info-text">More Infos about {this.state.crypto.filter(curr => curr.id === id)[0].name}</p></Link>
         </div>
         <button>Add a favorite</button>
         </div>
        
         {/* <h3> The Market Cap is currently at {this.state.crypto.filter(curr => curr.id === id)[0].market_cap} €</h3> 
         <h4> The status off this cryptocurrency is {this.state.crypto.filter(curr => curr.id === id)[0].status}</h4> 
         <h5> Here is the price date : {this.state.crypto.filter(curr => curr.id === id)[0].price_date}</h5> 
         <h5> Current Price of the {this.state.crypto.filter(curr => curr.id === id)[0].id} : {this.state.crypto.filter(curr => curr.id === id)[0].price} €</h5>
         <button onClick>add to my faves</button> 
         <h5> The First Trade was : {this.state.crypto.filter(curr => curr.id === id)[0].first_trade} </h5>
         <h5> The actual circulating supply is : {this.state.crypto.filter(curr => curr.id === id)[0].circulating_supply} </h5>
         <h5> The maximum circulating supply is : {this.state.crypto.filter(curr => curr.id === id)[0].max_supply} </h5> */}
   
      </div>
        )
       
        
    }
    }



export default SingleCrypto;