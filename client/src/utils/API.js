import axios from "axios";

export default {
    getAppoitnemt: function() {
        return axios.get("/api/appointment");
      },

    saveAppointment: function(appointmentData) {
        return axios.post("/api/appointment" , appointmentData)
        
    }
}