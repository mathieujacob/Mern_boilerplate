import React from "react";
import api from "./../api/apiHandler"

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
    return  (
        <div className="containerA">
          <h1>Edit your profile</h1>
          <label> Fill in the Blanks</label>
          <div className="col">
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleChange}
              name="userName"
              placeholder="userName"
            />
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              placeholder="email"
            />
            <input
              type="text"
              value={this.state.role}
              onChange={this.handleChange}
              name="role"
              placeholder="role"
            />
            <input
              type="date"
              value={this.state.myCrypto}
              onChange={this.handleChange}
              name="Crypto"
              placeholder="Favourites Crypto"
            />
          </div>
          <label>Avatar</label>
          <div className="containerA">
            <input type="file" name="avatar" onChange={this.handleFileChange} />
          </div>
          <button className="btn" onClick={this.editUser}>
            Update a User
          </button>
        </div>
      );;
  }
}

export default profileEdit;
