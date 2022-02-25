const { version } = require("../package.json");

const mainnet = require("../assets/tokens/mainnet.json");
const cronos = require("../assets/tokens/cronos.json");
const cronosTestnet = require("../assets/tokens/cronos-testnet.json");
const bscTestnet = require("../assets/tokens/bsc-testnet.json");

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
      "https://raw.githubusercontent.com/cronaswap/default-token-list/master/assets/logox200.png",
    keywords: ["cronaswap", "default"],
    tokens: [
      ...mainnet,
      ...bscTestnet,
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
