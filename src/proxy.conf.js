const PROXY_CONFIG = [
  {
    context: [
      "/address",
      "/company",
      "/prices"
    ],
    target: "http://localhost:5984",
    secure: false
  },
  {
    context: [
      "/readme",
    ],
    target: "http://localhost:3000",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
