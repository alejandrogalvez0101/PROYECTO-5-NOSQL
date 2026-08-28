const mongoose = require('mongoose');

const urlDb = 'mongodb://localhost:27017/proyecto-basico-express-movies';

const connect = async () => {
  try {
    await mongoose.connect(urlDb);
    console.log(`Conected with db succesfully`);
  } catch (error) {
    console.log('Error to connect with db');
  }
};

module.exports = {
  connect,
};