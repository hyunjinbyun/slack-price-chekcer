import express, { NextFunction, Request, Response } from 'express';
import config from './config/env.config';
import router from './routes/index.route';
import logger from './config/log.config';
// import db from './models/sequelize.model';
import { resError } from './utils/response-handler.utill';
import NotFoundException from './exceptions/not-found.exception';
import { notFoundRoute } from './exceptions/my/my-definition.exception';
import { isNullBody } from './utils/common.utill';

const app = express();
app.use( express.json() );

// incoming log
app.use( ( req:Request, res:Response, next:NextFunction ) => {
  logger.info( `[REQ] ${req.method} ${req.url}` );
  if ( !isNullBody( req ) ) {
    logger.info( `[REQ] body=${JSON.stringify( req.body )}` );
  }
  next();
});

// service router
app.use( router );

const port:number = Number( config.port );
app.listen( port, () => {
  // server on
  logger.info( `> ${config.serverName} server start on port=${port}` );

  // // db connect
  // db.sequelize.authenticate().then( async () => {
  //   try {
  //     await db.sequelize.sync( db.syncConfig );
  //     logger.info( '[DB]Connection has been established successfully.' );
  //   } catch ( error ) {
  //     logger.error( `[DB]Unable to connect to the database error=${error}` );
  //   }
  // });
});

// Unknown route error
app.use( ( req:Request, res:Response, next:NextFunction ) => {
  throw new NotFoundException( notFoundRoute, `Not found route=[${req.method}] ${req.url}` );
});

// exception middleware
app.use( ( error: any, req:Request, res:Response, next:NextFunction ) => {
  logger.error( `${error.stack}` );
  resError( res, error );
});
