import ExceptionAttribute from './my/my-attribute.exception';
import MyBasicException from './my/my-basic.exception';

/**
 * @author joojh
 * status code : 404
 * name : Not Found
 *
 * @description
 * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
 */
class NotFoundException extends MyBasicException {
  constructor( errorAttribute:ExceptionAttribute, message?:string ) {
    super(
      errorAttribute.getStatus,
      errorAttribute.getResultCode,
      message || errorAttribute.getResultMessage
    );
  }
}

export default NotFoundException;
