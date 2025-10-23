export default async (message, client) => {
  if (message.content !== "hi" || message.author.bot) return;
  await message.reply("hey");
};
