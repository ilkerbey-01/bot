const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents

    exports.run = function(client, message, args) {
        var soru = args.join(' ');
        if (message.channel.id == 501343970761113602)    
        if(!soru) return message.reply('İnsult operation. **TRUE USAGE**: !calculate <operation>')
        else { let cevap;
            try {
             cevap = math.eval(soru)
            } catch(err) {
                message.channel.send('Unable to calculate: **' + err)
            }

            const embed = new Discord.RichEmbed()
            .addField('Question', soru)
            .addField('Answer', cevap)
    
            message.channel.send(embed)
     }

else message.channel.send('Please use this command in english channel.')
};  
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'calculate', 
  description: 'Calculates given operation.',
  usage: 'calculate <operation>'
};
