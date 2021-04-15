import ExceptionAttribute from './my/my-attribute.exception';
import MyBasicException from './my/my-basic.exception';

/**
 * @author joojh
 * status code : 400
 * name : Bad Request
 *
 * @description
 * The server cannot or will not process the request due to an apparent client error
 * (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).
 */
class BadRequestException extends MyBasicException {
  constructor( errorAttribute:ExceptionAttribute, message?:string ) {
    super(
      errorAttribute.getStatus,
      errorAttribute.getResultCode,
      message || errorAttribute.getResultMessage
    );
  }
}

export default BadRequestException;
