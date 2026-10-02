module.exports = {
  name: "ping",
  description: "Check if SUHAN BOT is online",

  async execute({ message }) {
    await message.reply("🏓 Pong!\n🤖 SUHAN BOT is online!");
  }
};
