import React, {Component} from 'react'
import axios from 'axios'


class Admin extends Component {
    state={
        contactRequests: []
    }
    //get all customer contact requests
    handleClick=()=>{
        axios.get("/api/contactRequest")
        .then(res=>{
            this.setState({contactRequests:res.data}); 
        })
    }
  
    render(){
    return(
<div>
<h3>Protected</h3>
<button onClick={this.handleClick}>Get Customer Contact Requests</button>
<div>{this.state.contactRequests.map((request, key)=>
       <ul key = {request._id}>
       <li>Name: {request.name}</li>
       <li>Email: {request.email}</li>
       <li>Message: {request.message}</li>
        </ul>
         )}
</div>
</div>
    )
}
}
export default Admin