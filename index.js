require('dotenv/config')
const Discord = require("discord.js")
const mongoose = require("mongoose")
const { ActivityType, Client} = require("discord.js");

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

client.on('interactionCreate', (interaction) => {

  if (interaction.type === Discord.InteractionType.ApplicationCommand) {

    const cmd = client.slashCommands.get(interaction.commandName);

    if (!cmd) return interaction.reply(`Error`);

    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

    cmd.run(client, interaction)

  }
})


client.on('ready', (client) => {

  client.user.setActivity({
    name: 'Steminha',
    type: ActivityType.Streaming,
    URL: 'Steminha',
  })

})

const { joinVoiceChannel } = require('@discordjs/voice');

client.on("ready", () => {
  let canal = client.channels.cache.get("1055680697093853204") // coloque o ID do canal de voz
  if (!canal) return console.log("❌ Não foi possível entrar no canal de voz.")
  if (canal.type !== Discord.ChannelType.GuildVoice) return console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)

  try {

    joinVoiceChannel({
      channelId: canal.id, // ID do canal de voz
      guildId: canal.guild.id, // ID do servidor
      adapterCreator: canal.guild.voiceAdapterCreator,
    })
    console.log(`✅ Entrei no canal de voz [ ${canal.name} ] com sucesso!`)

  } catch(e) {
    console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)
  }

});


client.on("ready", () => {
  console.log(`🔥 Estou online em ${client.user.username}!`)
  
})




client.slashCommands = new Discord.Collection()

require('./handler')(client)




const fs = require('fs');

fs.readdir('./Events', (err, file) => {
  file.forEach(event => {
    require(`./Events/${event}`)
  })
});

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connect to the database.");

  client.login(process.env.TOKEN);
})();