import { NextFunction, Request, Response } from 'express';
import requestModule from 'request-promise-native';
import { resError } from '../utils/response-handler.utill';

class TemperatureCheckerService {
    getTemperature = async ( req:Request, res:Response, next:NextFunction ) => {
      try {
        const options = { uri: 'https://api.qwer.pw/request/hangang_temp?apikey=guest' };
        let temperatureRes = await requestModule( options );
        temperatureRes = JSON.parse( temperatureRes );

        const { location, temp, year, month, day, time } = temperatureRes[1].respond;

        let resultMsg = `${year}-${month}-${day} ${time} 한강물 온도는 ${temp}℃ 입니다`;
        if ( temp < 16 ) {
          resultMsg += '...수영하기 추워요...';
        }

        res.send( resultMsg );
      } catch ( error ) {
        resError( res, error );
      }
    }
}

export default new TemperatureCheckerService();
