import React from 'react'
import api from "./../api/apiHandler"

 class superDelete extends React.Component {
     state = {
         user:[]
     }

componentDidMount(){
    
    api.getUser().then((UserFromApi) =>{
        this.setState({user: UserFromApi})
        console.log("andnow")
    })
}

handleDelete = (UserId) =>{
    console.log(UserId)
    
    api.deleteUser(UserId).then(()=>{
        console.log("user deleted")
        this.setState({UserId:null})
        this.props.history.push("/api/user")
    })
}

    render() {
        
        if (this.state.user === null) {
            return <div>Loading....</div>;
          }


        return (
            <div>
                <h1>User List</h1>
          
      
          {this.state.user.map((profile) => {
               
            return (
              <div key={profile._id}>
                <h2>{profile.userName} </h2>
                <h3>{profile.email}</h3>
              
                <button onClick={() => this.handleDelete(profile._id)}> delete</button>
              </div>
            );
          })}
                
            </div>
        )
    }
}




export default superDelete
