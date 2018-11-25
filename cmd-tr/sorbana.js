const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayir",
    "belki",
    "sonra sor",
    "mumkun degil",
    "asla"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru sor. **True Usage**: !sorbana <question>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sorbana', 
  description: 'Sorbana ile bota istediðini sor.',
  usage: 'sorbana <soru>'
};
