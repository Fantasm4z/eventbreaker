/*
    ######################################
    #This selfbot was created by Fantasm4#
    #Doens't change name or credits. Thx #
    ######################################
*/

"use strict";
import Discord from "discord.js";
import color from "colour";
import * as config from "./config.js";
import { Logo } from "./logo.js";

const client = new Discord.Client();

console.log(color.magenta("[+] Loading Event Breaker Beta..."));
console.log(color.blue("[+] JS Version: " + process.version));
console.log(color.blue("[+] Discord Version: " + Discord.version));
console.log(color.yellow("[+] Hooking Callback Events..."));

try {
  client.on("ready", () => {
    console.log(color.yellow(Logo()));
    console.log(`Configuration token: ${config.yourToken}`);
    console.log(`Configuration name: ${config.displayName}`);
  });

  client.on("guildMemberUpdate", (oldMember, newMember) => {
    var nicked = newMember.displayName;

    if (
      newMember.id == client.user.id &&
      newMember.displayName != config.yourName
    ) {
      newMember.setNickname(config.yourName);
      console.log(color.red("[-] Event Break >> " + nicked));
    }
  });
} catch (error) {
  console.error(error);
}

process.on("uncaughtException", err => {
  console.error(err);
  console.log(color.yellow("[-] Script was crashed..!"));
});

client.login(config.yourToken);
