import React, {Component} from 'react'
import API from "../../utils/API.js"
import "./admin"


class Admin extends Component {
    state={
        contactRequests: [],
        appointments: []
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

    loadAppointments=()=>{
        API.getAllAppointments()
        .then(res=>{
            this.setState({appointments:res.data}); 
        })
    }
    deleteAppointment=(id)=>{
        console.log(id);
        API.deleteAppointment(id)
        .then(res=>this.loadAppointments())
        .catch(err=>console.log(err));
    };
  
    render(){
    return(
<div className="admin">
<h3>Protected</h3>
<div className="row">
    <div className = "col-md-6">
<button onClick={this.loadRequests}>Get Customer Contact Requests</button>
{this.state.contactRequests.length ? (
    <div>
    {this.state.contactRequests.map((request, key)=>
       <ul key = {request._id}>
       <button onClick={()=>this.deleteContactRequest(request._id)}>Delete</button>
       <li>Name: {request.name}</li>
       <li>Email: {request.email}</li>
       <li>Message: {request.message}</li>
        </ul>
         )}
    </div>
    ):(
    <h3>No Requests</h3>
    )}
</div>
<div className = "col-md-6">
<button onClick={this.loadAppointments}>Get Appointments</button>
{this.state.appointments.length? (
    <div>
    {this.state.appointments.map((appt, key)=>
       <ul key = {appt._id}>
       <button onClick={()=>this.deleteAppointment(appt._id)}>Delete</button>
       <li>Name: {appt.name}</li>
       <li>Email: {appt.email}</li>
       <li>Phone: {appt.phone}</li>
       <li>Date: {appt.date}</li>
       <li>Time: {appt.slot}</li>
        </ul>
         )}
    </div>
    ) : (
        <h3>No Appointments</h3>
    )}

    </div>
</div>
</div>
    )
}
}
export default Admin