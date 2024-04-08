require('dotenv').config();
const mongoose = require('mongoose');
const { Seeder } = require('@superseed/superseed');
const User = require('./models/User');
const { UserDataSource, userGenerator } = require('./data/seeds/userSeed');

mongoose.connect('mongodb://localhost:27017/db')
    .catch(err => console.error('Could not connect to MongoDB...', err));

(async () => {
    const seeder = new Seeder();

    const userSource = new UserDataSource(User);
    seeder.addJob('user', userGenerator, userSource, { count: 10 });

    await seeder.seed();
    await mongoose.connection.close();
})();
