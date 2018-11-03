const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} turned a fidget spinner!`,
            image: {
                url: "https://i.imgur.com/KJJxVi4.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, your fidget spinner  turned ${bitiş.toFixed(2)} seconds.`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['fs'],
  permLevel: 0 
};

exports.help = {
  name: 'fidgetspinner', 
  description: 'Play with a fidget spinner.',
  usage: 'fidgetspinner'
};
