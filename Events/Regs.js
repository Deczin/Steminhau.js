require('dotenv/config')
const Discord = require("discord.js")
const { ActivityType, Client, IntentsBitField, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType, EmbedBuilder } = require("discord.js");

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

    const roles = {
      menino : '1159260519853719562',
      menina : '1159260415604305980',
      outros : '1161885784043946084',
      mais18 : '1159260818043568209', // Coloque o ID do cargo
      menos18 : '1159260905377370193',
      celular : '1159267094043566160',
      computador : '1159262850192265246', // Coloque o ID do cargo
      console : '1159261415803199529',
      registrado : '1161881457996873789', // Coloque o ID do cargo
    }

  client.on('ready', async (c) => {
    const canal = await client.channels.cache.get("1159274023872647188");


      var image1 = 'https://cdn.discordapp.com/attachments/1158223213915025491/1163276853688148079/5f417da9226b3ba507ef6214de044f12.gif';
      var image2 = 'https://cdn.discordapp.com/attachments/1158223213915025491/1163276853121908736/4acdb61fe62be4bc8b9005f2193cd0d2.gif';
      var image3 = 'https://cdn.discordapp.com/attachments/1158223213915025491/1163276854317305856/c33f98d2e688113ab961f4624f2f7323.gif';
      var image4 = 'https://cdn.discordapp.com/attachments/1158223213915025491/1163276852652167239/1fda68d624fa7c5ff441d45d1f028e03.gif';

      const firstButton = new ButtonBuilder()
      .setLabel('Menino 🎃')
      .setCustomId(roles.menino)
      .setEmoji('🧢')
      .setStyle(ButtonStyle.Primary)

      const secondButton = new ButtonBuilder()
      .setLabel('Menina 🎃')
      .setCustomId(roles.menina)
      .setEmoji('🩰')
      .setStyle(ButtonStyle.Primary)

      const thirdbutton = new ButtonBuilder()
      .setLabel('Outros 🎃')
      .setCustomId(roles.outros)
      .setEmoji('👀')
      .setStyle(ButtonStyle.Primary)


      const embedG = new Discord.EmbedBuilder()
      .setColor('#FF1493')
      .setAuthor({ name: client.user.tag, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
      .setDescription(`🎃 𝑽𝒐𝒄𝒆̂ 𝒔𝒆 𝒊𝒅𝒆𝒏𝒕𝒊𝒇𝒊𝒄𝒂 𝒄𝒐𝒎 𝒒𝒖𝒂𝒍 𝒈𝒆̂𝒏𝒆𝒓𝒐? 🎃\n\n🎃 ︰ᨈ・🧢ㅤㅤ𝑴𝒆𝒏𝒊𝒏𝒐・\n🎃 ︰ᨈ・🩰ㅤㅤ𝑴𝒆𝒏𝒊𝒏𝒂・\n🎃 ︰ᨈ・👀ㅤㅤ𝑶𝒖𝒕𝒓𝒐𝒔・ `)
      .setImage(`${image1}`)

      const buttonG = new ActionRowBuilder().addComponents(firstButton, secondButton, thirdbutton);

    
            const mais18Button = new ButtonBuilder()
            .setLabel('-18 🎃')
            .setCustomId(roles.menos18)
            .setEmoji('🥛')
            .setStyle(ButtonStyle.Primary)
      
            const menos18Button = new ButtonBuilder()
            .setLabel('+18 🎃')
            .setCustomId(roles.mais18)
            .setEmoji('🍺')
            .setStyle(ButtonStyle.Primary)
      
      const buttonI = new ActionRowBuilder().addComponents(mais18Button, menos18Button);

            const embedI = new Discord.EmbedBuilder()
            .setColor('#FF1493')
            .setAuthor({ name: client.user.tag, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription(`🎃 𝙌𝙪𝙖𝙡 𝙨𝙪𝙖 𝙞𝙙𝙖𝙙𝙚? 🎃\n\n🎃 ︰ᨈ・🍺ㅤㅤ+𝟏𝟖 ・\n🎃 ︰ᨈ・🥛ㅤㅤ-𝟏𝟖・ `)
            .setImage(`${image2}`)

            const celular = new ButtonBuilder()
            .setLabel('Celular 🎃')
            .setCustomId(roles.celular)
            .setEmoji('📱')
            .setStyle(ButtonStyle.Primary)
      
            const computador = new ButtonBuilder()
            .setLabel('Computador 🎃')
            .setCustomId(roles.computador)
            .setEmoji('💻')
            .setStyle(ButtonStyle.Primary)

            const console = new ButtonBuilder()
            .setLabel('Console 🎃')
            .setCustomId(roles.console)
            .setEmoji('🎮')
            .setStyle(ButtonStyle.Primary)
      
      const buttonC = new ActionRowBuilder().addComponents(celular, computador, console);

            const embedC = new Discord.EmbedBuilder()
            .setColor('#FF1493')
            .setAuthor({ name: client.user.tag, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription(`🎃 𝑽𝒐𝒄𝒆̂ 𝒔𝒆 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂 𝒑𝒐𝒓 𝒒𝒖𝒂𝒍 𝒂𝒑𝒂𝒓𝒆𝒍𝒉𝒐?🎃 \n\n🎃 ︰ᨈ・📱ㅤㅤ𝑪𝒆𝒍𝒖𝒍𝒂𝒓 ・\n🎃 ︰ᨈ・💻ㅤㅤ𝑪𝒐𝒎𝒑𝒖𝒕𝒂𝒅𝒐𝒓 ・\n🎃 ︰ᨈ・🎮ㅤㅤ𝑪𝒐𝒏𝒔𝒐𝒍𝒆・ `)
            .setImage(`${image3}`)
    
            const embedV = new Discord.EmbedBuilder()
            .setColor("#FF1493")
            .setAuthor({ name: client.user.tag, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription(`🎃 𝘾𝙡𝙞𝙦𝙪𝙚 𝙣𝙤 𝙗𝙤𝙩𝙖̃𝙤 𝙖𝙗𝙖𝙞𝙭𝙤 𝙥𝙖𝙧𝙖 𝙨𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧 𝙣𝙤 𝙨𝙚𝙧𝙫𝙞𝙙𝙤𝙧 🎃`)
            .setImage(`${image4}`)
    
            const buttonV = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId(roles.registrado)
                .setEmoji("✅")
                .setLabel("Registrar 🎃 ")
                .setStyle(Discord.ButtonStyle.Primary)
            );
        
      //canal.send({ embeds: [embedG], components: [buttonG] });
      //canal.send({ embeds: [embedI], components: [buttonI] });
      //canal.send({ embeds: [embedC], components: [buttonC] });
      //canal.send({ embeds: [embedV], components: [buttonV] })
            
           
      
  })

    client.on('interactionCreate', async (interaction) => {
      try {
        if (!interaction.isButton()) return;
        await interaction.deferReply({ ephemeral: true });
    
        const role = interaction.guild.roles.cache.get(interaction.customId);
        if (!role) {
          interaction.editReply({
            content: "Não consegui encontrar o cargo.",
          })
          return;
        }
    
        const hasRole = interaction.member.roles.cache.has(role.id);
    
        if (hasRole) {
          await interaction.member.roles.remove(role);
          await interaction.editReply(`O ${role} foi removido.`);
          return;
        }
    
        await interaction.member.roles.add(role);
        await interaction.editReply(`O ${role} foi adicionado.`);
      } catch (error) {
        console.log(error);
      }
    })

    
client.login(process.env.TOKEN)