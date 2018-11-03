const Discord = require('discord.js');


exports.run = function (client, message) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
        title: "**Zasady**",
        description: "**W tym serwerze musisz wpierw przeczytać zasady i nie łamać ich. Administratorzy myślą ze przeczytać zasady.**",
      fields: [{
          name: "Dyskryminacja religii, rasy i języka jest niedozwolona.",
          value: "**Musisz gadac w języku którym ty wybrałeś.**"
        },
        {
            name: "Tylko wybrane osoby mogą uzyskać określone role.",
            value: "**Reklamy nie są dozwolone.**"
        },
        {
            name: "Przeklinanie nie jest dozwolone w nadmiernych ilościach.",
            value: "**Bycie nieuprzejmy dla ludzi nie jest dozwolone.**"
        },
        {
            name: "Proszę nie rozmawiać o polityce na tym serwerze.",
            value: "**Jeśli pozostaniesz nieaktywny i offline przez dłuższy czas, zostaniesz wyrzucony z serwera.**"
        },
        {
            name: "**Spam jest niedozwolona.**",
            value: "Kliknij 'Akceptuj'(:white_check_mark:), jeśli zgadzasz się z tymi zasadami."
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
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
    name: 'Zasady', 
    description: 'Zasady',
    usage: 'Zasady'
};