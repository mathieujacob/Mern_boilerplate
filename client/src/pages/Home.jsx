import React from "react";
import HomeCrypto from "./../components/HomeCrypto";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div class="home">
         <div class="home-table">
        <h3>Cryptocurrency trends of the day</h3>
        <div class="button-begin">
        <button class="link-home2"> <Link to={`/signup`}>Begin today</Link>{" "}</button></div>
       <h4> <HomeCrypto/></h4> 
      </div>
      </div>
    );
  }
}

export default Home;
