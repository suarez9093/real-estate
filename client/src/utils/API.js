import axios from "axios";

export default {

    getAppointment: function() {
        return axios.get("/api/appointment");
      },

    saveAppointment: function(appointmentData) {
        return axios.post("/api/appointment" , appointmentData)
        
    }
}

  // lock the house
//   lockHouse: function() {
//     return axios.put("/api/lockitron/lock");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   },

//   updateBook: function(id, bookData) {
//       return axios.put(`/api/books/${id}`, bookData);
//   }
// };

