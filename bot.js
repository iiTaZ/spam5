const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
var prefix = "s";

client.on('ready', () => {
   console.log(`----------------`);
   console.log(` by : iiTaZ `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});



client.on('mmessage', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000; x++) {
        message.channel.send(`**HAHAHAHAHAHA**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('essage', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!s') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000; x++) {
        message.channel.send(`**HAHAHAHAHAHA**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('essage', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!s') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000; x++) {
        message.channel.send(`**HAHAHAHAHAHA**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
if (command == "s") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
if (command == "s") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
if (command == "s") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });



client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
