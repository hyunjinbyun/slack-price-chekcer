import ExceptionAttribute from './my-attribute.exception';

// 400 잘못된 요청
export const badRequest = new ExceptionAttribute( 400, 30000, 'Badrequest' );

// 404 찾을수 없음
export const notFoundRoute = new ExceptionAttribute( 404, 30101, 'Not found route' );

// 408 time out

// 500 서버 에러

// 501 not implement
