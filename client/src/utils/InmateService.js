import axios from "axios";

export default {
    // Gets all inmates
    getInmates: function () {
        return axios.get("/api/inmates");
    },
    // Gets the inmate with the given id
    getInmate: function (id) {
        return axios.get("/api/inmates/" + id);
    },
    // Deletes the inmate with the given id
    deleteInmate: function (id) {
        return axios.delete("/api/inmates/" + id);
    },
    // Saves a inmate to the database
    saveInmate: function (inmateData) {
        return axios.post("/api/inmates", inmateData);
    },

    updateInmate: function (id, inmateData) {
        return axios.put(`/api/inmates/${id}`, inmateData);
    },

    pinched: function(id) {
        return axios.post(`/api/inmates/${id}/pinched`);
    }
};
