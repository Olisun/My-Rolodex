import axios from "axios";

export default {

  getContacts: function () {
    return axios.get("/api/contacts");
  },

  getSpecificContact: function (id) {
    return axios.get("/api/contacts/" + id);
  },

  deleteContacts: function (id) {
    return axios.delete("/api/contacts/" + id);
  },

  updateContacts: function (data) {
    return axios.put("/api/contacts", data);
  },

  saveContacts: function (data) {
    return axios.post("/api/contacts", data);
  }
};