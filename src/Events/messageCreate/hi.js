/**
 * @param {import('discord.js').Message} message
 * @param {import('discord.js').Client} client
 */
export default async (message, client) => {
  if (message.content !== "hi" || message.author.bot) return;
  await message.reply("hey");
};
