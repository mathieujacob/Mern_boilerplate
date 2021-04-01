import React from "react";
import api from "./../api/apiHandler"
import { Link } from 'react-router-dom';

class profileEdit extends React.Component {
  state = {
    userName: "",
    email: "",
    password: "",
    role: "",
    avatar: null,
    myCrypto: "",
    article: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFileChange = (e) => {
    console.log("The file added by the use is: ", e.target.files[0]);
    this.setState({
      avatar: e.target.files[0],
    });
  };
  
editUser =(e) =>{
    const UserId = this.props.match.params.id;
    
    console.log(UserId);
    console.log(this.state.avatar)
    const uploadData = new FormData();
    uploadData.append("userName", this.state.userName)
    uploadData.append("email", this.state.email)
    uploadData.append("password", this.state.password)
    uploadData.append("myCrypto", this.state.myCrypto)
    uploadData.append("role", this.state.role)
  
    uploadData.append("avatar", this.state.avatar);

    api.editUser(UserId, uploadData)
    .then(()=>{        
    this.props.history.push(`/api/user/${UserId}`)
    }).catch((error) =>{
        console.log("error while creating a new user")
    })
}
 

  render() {
    const UserId = this.props.match.params.id;
    return  (
        <div class="crypto-dets">
             <p class="crypto-header-bar"><Link class="crypto-header-bar-hover" to={`/api/user/${UserId}`}>My Profile</Link>  >  Edit </p>
          <h3>Edit your profile</h3>
          <br></br>
          <div class="crypto-info-update-all">
          <div className="col">
          <label> Username </label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleChange}
              name="userName"
              placeholder="new username..."
            />
            <br></br>
              <label> Email </label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              placeholder="new email..."
            />
            <br></br>
              <label> Role </label>
            <input
              type="text"
              value={this.state.role}
              onChange={this.handleChange}
              name="role"
              placeholder="new role..."
            />
            <br></br>
              <label> Favourite Crypto </label>
            <input
              type="text"
              value={this.state.myCrypto}
              onChange={this.handleChange}
              name="Crypto"
              placeholder="Favourite crypto..."
            />
          </div>
          <br></br>
           
          <div className="containerA">
          <label for="file" class="label-file">Upload your avatar</label>
            <input id="file" class="input-file" type="file" type="file" name="avatar" onChange={this.handleFileChange} />
          </div>
          <br></br>
          </div>
           <br></br>
           
          <button class="link-home4" onClick={this.editUser}>
            Update my profile
          </button>
        </div>
      );;
  }
}

export default profileEdit;
