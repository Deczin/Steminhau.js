const Discord = require("discord.js")

const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } =  require("discord.js");

module.exports = {
  name: "help", // Coloque o nome do comando
  description: "Painel de comandos do bot.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    const embed_painel = new EmbedBuilder()
    .setColor("#FF1493")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos interagindo com o painel abaixo:`);

    const embed_utilidade = new EmbedBuilder()
    .setColor("#FF1493")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **utilidade** abaixo:\n\n 
            **/avatar**  Vê o avatar de um membro.\n 
            **/botinfo** Vê as informações do bot.\n
            **/serverinfo** Vê as informações do servidor atual.\n
            **/userinfo** Vê as informações de um membro.\n`);

    const embed_diversao = new EmbedBuilder()
    .setColor("#FF1493")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **diversão** abaixo:
                    **/hug** Abraça um membro.\n
                    **/kiss** Beija um Membro.\n
                    **/slap** Dá um tapa em um membro.\n`);

    const embed_adm = new EmbedBuilder()
    .setColor("#FF1493")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **administração** abaixo:
                    **/clear** Limpa as mensagens.\n
                    **/dm** Envia uma mensagem no pv do membro.\n
                    **/lock** Trava o canal para não enviar mensagem.\n
                    **/say** Usa o bot para falar algo.\n
                    **/sorteio** Cria um sorteio.\n
                    **/unlock** Destrava o canal.`);

    const painel = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("painel_help")
            .setPlaceholder("Clique aqui!")
            .addOptions(
                {
                    label: "Painel Inicial",
                    //description: "",
                    emoji: "📖",
                    value: "painel"
                },
                {
                    label: "Utilidade",
                    description: "Veja meus comandos de utilidade.",
                    emoji: "✨",
                    value: "utilidade"
                },
                {
                    label: "Diversão",
                    description: "Veja meus comandos de diversão.",
                    emoji: "😅",
                    value: "diversao"
                },
                {
                    label: "Administração",
                    description: "Veja meus comandos de administração.",
                    emoji: "🔨",
                    value: "adm"
                }
            )
    )

    interaction.reply({ embeds: [embed_painel], components: [painel], ephemeral: true }).then( () => {
        interaction.channel.createMessageComponentCollector().on("collect", (c) => {
            let valor = c.values[0];

            if (valor === "painel") {
                c.deferUpdate()
                interaction.editReply({ embeds: [embed_painel] })
            } else if (valor === "utilidade") {
                c.deferUpdate()
                interaction.editReply({ embeds: [embed_utilidade] })
            } else if (valor === "diversao") {
                c.deferUpdate()
                interaction.editReply({ embeds: [embed_diversao] })
            } else if (valor === "adm") {
                c.deferUpdate()
                interaction.editReply({ embeds: [embed_adm] })
            }
        })
    })


    
  }
}