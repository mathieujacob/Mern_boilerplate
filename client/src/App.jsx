import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import ListCrypto from "./components/ListCrypto";
import InfoDets from "./components/InfoDets";
import SingleCrypto from "./components/SingleCrypto";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Info from "./pages/Info";
import FormInfo from "./components/FormInfo";
import UpdateInfo from "./components/UpdateInfo";

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
        <Route exact path="/api/article/:id" component={InfoDets}/> 
        <Route exact path="/api/articles/create" component={FormInfo}/> 
        <ProtectedRoute exact path="/api/article/edit/:id" component={UpdateInfo} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
