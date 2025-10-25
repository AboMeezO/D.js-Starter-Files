import { Client, GatewayIntentBits } from "discord.js";
import { CommandKit } from "commandkit";
import path from "path";
import { sequelize, YamlConfig } from "./Database/index.js";
export default class app {
  constructor({ client, token }) {
    if (client) this.client = client;
    if (token) this.token = token;
  }

  async init() {
    if (!this.client) {
      const client = new Client({ intents: Object.values(GatewayIntentBits) });
      this.client = client;
    }

    if (!this.token) {
      this.token = await YamlConfig.get("Token");
    }
    this.client.token = this.token;
    new CommandKit({
      client: this.client,
      commandsPath: path.resolve("src/Commands"),
      eventsPath: path.resolve("src/Events"),
      validationsPath: path.resolve("src/Validations"),
    });
  }
  async Start() {
    await this.initDatabase();
    await this.init();
    this.client.login();
  }
  async initDatabase() {
    await sequelize.sync();
  }
}
