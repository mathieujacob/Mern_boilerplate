import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import ListCrypto from "./components/ListCrypto";
import SingleCrypto from "./components/SingleCrypto";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/crypto" component={ListCrypto} />
        <Route exact path="/api/articles" component={Info} />
        <Route exact path="/crypto/:id" component={SingleCrypto}/> 
        {/* <Route exact path="/info" component={Info}/>  */}
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
