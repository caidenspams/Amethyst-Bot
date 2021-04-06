const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
const channel = message.mentions.channels.first();

await bot.giveaways.startGiveaway({
            prize: 'Discord Nitro Classic',
            channelId: channel.id,
            guildId: message.guild.id,
            duration: 30000, 
            winners: 1,
            hostedBy: message.author.id
        });
}

module.exports.config = {
    name: "gcreate",
    aliases: []
}