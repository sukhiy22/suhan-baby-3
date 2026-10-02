module.exports = {
  config: {
    name: "ping",
    version: "1.0.0",
    author: "SUHAN AHMED",
    countDown: 5,
    role: 0,
    shortDescription: "Check bot response",
    longDescription: "Check whether the bot is online.",
    category: "system"
  },

  onStart: async function ({ message }) {
    return message.reply("🏓 Pong!\n🤖 Bot is online!");
  }
};
