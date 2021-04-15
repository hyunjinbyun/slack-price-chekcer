import ExceptionAttribute from './my/my-attribute.exception';
import MyBasicException from './my/my-basic.exception';

/**
 * @author joojh
 * status code : 500
 * name : Internal Server Error
 *
 * @description
 * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
 */
class InternalServerErrorException extends MyBasicException {
  constructor( errorAttribute:ExceptionAttribute, message?:string ) {
    super(
      errorAttribute.getStatus,
      errorAttribute.getResultCode,
      message || errorAttribute.getResultMessage
    );
  }
}

export default InternalServerErrorException;
