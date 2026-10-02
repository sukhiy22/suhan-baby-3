const fs = require("fs");
const path = require("path");
const config = require("./config.json");

const commands = new Map();

// Load commands
const commandFiles = fs
  .readdirSync(__dirname)
  .filter(file => file.endsWith(".js") && file !== "index.js");

for (const file of commandFiles) {
  const command = require(path.join(__dirname, file));

  if (command.name) {
    commands.set(command.name, command);
  }
}

console.log("🤖 " + config.botName);
console.log("📦 Version: " + config.version);
console.log("👤 Author: " + config.author);
console.log("⚡ Prefix: " + config.prefix);
console.log("✅ Commands loaded: " + commands.size);
