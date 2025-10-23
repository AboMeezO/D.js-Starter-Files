# Discord.js Starter Template with CommandKit

A modern Discord.js starter template featuring CommandKit for command handling, database integration, and a clean project structure.

## 🚀 Features

- **CommandKit Integration**: Modern command and event handling system
- **Database Support**: Built-in SQLite and JSON database support using st.db
- **YAML Configuration**: Easy configuration management
- **Event System**: Organized event handling structure
- **Validation System**: Built-in user role validation
- **TypeScript Support**: Full TypeScript definitions for CommandKit
- **Modular Architecture**: Clean separation of concerns

## 📁 Project Structure

```
├── src/
│   ├── Commands/          # Slash commands
│   │   └── Ping.js       # Example ping command
│   ├── Events/           # Discord events
│   │   ├── clientReady/  # Bot ready events
│   │   └── messageCreate/ # Message events
│   ├── Database/         # Database configuration
│   │   ├── Config/       # Database configs
│   │   ├── Data/         # Database files
│   │   └── Models/       # Database models
│   ├── Validations/      # Command validations
│   └── Utils/           # Utility functions
├── Config.yaml          # Bot configuration
├── index.js            # Application entry point
└── package.json        # Dependencies
```

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Commandkit
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure your bot**

   - Open `Config.yaml`
   - Add your Discord bot token:
     ```yaml
     Token: YOUR_BOT_TOKEN_HERE
     ```

4. **Start the bot**
   ```bash
   npm start
   ```

## ⚙️ Configuration

### Bot Token Setup

Edit the `Config.yaml` file and add your Discord bot token:

```yaml
Token: your_discord_bot_token_here
```

### Database Configuration

The template includes two database systems:

- **YAML Config**: For bot configuration (Config.yaml)
- **JSON Database**: For application data (src/Database/Data/Random.json)

## 📝 Creating Commands

Commands are located in `src/Commands/`. Here's the structure:

```javascript
export default {
  data: {
    name: "commandname",
    description: "Command description",
  },
  run: async ({ interaction, client, handler }) => {
    await interaction.reply("Command response!");
  },
  options: {
    botPermissions: [],
    userPermissions: [],
    deleted: false,
    devOnly: false,
    guildOnly: false,
  },
};
```

### Command Options

- `botPermissions`: Required bot permissions
- `userPermissions`: Required user permissions
- `deleted`: Whether the command is deleted
- `devOnly`: Restrict to developers only
- `guildOnly`: Restrict to guilds only

## 🎯 Creating Events

Events are located in `src/Events/`. Create folders for event types and add your event files:

```javascript
export default (client) => {
  console.log(`Bot is ready! Logged in as ${client.user.tag}`);
};
```

## 🔐 Validations

The template includes a user role validation system in `src/Validations/userRoles.js`. Add it to your command options:

```javascript
options: {
  userRoles: ["role_id_1", "role_id_2"], // Required role IDs
}
```

## 🗄️ Database Usage

### YAML Configuration

```javascript
import { YamlConfig } from "./Database/index.js";

// Get configuration
const token = await YamlConfig.get("Token");

// Set configuration
await YamlConfig.set("Key", "Value");
```

### JSON Database

```javascript
import { Random } from "./Database/index.js";

// Set data
await Random.set("key", "value");

// Get data
const data = await Random.get("key");
```

## 📦 Dependencies

- **discord.js**: Discord API wrapper
- **commandkit**: Command and event handler
- **st.db**: Database management
- **sequelize**: SQL ORM
- **sqlite3**: SQLite database driver
- **zod**: Schema validation

## 🚀 Development

### Development Mode

The template includes nodemon for development:

```bash
npm run dev
```

### File Watching

Nodemon is configured to ignore database files during development to prevent unnecessary restarts.

## 📋 Available Scripts

- `npm start`: Start the bot
- `npm run dev`: Start in development mode with auto-restart
- `npm test`: Run tests (placeholder)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created by [@AboTasneem](https://github.com/AboTasneem)

## 🔗 Links

- [Discord.js Documentation](https://discord.js.org/)
- [CommandKit Documentation](https://commandkit.js.org/)
- [st.db Documentation](https://db.shuruhatik.com/)

---

**Note**: Remember to keep your bot token secure and never commit it to version control!
