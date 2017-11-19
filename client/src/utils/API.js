import axios from "axios";

export default {
    // save appointment
    saveAppointment: function(appointment) {
        console.log(appointment);
        return axios.post("/api/appointments", appointment);
    },
    getAllAppointments: function() {
        return axios.get("/api/appointments");
    },
    // Gets the appointment with the given id
    getAppointment: function(id) {
        return axios.get("/api/appointments/" + id);
    },
    //gets all appointments for therapist
    findByTherapist: function(therapist) {
        return axios.post("/api/appointments/therapist", therapist);
    },
    // Deletes the apointment with the given id
    deleteAppointment: function(id) {
        return axios.delete("/api/appointments/" + id);
    },
    // Saves a contactRequest to the database
    saveRequest: function(request) {
        return axios.post("/api/contactRequest", request);
    },
    //Gets a contact Request from the database by id
    getRequest: function(id) {
        return axios.get("/api/contactRequest/" + id);
    },
    //get all requests from the database
    getAllRequests: function() {
        return axios.get("api/contactRequest");
    },
    //delete a request from the database by id
    deleteRequest: function(id) {
        console.log("api/contactRequest/" + id);
        return axios.delete("api/contactRequest/" + id);
    },
    createPayment: function(payment) {
        console.log(payment);
        return axios.post("api/payment/processing", payment);
    }
};