const sequelize = require('../utils/connection');
const request = require('supertest');
const app = require('../app');

const main = async () => {
    try {
        // Acciones a ejecutar antes de los tests

        const user = {
            firstName: "Pawer",
            lastName: "Devia",
            email: "test@gmail.com",
            password: "12345",
            phone: "123456",
        }
        await request(app).post('/users').send(user)


        sequelize.sync();

        process.exit();
    } catch (error) {
        console.log(error);
    }
}

main();