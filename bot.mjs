/*
    This selfbot was created by Fantasm4
    Doens't change name or credits. Tnx
*/

'use strict';
import Discord from 'discord.js';
import cor from './node_modules/colour/colour.js';
import * as config from './config.mjs';

const client = new Discord.Client( );

console.log( cor.magenta( 'Loading Event Breaker Beta...' ) );
console.log( cor.blue( 'JS Version: ' + process.version ) );
console.log( cor.blue( 'Discord Version: ' + Discord.version ) );
console.log( cor.yellow( 'Hooking Callback Events...' ) );

try {

  client.on( 'ready', function( ) {
    console.log( cor.green( 
      `######################
        Ready!
######################` ) );
  });
  
  client.on( 'guildMemberUpdate', function( oldMember, newMember ) {
    
    var nicked = newMember.displayName;

    if ( newMember.id == client.user.id && newMember.displayName != config.yourName ) {
      newMember.setNickname( '' );
      console.log( cor.red( '[-] Event Break >> ' + nicked ) );
    }

  });
/* COMING SOON
  client.on( 'message', async function( msg ) {
    const prefix = config.prefix;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if ( msg.author.id === client.user.id && command === "flood" ){
      let user = client.fetchUser("").then(user => {
				user.send("dlç https://cdn.discordapp.com/attachments/389125170578849794/389131605828173825/JPEG_20171031_212702.jpg");
      });
      msg.delete();
    }

  })
*/
} catch ( error ) {
  console.error( error );
}

process.on( 'uncaughtException', function ( err ) {
  console.error( err );
  console.log(cor.yellow( 'Script was crashed..!' ) );
});

client.login( config.yourToken );