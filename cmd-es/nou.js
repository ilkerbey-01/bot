const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `REVERSE CARD! ACTIVE`,
            image: {
                url: "https://i.imgur.com/3WDcYbV.png"
            }
        }
    })
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['nou','reversecard','trapcard'],
  permLevel: 0 
};

exports.help = {
  name: 'reverse', 
  description: 'NO U!',
  usage: 'reverse'
};
