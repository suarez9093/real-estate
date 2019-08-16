import axios from "axios";

export default {
  // Gets all books
  search: function() {
    return axios.get("/api/listings");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/listings/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/listings/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/listings", bookData);
  },

  updateBook: function(id, bookData) {
      return axios.put(`/api/listings/${id}`, bookData);
  }
};
