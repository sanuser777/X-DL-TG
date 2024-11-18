const {
    Sparky
} = require("../lib/plugins.js");
const util = require("util");

Sparky(
  {
      name: "ping",
      category: "misc",
      desc: "To check ping"
  },
  async ({
      m, bot 
  }) => {

      const start = new Date().getTime();

let pong = await m.reply("Checking Ping...")
const end = new Date().getTime();

await m.reply(`Latency : ${end - start} ms`)
  })

  Sparky(
    {
        name: "runtime",
        category: "misc",
        desc: "To check ping"
    },
    async ({
        m
    }) => {
        return m.reply(`Runtime : ${await m.runtime()}`)
    }
);


Sparky({
		on: "text",
		fromMe: true,
	},
	async ({
		m,
		args
	}) => {
		if (args.startsWith(">")) {
			try {
				let evaled = await eval(`(async () => { ${args.replace(">", "")} })()`);
				if (typeof evaled !== "string") evaled = util.inspect(evaled);
				await m.reply(`${evaled}`)
			} catch (err) {
				await m.reply(`${util.format(err)}`);
			}
		}
	});