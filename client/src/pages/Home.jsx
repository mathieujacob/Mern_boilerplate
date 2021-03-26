import React from "react";
import HomeCrypto from "./../components/HomeCrypto";


class Home extends React.Component {
  render() {
    return (
      <div class="home">
        <div class="home-column">
        <h3>le marché des cryptomonnaies en un clin d'oeil</h3>
        
       <h4> <HomeCrypto/></h4> 
      </div>
      </div>
    );
  }
}

export default Home;
