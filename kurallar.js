kurallar.addField('Din, dil, �rk ayr�m� yapmak yasakt�r.', 'Spam yapmak yasakt�r.')
kurallar.addField('Rol alabilmek i�in iyi bir referans�n�z olmas� gerekir.','Herhangi bir discord sunucusunun reklam�n�n yap�lmas� yasakt�r.')
kurallar.addField('K�f�r etmek yasakt�r.', 'Discord i�erisinde ve di�er etkinliklerde t�m kurallar ge�erlidir ve discord sunucusuna kat�lan herkesin kurallar� okudu�u varsay�larak muamele yap�lacakt�r.')
kurallar.addField('Sunucudaki vatanda�lara a�a��lay�c�, k���k d���r�c� �eyler s�ylemek yasakt�r.', 'Siyaset yapmak yasakt�r.')
kurallar.addField('Uzun s�reli pasiflik at�lman�za sebep olabilir.', 'Kurallara uymayan ki�iler sunucudan uzakla�t�r�lacakt�r.')
kurallar.setFooter('Made by ilkerbey')
kurallar.setAuthor(`Kurallar`);
kurallar.setColor(0x88f7f7);
client.on('message', (message) => {
    if (message.content === '!kurallar') {
        message.channel.send({ embed: kurallar });
    }
})