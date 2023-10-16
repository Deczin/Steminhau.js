const Discord = require("discord.js")

module.exports = {
    name: "avatar", // Coloque o nome do comando
    description: "Veja o avatar de um usuário.", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "usuário",
            description: "Mencione um usuário.",
            type: Discord.ApplicationCommandOptionType.User,
            required: true,
        }
    ],


    run: async (client, interaction) => {

        const user = interaction.options.getUser("usuário");
        const userAv = user.displayAvatarURL({size: 512});

        const embed = new Discord.EmbedBuilder()
        .setImage(`${userAv}`)
        .setTitle(`${user.tag}'s avatar`)
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setColor("#FF1493")
        

        interaction.reply({ embeds: [embed]})
        

    }

    

}