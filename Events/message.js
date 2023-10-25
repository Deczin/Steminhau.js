require('dotenv/config')
const Discord = require('discord.js');

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


client.on('messageCreate', async (message) => {
  console.log('Mensagem recebida:', message.content);
  if (message.author.bot) return;

  // Verifica o conteúdo da mensagem
  if (message.content === 'cu') {

    const response = await message.reply('kuceta👍');
    setTimeout(() => {
      response.delete();
    },10000)
  }
});

client.login(process.env.TOKEN);