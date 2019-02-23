const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const rules = require('discord-embed-maker');
const kurallar = require('discord-embed-maker');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./cmd-multilanguage/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./cmd-multilanguage/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./cmd-multilanguage/${command}`)];
            let cmd = require(`./cmd-multilanguage/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./cmd-multilanguage/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./cmd-multilanguage/${command}`)];
            let cmd = require(`./cmd-multilanguage/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./cmd-po/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./cmd-po/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./cmd-po/${command}`)];
            let cmd = require(`./cmd-po/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./cmd-po/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./cmd-po/${command}`)];
            let cmd = require(`./cmd-po/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./cmd-tr/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./cmd-tr/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd-tr/${command}`)];
      let cmd = require(`./cmd-tr/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./cmd-tr/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd-tr/${command}`)];
      let cmd = require(`./cmd-tr/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
///////////////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./cmd-en/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./cmd-en/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd-en/${command}`)];
      let cmd = require(`./cmd-en/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./cmd-en/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd-en/${command}`)];
      let cmd = require(`./cmd-en/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
//////////////////////
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^'); 
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'hi') {
        if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
            msg.author.sendMessage('Hello Welcome! ^^');
        } else {
            msg.reply('Hello Welcome! ^^');
        }
    }
});


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.login(ayarlar.token);
/////////////// TR KURALLAR ///////////////
{
    kurallar.addField('Din, dil, ırk ayrımı yapmak yasaktır.', 'Spam yapmak yasaktır.')
    kurallar.addField('Rol alabilmek için iyi bir referansınız olması gerekir.', 'Herhangi bir discord sunucusunun reklamının yapılması yasaktır.')
    kurallar.addField('Küfür etmek yasaktır.', 'Discord içerisinde ve diğer etkinliklerde tüm kurallar geçerlidir ve discord sunucusuna katılan herkesin kuralları okuduğu varsayılarak muamele yapılacaktır.')
    kurallar.addField('Sunucudaki vatandaşlara aşağılayıcı, küçük düşürücü şeyler söylemek yasaktır.', 'Siyaset yapmak yasaktır.')
    kurallar.addField('Uzun süreli pasiflik atılmanıza sebep olabilir.', 'Kurallara uymayan kişiler sunucudan uzaklaştırılacaktır.')
    kurallar.setFooter('Made by ilkerbey')
    kurallar.setAuthor(`Kurallar`);
    kurallar.setColor(0x88f7f7);
    client.on('message', (message) => {
        if (message.content === '!kurallar') {
            message.channel.send({ embed: kurallar });
        }
    })
}
//////////////////////////////

/////////////// EN RULES ///////////////
{
    rules.addField('In this server, you must read the rules and follow them. Admins assume you read them', 'You must use the language you speak natively.')
    rules.addField('Religion, race, and language discrimination isnt allowed.', 'Spam isnt alloweed.')
    rules.addField('Only people who are friends get certain roles.', 'Advertising isnt allowed.')
    rules.addField('Swearing isnt allowed in excessive amounts.', 'Any way of scam isnt alloweed')
    rules.addField('Being rude to peoples isnt alloweed.', 'Please do not discuss politics in this server.')
    rules.addField('If you remain inactive and offline for extended periods of time, you will be kicked from the server.', 'Click accept button if you agree these rules.')
    rules.setFooter('Made by ilkerbey')
    rules.setAuthor('Rules');
    rules.setColor(0x88f7f7);
    client.on('message', (message) => {
        if (message.content === '!rules') {
            message.channel.send({ embed: rules });
        }
    })
}