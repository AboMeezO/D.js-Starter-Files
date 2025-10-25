import { DataTypes } from "sequelize";
import { sequelize } from "../Config/index.js";

/**
 * Represents the Users model in the database.
 *
 * @typedef {Object} User
 * @property {string} id - Unique identifier for the user (Primary Key).
 * @property {string} username - The username of the user. Cannot be null.
 * @property {string} level - The user's level. Defaults to "0".
 */

/**
 * Sequelize model definition for the "users" table.
 *
 * @type {import('sequelize').ModelDefined<User, import('sequelize').Optional<User, never>>}
 */
const Users = sequelize.define("users", {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    defaultValue: "0",
    allowNull: false,
  },
});

export default Users;
