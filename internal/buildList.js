const { version } = require("../package.json");

const mainnet = require("../tokens/mainnet.json");
const cronos = require("../tokens/cronos.json");
const cronosTestnet = require("../tokens/cronos-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "CronaSwap Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/cronaswap/art/master/sushi/logo-256x256.png",
    keywords: ["cronaswap", "default"],
    tokens: [
      ...mainnet,
      ...cronos,
      ...cronosTestnet,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
