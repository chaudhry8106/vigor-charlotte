import React, {Component} from 'react'
import API from "../../utils/API.js"


class Admin extends Component {
    state={
        contactRequests: []
    }
    
    //get all customer contact requests
    loadRequests=()=>{
        API.getAllRequests()
        .then(res=>{
            this.setState({contactRequests:res.data}); 
        })
    }
    deleteContactRequest=(id)=>{
        console.log(id);
        API.deleteRequest(id)
        .then(res=>this.loadRequests())
        .catch(err=>console.log(err));
    };
  
    render(){
    return(
<div>
<h3>Protected</h3>
<button onClick={this.loadRequests}>Get Customer Contact Requests</button>
<div>{this.state.contactRequests.map((request, key)=>
       <ul key = {request._id}>
       <button onClick={()=>this.deleteContactRequest(request._id)}>Delete</button>
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