require('dotenv').config();
const { Client, IntentsBitField, Integration } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready',  (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
});

client.on('messageCreate', (Message) => {
if (Message.author.bot) {
    return;
}

if (Message.content === 'hello') {
  Message.reply('hello');
}
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    console.log(interaction.commandName);
});

client.login(process.env.TOKEN);
