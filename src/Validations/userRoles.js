import {
  ContainerBuilder,
  MessageFlags,
  SeparatorBuilder,
  SeparatorSpacingSize,
  TextDisplayBuilder,
} from "discord.js";
/**
 *
 * @param {import('commandkit').ValidationFunctionProps} param0
 * @returns
 */
export default function ({ interaction, commandObj }) {
  const requiredRoles = new Set(commandObj.options?.userRoles);
  if (!requiredRoles.size) return false;
  const hasRequiredRole = interaction.member.roles.cache.some((role) =>
    requiredRoles.has(role.id)
  );
  if (!hasRequiredRole) {
    interaction.reply({
      flags: [MessageFlags.Ephemeral, MessageFlags.IsComponentsV2],
      components: [
        new ContainerBuilder()
          .addTextDisplayComponents(
            new TextDisplayBuilder().setContent(
              `## ⛔ **Insufficient Permissions**`
            )
          )
          .addSeparatorComponents(
            new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large)
          )
          .addTextDisplayComponents(
            new TextDisplayBuilder().setContent(
              `You need the following roles:\n\n${[...requiredRoles]
                .map((role) => `• <@&${role}>`)
                .join("\n")}`
            )
          ),
      ],
    });
    return true;
  }
  return false;
}
