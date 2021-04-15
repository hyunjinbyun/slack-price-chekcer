// import dotenv from 'dotenv';
// import config from './env.config';

// dotenv.config({ path: '.env' });

// interface sequelizeConfigAttributes{
//   database:string;
//   username:string;
//   password:string;
//   options:Record<string, unknown>;
// }

// const sequelizeConfig:sequelizeConfigAttributes = {
//   database: config.database || '',
//   username: config.username || '',
//   password: config.password || '',
//   options: {
//     host: config.dbhost || '',
//     port: Number( config.dbport ),
//     dialect: 'mysql',
//     timezone: '+09:00',
//     models: [ `${__dirname}/models` ],
//     pool: {
//       max: 5,
//       min: 1,
//       idle: 10000
//     }
//   }
// };

// export default sequelizeConfig;
