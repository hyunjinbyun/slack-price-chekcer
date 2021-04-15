import { config } from 'bluebird';
import { NextFunction, Request, Response } from 'express';
import Binance from 'node-binance-api';
import { resError, resSuccess } from '../utils/response-handler.utill';
import envConfig from '../config/env.config';

class PriceCheckerService {
    getPrice = ( req:Request, res:Response, next:NextFunction ) => {
      try {
        const { symbol } = req.params;
        this.binanceChecker( symbol );
        resSuccess( res, `it will be send price symbol=${symbol}` );
      } catch ( error ) {
        resError( res, error );
      }
    }

    private binanceChecker = ( symbol ) => {
      const binance = new Binance().options({
        APIKEY: envConfig.binanceApiKey,
        useServerTime: true
      });

      binance.prices( 'TRXBTC', ( err, ticker ) => {
        console.log( ticker.TRXBTC );
      });
    }
}

export default new PriceCheckerService();
