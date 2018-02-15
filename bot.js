const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const data = require("./data.json")
const bot = new Discord.Client({disableEveryone: true});
const prefix = botSettings.prefix;
console.log(prefix)
bot.on("ready", () => {
  //bot loop start
  //init
  console.log(`${bot.user.username} is ready!`);

  bot.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
    .then(link => {
      console.log(`Generated bot invite link: ${link}`);
    });
  //end init

//end of bot loop
});


bot.on("message", message => {
  //async message handler
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let alts = []
  for(var i in data)
      alts.push([i, data [i]]);

  let messageArgs = message.content.split(" ");
  let command = messageArgs[0];
  let args = messageArgs.slice(1);

  if(!command.startsWith(prefix)) return;

  if(command === `${prefix}getalt`) {
    var givealt = alts[Math.floor(Math.random() * alts.length)];
    d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(`AltBot used by ${message.author}`) //comment this to remove debug!
    const embed = new Discord.RichEmbed()
    embed.setColor(0x42f4f1)
    embed.setDescription(`${givealt}`)
    message.author.send(embed)
    //message.channel.send(`Your alt has been sent to your DM's ${message.author}`)
    message.delete(5000)
    


  }
});
bot.login(botSettings.token);