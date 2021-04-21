module.exports.run = async (bot, message, args) => {
    return message.channel.send("^")
}

module.exports.config = {
    name: "prefix",
    description: "",
    usage: "^prefix",
    accessableby: "Members",
    aliases: ['p']
}