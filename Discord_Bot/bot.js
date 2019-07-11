try {
    var Discord = require('discord.js');
    var logger = require('winston');
    var auth = require('./auth/auth.json');
    // var 
} catch (e) {
    console.log(e.stack);
    console.log(process.version);
    console.log("Please run npm install and make sure everything works!");
    process.exit();
}
//configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true,
});
logger.level = 'debug';

//init Discord bot
var bot = new Discord.Client();
bot.login(auth.token)

bot.on('ready', function(evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(message) {
    // Our bot needs to know if it will execute a command.  It will listen to messages that will start with `&`
    if(message.content.substring(0,1) == '&') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
        logger.info(`${message.author} logged ${args[0]}`);
        switch(cmd) {
            //&ping
            case 'ping':
                message.channel.send(`${message.author} used Ping!  It was super effective!`);
                break;
            case 'yoshi':
                message.channel.send('<:fatyoshi:547849635910385704>');
                break;
        }
    } else {
        let msg = message.content.toLowerCase();
        let rand = Math.ceil(Math.random()*100);
        if(/trump|donald|hillary|clinton|zodiac|low\senergy|bernie|sanders|democrat|commie|socialist|libral/.test(msg)){
            logger.info(msg);
            if(rand <= 90) {
                let files = [
                    './images/sadjeb.png',
                    './images/disapointjeb.png'
                ];
                message.channel.send({
                    file: files[Math.floor(Math.random()*files.length)],
                });
            } else if (rand > 90) {
                let files = [
                    './images/praisejeb.png',
                    './images/liljebby.png'
                ];
                message.channel.send({
                    file: files[Math.floor(Math.random()*files.length)],
                });
            } 
        } else if(/jeb|bush|holy|worship|praise|bless|papa|republican/.test(msg)){
                logger.info(msg)
                if(rand <= 80) {
                    let files = [
                        './images/praisejeb.png',
                        './images/raiseglass.png',
                        './images/plsclap.png'
                    ];
                    message.channel.send({
                        file: files[Math.floor(Math.random()*files.length)],
                    });
                } else if (rand > 80 && rand <= 90) {
                    message.channel.send({
                        file: './images/hornjeb.png',
                    });
                } else if (rand > 90) {
                    let files = [
                        './images/poke.png',
                        './images/liljebby.png'
                    ];
                    message.channel.send({
                        file: files[Math.floor(Math.random()*files.length)],
                    });
                } 
        } else if(/clap/.test(msg)){
            logger.info(msg);
            message.channel.send({
                file: './images/plsclap.png',
            });
        }
    }
});
