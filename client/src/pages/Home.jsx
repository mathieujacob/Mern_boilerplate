import React from "react";
import HomeCrypto from "./../components/HomeCrypto";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div class="home">
         <div class="home-table">
           <section id="home-page-title">
        <h3>Trends of the day</h3>
        <p class="home-page-slogan">Cryptorama gives you the best informations about cryptocurrencies</p>
     
        <div class="button-begin">
        <button class="link-home2"> <Link to={`/signup`}>Begin today</Link>{" "}</button></div>
        </section>
       <h4> <HomeCrypto/></h4> 
      </div>
      </div>
    );
  }
}

export default Home;
