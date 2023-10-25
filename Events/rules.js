require('dotenv/config')
const Discord = require("discord.js")

const { EmbedBuilder } =  require("discord.js");

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


client.on('ready', async (c) => {
    const canal = await client.channels.cache.get("1055690792687116338");

    const img = "https://i.pinimg.com/originals/7e/12/b6/7e12b6b131b79301837c085b754f76ca.png";
    const embed = new EmbedBuilder()
    .setColor("#FF1493")
    .setTitle("﹒★☆ Regras <3")
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`\n
    \`1-\` **Não é permitido desrespeitar os membros ou Staff's.**\n
    \`2-\` **É estritamente proibido nicknames e avatares ofensivos e/ou conteúdo sexual explícito.**\n
    \`3-\` **Não é permitido divulgação de outras comunidades de forma direta ou indireta.**\n
    \`4-\` **Não perturbar os jogadores que usufruem de salas públicas.**\n
    \`5-\` **Não é permitido o uso de programas para adulterar a voz.**\n
    \`6-\` **Não é permitido gravar a voz doutros utilizadores sem a permissão dos mesmos ou a permissão da Staff.**\n
    \`7-\` **As salas de suporte devem ser utilizadas de forma consciente e apenas quando necessárias, caso contrário teremos de punir o jogador que usufrua da mesma de forma incorreta.**\n
    \`8-\` **Proibido Racismo, Xenofobia, Pedofilia e Homofobia no servidor.**\n`)
    .setImage(`${img}`);

   //canal.send({ embeds: [embed] });


})

client.login(process.env.TOKEN)