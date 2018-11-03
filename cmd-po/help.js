const Discord = require('discord.js');


exports.run = function (client, message) {

    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "**Help**",
            description: "**You can see all commands here.**",
            fields: [{
                name: "!ping",
                value: "Pings bot."
            },
            {
                name: "!8ball",
                value: "Will answer maddest questions!"
            },
            {
                name: "!avatar",
                value: "Shows your profile photo!"
            },
            {
                name: "!doru",
                value: "A horse named as TRU"
            },
            {
                name: "!emoji",
                value: "Tell what you think with emojis!"
            },
            {
                name: "!gayornot",
                value: "You think?"
            },
            {
                name: "!calculate",
                value: "Your math work for this bot!"
            },
            {
                name: "!nou",
                value: "NO YOU!"
            },
            {
                name: "!ror",
                value: "Reverse of Reverse!"
            },
            {
                name: "!servericon",
                value: "Shows server icon!"
            },
            {
                name: "!slots",
                value: "Try your luck!"
            },
            {
                name: "!fidgetspinner",
                value: "Nobody died from 1 flip!"
            },
            {
                name: "!password",
                value: "Get your nuclear codes!"
            },
            {
                name: "!say",
                value: "Talk with bot commands!"
            },
            {
                name: "!headsortail",
                value: "Deal with your friend!"
            },
            {
                name: "!think",
                value: "Think... THIINK...**THIIIIINK...**"
            },
            {
                name: "!rules",
                value: "Shows rules."
            },
            {
                name: "!reboot",
                value: "Resets bot."
            },
            {
                name: "!help",
                value: "Shows these commands."
            },
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "by ilker arıcı"
            }
        }
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'help',
    description: 'help',
    usage: 'help'
};
