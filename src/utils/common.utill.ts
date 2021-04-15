import { Request } from 'express';
import moment from 'moment';

export const isNull = ( item:any ):boolean => !item;
export const isNullBody = ( req:Request ) => Object.keys( req.body ).length === 0;

export const isNulls = ( items:any[]):boolean => items.filter( ( item ) => isNull( item ) ).length > 0;

export const isNumber = ( item:any ):boolean => !( !Number( item ) );

export const getDate = ( format:string ):string => moment().format( format );

export const fillIndex = ( digit:number, lastIndex:number ):string => {
  const index:string = ( lastIndex + 1 ).toString();
  return '0'.repeat( digit - index.length ) + index;
};
