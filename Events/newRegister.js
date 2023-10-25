require('dotenv/config')
const Discord = require("discord.js")
const { ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType, EmbedBuilder } = require("discord.js");

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
    const canal = await client.channels.cache.get("1159274023872647188");
    const imgRule = "https://media.discordapp.net/attachments/1158223213915025491/1164700571337502801/cd7f73c89546abd082039e204cae4660.jpg?ex=65442aef&is=6531b5ef&hm=fd29667ffe44371a139566140c0e603d2ac033def80ed33af2ea97187e6778a6&="

        const cargos = { // Coloque o ID do cargo em cada variável
            she: '1159260415604305980',
            he: '1159260519853719562',
            others: '1163999715432616026',
            id: '1159260905377370193',
            idd: '1159260818043568209',
            iddd: '1163996315139711018',
            phone: '1159267094043566160',
            pc: '1159262850192265246',
            consol: '1159261415803199529', 
        }

        const embedId = new EmbedBuilder()
        .setColor('#FF1493')
        .setDescription(`\`✦﹒\`\`✦﹒\` **Que tal se registrar para nós te conhecermos melhor??** \`✦﹒\`\`✦﹒\`\n\n
        <a:blue_butter:1165304102046142554>   <@&1159260905377370193>\n 
        <a:purlpe_butter:1165304096245436426>   <@&1159260818043568209>\n
        <a:black_butter:1165304099907055717>   <@&1163996315139711018>\n`)

        const embedGen = new  EmbedBuilder()
        .setColor('#FF1493')
        .setDescription(`<a:cora:1165127230045835346>   <@&1159260415604305980>\n
        <a:purplecora:1165127560183676988>   <@&1159260519853719562>\n
        <a:king:1165127564877123584>   <@&1163999715432616026>\n`)

        const embedApp = new EmbedBuilder()
        .setColor('#FF1493')
        .setDescription(`<:1278hkphone:1164266978794557563> <@&1159267094043566160>\n
        <:3315pinkmacbook:1164266991964655736> <@&1159262850192265246>\n
        <:6060gamecontoller:1164266986906337371> <@&1159261415803199529>\n`)

            const rid1314 = new ButtonBuilder()
                .setCustomId(cargos.id)
                .setEmoji("<a:blue_butter:1165304102046142554>")
                .setLabel("▹﹒13-14﹒")
                .setStyle(ButtonStyle.Primary)
            
            const rid1516 = new ButtonBuilder()
              .setCustomId(cargos.idd)
              .setEmoji("<a:purlpe_butter:1165304096245436426>")
              .setLabel("▹﹒15-16﹒")
              .setStyle(ButtonStyle.Primary)
          
          const rid1718 = new ButtonBuilder()
              .setCustomId(cargos.iddd)
              .setEmoji("<a:black_butter:1165304099907055717>")
              .setLabel("▹﹒17-18﹒")
              .setStyle(ButtonStyle.Primary)
          
          const rshe = new ButtonBuilder()
              .setCustomId(cargos.she)
              .setEmoji("<a:Pink_CoraGiraCDL:799318891498438716>")
              .setLabel("▹﹒She﹒")
              .setStyle(ButtonStyle.Primary)

          const rhe = new ButtonBuilder()
              .setCustomId(cargos.he)
              .setEmoji("<a:Purple_CoraPixelCDL:799318717460774932>")
              .setLabel("▹﹒He﹒")
              .setStyle(ButtonStyle.Primary)

          const roth = new ButtonBuilder()
              .setCustomId(cargos.others)
              .setEmoji("<a:a174:1126730524384301156>")
              .setLabel("▹﹒Others﹒")
              .setStyle(ButtonStyle.Primary)

          const rphone = new ButtonBuilder()
              .setCustomId(cargos.phone)
              .setEmoji("<:1278hkphone:1164266978794557563>")
              .setLabel("▹﹒Phone﹒")
              .setStyle(ButtonStyle.Primary)

          const rpc = new ButtonBuilder()
              .setCustomId(cargos.pc)
              .setEmoji("<:3315pinkmacbook:1164266991964655736>")
              .setLabel("▹﹒Computer﹒")
              .setStyle(ButtonStyle.Primary)

          const rconsol = new ButtonBuilder()
              .setCustomId(cargos.consol)
              .setEmoji("<:6060gamecontoller:1164266986906337371>")
              .setLabel("▹﹒Console﹒")
              .setStyle(ButtonStyle.Primary)

          const rows1 = new ActionRowBuilder().addComponents(rid1314, rid1516, rid1718);
          const rows2 = new ActionRowBuilder().addComponents(rshe, rhe, roth);
          const rows3 = new ActionRowBuilder().addComponents(rphone, rpc, rconsol);

            //canal.send({ embeds: [embedId], components: [rows1] });
            //canal.send({ content: "ㅤㅤ" });
            //canal.send({ embeds: [embedGen], components: [rows2] });
            //canal.send({ content: "ㅤㅤ" });
            //canal.send({ embeds: [embedApp], components: [rows3] });
            //canal.send({ content: "ㅤㅤ" });
            //canal.send({ content: `${imgRule}`});
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