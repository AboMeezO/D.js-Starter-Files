import { Sequelize } from "sequelize";
import path from "path";
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve("./src/Database/Data/Database.sqlite"),
  logging: false,
});

export default sequelize;
