import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const envConfig = {
  // server config
  serverName: 'price-checker',
  port: 3000,
  // api key
  binanceApiKey: process.env.BINANCE_API_KEY

};

export default envConfig;
