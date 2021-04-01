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
import superForm from "./components/Forms/superForm"
import superUpdateForm from "./components/Forms/superupdateForm"
import ProfileEdit from "./pages/profileEdit"
import userDelete from "./pages/superDelete"
import BarChart from "./components/BarCharts"

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
        <Route exact path="/api/user" component={userDelete}/> 
        <ProtectedRoute exact path="/api/article/:id" component={InfoDets}/> 
        <ProtectedRoute exact path="/api/articles/create" component={superForm}/> 
        <ProtectedRoute exact path="/api/article/edit/:id" component={superUpdateForm} />
        <ProtectedRoute exact path="/api/user/:id" component={Profile} />
        <ProtectedRoute exact path="/api/user/edit/:id" component={ProfileEdit} />
        <BarChart/>
      </Switch>
    </div>
  );
}

export default App;
