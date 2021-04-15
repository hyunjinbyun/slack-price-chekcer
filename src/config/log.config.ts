import winston, { format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import config from './env.config';

const { combine, timestamp, printf } = format;

// 커스텀 포맷 ( 지정한 형식으로 로그에 찍힘 )
const myFormat = printf( ( info ) => `[${info.timestamp}][${info.level}] ${info.message}` );

// 로거 설정
const logger = winston.createLogger({
// 로그 형식 지정
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // 타임스탬프 형식 지정 (moment.js)
    myFormat, // 커스텀 포맷
    winston.format.colorize({ all: true }) // 로그레벨에 따른 색 변화
  ),
  transports: [
    new winston.transports.Console(), // 로그
    // 로그 파일 설정
    new DailyRotateFile({
      level: 'info', // 로그 레벨 error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5
      datePattern: 'YYYYMMDD', // 날짜 형식 (moment.js, 대문자)
      dirname: './logs', // default: '.'
      filename: `${config.serverName}_%DATE%.log`, // %DATE% => dataPattern 형식에 따른 날짜
      maxFiles: '1d' // 로그 파일 남길 갯수 또는 일, ex) 2일 => '2d'
    })
  ]
});

export default logger;
