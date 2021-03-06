const http = require("http");

exports.run = async (client, message) => {
  try {
    http.get({ host: "api.ipify.org", port: 80, path: "/" }, (resp) => {
      resp.on("data", (ip) => {
        message.author.send("Cytrus-RE's public IP: " + ip);
        message.channel.send("Cytrus-RE's IP is in your DMs!");
      });
    });
  } catch (err) {
    message.channel.send(client.errors.genericError + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["ip"],
  guildOnly: false,
  permLevel: "Bot Admin",
};

exports.help = {
  name: "publicip",
  category: "System",
  description: "Returns Cytrus-RE's public IP.",
  usage: "publicip",
};
