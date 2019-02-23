kurallar.addField('Din, dil, ırk ayrımı yapmak yasaktır.', 'Spam yapmak yasaktır.')
kurallar.addField('Rol alabilmek için iyi bir referansınız olması gerekir.','Herhangi bir discord sunucusunun reklamının yapılması yasaktır.')
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