const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client,message) => {

  
  const m = await message.channel.send("PONG!?");
        m.edit(`Pong! Bot Gecikmesi \`${m.createdTimestamp - message.createdTimestamp}ms\` `);

  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pong'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun gecikme süresini gösterir.',
  usage: 'ping'
};
 
