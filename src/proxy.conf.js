const PROXY_CONFIG = [
  {
      context: [
          "/address",
          "/company",
          "/prices"
      ],
      target: "http://localhost:5984",
      secure: false
  }
]

module.exports = PROXY_CONFIG;
