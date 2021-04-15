import { Response } from 'express';
import MyBasicException from '../exceptions/my/my-basic.exception';
import logger from '../config/log.config';

export const resSuccess = ( res: Response, resultMessage:any ) => {
  logger.info( `[RES] status=[${200}] response=${
    JSON.stringify(
      {
        resultCode: 0,
        resultMessage
      }
    )}` );

  res.status( 200 ).json({ resultCode: 0, resultMessage });
};

export const resError = ( res:Response, error:MyBasicException ) => {
  logger.error( error.stack );

  const status = error.status || 500;
  const resultCode = error.resultCode || 99999;
  const resultMessage = error.resultMessage || 'undefined error';

  logger.error( `[RES] status=[${status || 500}] response=${
    JSON.stringify(
      {
        resultCode: resultCode || 99999,
        resultMessage: resultMessage || 'undefined error'
      }
    )}` );

  res.status( status ).json({ resultCode, resultMessage });
};
