import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./users/entities/users.entity"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 2856,
    username: "root",
    password: "Ebudola__2586",
    database: "budgetApp",
    entities: [User],
    synchronize: true,
    logging: true,
})
// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))