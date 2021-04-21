const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("^help | Version 0.8 | Made by BrØҜen |", {type: "LISTENING"});
}