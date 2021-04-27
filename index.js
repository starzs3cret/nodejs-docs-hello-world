

// start discord
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json')


client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);


//listen message
client.on('message', message => {
    console.log(message.content)
    myFun(message)
});

function myFun(message) {
    // client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    // the rest of your code
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    else if(command==="emilia"){
        message.channel.send(`Hi ${message.author}! Kenapa kamu menanyakan ${args}?`)
    }
    //message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}