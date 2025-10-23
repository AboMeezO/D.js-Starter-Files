export default {
  /**
   * @type {import('commandkit').CommandData}
   */
  data: {
    name: "ping",
    description: "Poing!",
  },
  /**
   *
   * @type {import('commandkit').SlashCommandProps}
   */
  run: async ({ interaction, client, handler }) => {
    await interaction.reply("Pong!");
  },
  /**
   * @type {import('commandkit').CommandOptions}
   */
  options: {
    botPermissions: [],
    userPermissions: [],
    deleted: false,
    devOnly: false,
    guildOnly: false,
  },
};
