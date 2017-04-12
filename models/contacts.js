const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema =new Schema({
  name: String,
  email: String,
  number: String
});

const Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;
