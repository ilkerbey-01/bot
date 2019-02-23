const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Restarting the bot").then(msg => {
        console.log("[BOT]Restarting");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Restarts bot',
  usage: 'reboot'
};
