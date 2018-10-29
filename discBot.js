const Discord = require('discord.js');

const client = new Discord.Client();

const newUsers = new Discord.Collection();

 

 

client.on('ready', () => {

    console.log('ready to work, boss');

});

 

client.on('message', message=>{

    if(message.content.match(/!bot/i)){

                message.channel.send("");
				// !bot will send a message to chat with the commands

    }

});

 

 
//type a message and it'll enter the voice channel and play a sound clip
client.on('message', message =>{

    if(message.content.match()){
		//picks up a word or phrase within chat messages

                const channel = message.member.voiceChannel;
				
				if(!channel){
					return message.channel.send('');
				}
				
				//sends a message to the chat telling the user to get in a voice channel
				//otherwise it crashes!
				
                channel.join()

                    .then(connection => {

                                const dispatcher = connection.playFile('');
								//stick the mp3 path here, need to have the dispatcher pack installed

                                dispatcher.on("end", end => {channel.leave()});


                                })

});


//encounters some errors when a user joins another channel and immediately types a commands
//will need to find fix.

 
//Currently broken!  Will fix at Christmas!
//The goal is to say hello and goodbye when people enter the channel.  
/*

client.on('voiceStateUpdate', (oldMember, newMember) => {

    let newUserChannel = newMember.voiceChannel;

    let oldUserChannel = oldMember.voiceChannel;

    var guild = client.guilds.get('guildid');

    const defaultChannel =  getDefaultChannel = async (guild) => {

                if(guild.channels.has(guild.id))

                    return guild.channels.get(guild.id)}

    if(oldUserChannel === undefined && newUserChannel !== undefined) {

                defaultChannel.send('');

    }

    else if(newUserChannel === undefined){

                defaultChannel.send('');

      }

   

});

*/

 

client.login('');

 

