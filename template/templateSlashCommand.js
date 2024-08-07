const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder,WebhookClient, ButtonStyle, PollLayoutType, ActionRowBuilder,StringSelectMenuBuilder,PermissionsBitField, PermissionFlagsBits, ContextMenuCommandBuilder, ApplicationCommandType  } = require('discord.js');
const config = require('../../config.json')
const fs = require('fs')

module.exports = {
   data: new SlashCommandBuilder()
    .setName('')
    .setDescription('')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.),
  async execute(interaction, client) {
const { options, guild, user } = interaction

   }
}
