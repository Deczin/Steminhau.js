require('dotenv/config')
const Discord = require("discord.js")

const client = new Discord.Client({
  intents: [1, 512, 32768, 2, 128,
  Discord.IntentsBitField.Flags.DirectMessages,
  Discord.IntentsBitField.Flags.GuildInvites,
  Discord.IntentsBitField.Flags.GuildMembers,
  Discord.IntentsBitField.Flags.GuildPresences,
  Discord.IntentsBitField.Flags.Guilds,
  Discord.IntentsBitField.Flags.MessageContent,
  Discord.IntentsBitField.Flags.Guilds,
  Discord.IntentsBitField.Flags.GuildMessageReactions,
  Discord.IntentsBitField.Flags.GuildEmojisAndStickers
],
  partials: [
    Discord.Partials.User,
    Discord.Partials.Message,
    Discord.Partials.Reaction,
    Discord.Partials.Channel,
    Discord.Partials.GuildMember
  ]
});

module.exports = client

client.on("guildMemberAdd", (member) => {
    let canal_logs = "1161859114025107467";
    if (!canal_logs) return;
  
    const embed = new Discord.EmbedBuilder()
    .setColor("Green")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle("👋 Boas Vindas!")
    .setDescription(`> ${member}! entrou..\n`);
  
    member.guild.channels.cache.get(canal_logs).send({ content: `${member}! entrou..` }) // Caso queira que o usuário não seja mencionado, retire a parte do "content".
  })


client.login(process.env.TOKEN)

  
  