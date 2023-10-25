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

client.on("guildMemberAdd", async (member) => {
    const logs = "1161859114025107467";
    if (!logs) return;
    
    const img = "https://media.discordapp.net/attachments/1059473072157114511/1163984480713842698/3c2ab83ad8ea724fce643fef0e4776de.jpg";
    const regras = await client.channels.cache.get("1055690792687116338");
    const register = await client.channels.cache.get("1159274023872647188");
  
    const embed = new Discord.EmbedBuilder()
    .setColor("#FF1493")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle("👋 Boas Vindas!")
    .setDescription(`Olá ${member}, Espero que você consiga aproveitar o máximo do servidor e que consiga fazer novas amizades por aqui, mas antes de tudo leia as nossas regras em ${regras} e se registre em ${register}, logo em seguida clique aqui para começar suas novas amizades :  <#1055680696586338368>`)
    .setImage(`${img}`)
  
    member.guild.channels.cache.get(logs).send({ embeds: [embed] }) // Caso queira que o usuário não seja mencionado, retire a parte do "content".
  })


client.login(process.env.TOKEN)

  
  