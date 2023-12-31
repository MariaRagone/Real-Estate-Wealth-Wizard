const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:23167';

const PROXY_CONFIG = [
  {
    context: [
      "/api/PropertiesByPostal",
      "/api/PropertyDetails",
      "/api/MortgageCalculator",
      "/api/User",
      "/api/Favorite",
      "/api/Rent",
      "/api/AverageRate"
      //calls APIs from constructor in C# to visual code service. 

   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
