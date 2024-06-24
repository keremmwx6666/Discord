const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=zqLMEulWcbQ') //Must be a youtube video link 
    .setState('✧˚ · . ᴀᴄᴛɪᴠᴇ 𝟸𝟺/𝟽')
    .setName(' ')
    .setDetails(`≡;- ꒰ °ғᴜʀɪɴᴀ ꒱ )
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1100708631311286342/1253255499621597195/544a2751c85f75739ce8fc7b66393951.png?ex=6679cde3&is=66787c63&hm=d1aba233b663877200eb15027fd6029e740bea0061d107828a97d39b86edb3d5&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('*:･ﾟ✧*:･ﾟ ᴋᴇʀᴇᴍᴍ 💓') //Text when you hover the Large image
    .setAssetsSmallImage('') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('') //Text when you hover the Small image

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
