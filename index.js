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
    .setDetails(`≡;- ꒰ °ᴄʟᴏʀɪɴᴅᴇ ꒱ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1100708631311286342/1253255499621597195/544a2751c85f75739ce8fc7b66393951.png?ex=667530a3&is=6673df23&hm=df029ff8e7d5ea023d6ae879b0ed299eea4c94ca8fb952dd4c71d38bff186f05&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('*:･ﾟ✧*:･ﾟ ᴋᴇʀᴇᴍᴍ 💓') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1100708631311286342/1253254857666854912/18ba6345caed40be758cfbc2f89d24ff.png?ex=6675300a&is=6673de8a&hm=37a29e774a1002f40f5cef016ea7cbe26dbedbfac2b8145979f959c97b18875c&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText(' ') //Text when you hover the Small image

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
