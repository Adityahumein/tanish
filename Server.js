
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json()); 


const mongoURI = 'mongodb+srv://bitterlipshai:4LaG4tx8VdeeKCsB@devconnector.x5v62.mongodb.net/?retryWrites=true&w=majority&appName=devconnector';


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log(err));


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  telephone: String,
  company_name: String,
  company_niche: String,
  company_website: String,
});


const Contact = mongoose.model('Contact', contactSchema);


app.post('/submit-form', (req, res) => {
  const newContact = new Contact(req.body);
  newContact.save()
    .then(() => res.status(200).json({ message: 'Data saved successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
