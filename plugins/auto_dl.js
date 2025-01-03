const {
	Sparky
} = require("../lib/plugins.js");
const fetch = require('node-fetch');
const axios = require('axios');
const {
    API
} = require("../config.js");


	Sparky({
		on: "text"
	},
	async ({
		m,
		args
	}) => {
		if (args.includes('https://open.spotify.com' || 'https://spotify.com')){
		m.reply("Please Wait 1 minutes...");
		const res = await axios.get(`${API}/api/downloader/spotify?url=${args}`);
		let response = await res.data
		const songbuff = await (await fetch(`${response.data.url}`)).buffer();
		await m.sendAudio({source: songbuff});
		}
	});



	Sparky({
		on: "text"
	},
	async ({
		m,
		args
	}) => {
		if (args.includes('https://www.instagram.com')){
		m.reply("Please Wait....");
		try {
            const res = await axios.get(`${API}/api/downloader/igdl?url=${args}`)
            let response = await res.data
            for (let i of response.data) {
                const opts = {};
                await m.sendMsg(i.url, opts, i.type);
            }
        } catch (e) {
            m.reply(e)
        }
		}
	}
);



Sparky({
	on: "text"
},
async ({
	m,
	args
}) => {
	if (args.includes('https://www.xvideos.com')){
	m.reply("Please Wait....");
	try {
let sample = await fetch(`https://nervous-rosamond-jarvis-bot-99587a26.koyeb.app/download/xnxx?url=${args}`);
var data = await sample.json();
var xv = data.result.files.high
const opts = {};
await m.sendMsg(xv, opts, 'video');
	} catch (e) {
	m.reply(e)
	}
	}
}
);


Sparky({
	on: "text"
},
async ({
	m,
	args
}) => {
	if (args.includes('https://youtu.be')){
	m.reply("Please Wait....");
	try {
		let xvdl = await fetch(`${API}/api/downloader/ytv?url=${args}`);
		var data = await xvdl.json();
			const opts = {};
			await m.sendMsg(data.data.video_hd, opts, 'video');
	} catch (e) {
		m.reply(e)
	}
	}
}
);

Sparky({
 on: "text"
},
async ({
 m,
 args
}) => {
 if (['https://teraboxlink.com','https://terasharelink.com','https://1024terabox.com','https://freeterabox.com'].some(url => args.includes(url))){
 m.reply("Please Wait....");
 try {
let sample = await fetch("https://ironman.koyeb.app/ironman/dl/terabox?link="+args);
var data = await sample.json();
const opts = {};
await m.sendMsg(data.dlink, opts, 'video');
} catch (e) {
 m.reply(e)
 }
 }
}
);
