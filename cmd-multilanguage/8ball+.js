const Discord = require('discord.js');
////////////TR
const cevaplar = [
    "evet",
    "hayýr",
    "belki",
    "olabilir",
    "daha sonra tekrar sor",
    "imkansýz"
];
////////////EN
const answers = [
    "yes",
    "no",
    "maybe",
    "ask me later",
    "no way"
];
///////////ES
const esansv = [
    "yes",
    "no",
    "maybe",
    "ask me later",
    "no way"
];
exports.run = function(client, message, args) {
    var soru = args.join(' ');/////////////////////EN

    var cevap = answers[Math.floor(Math.random() * answers.length)];
if (message.channel.id == '501343970761113602')
    if(!soru) return message.reply('Ask a question. **True Usage**: !8ball <question>')
    else message.channel.send(cevap)

else if (message.channel.id == '501389742890549248')/////////////////TR
    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    if (message.channel.id == '501389742890549248')
        if (!soru) return message.reply('Bir soru belirt. **Doðru Kullaným**: !8ball <soru>')
        else message.channel.send(cevap)

    else if (message.channel.id == '501383096894095392')/////////////////////ES
        var soru = args.join(' ');
        var cevap = esansv[Math.floor(Math.random() * esansv.length)];
        if (!soru) return message.reply('Ask a question. **True Usage**: !8ball <question> **translation required**')
        else message.channel.send(cevap)
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: '8ball', 
  description: 'Magical 8ball will answer your questions',
  usage: '8ball <question>'
};
