import { ApplicationErrorType } from '../constants/application-error-type.constant';
import { errorTypeToHttpStatus } from '../constants/error-type-to-http-status.constant';
import { ErrorObject } from '../error-object.type';

export const generateApplicationErrorObject = (
  service: string,
  errorType: ApplicationErrorType,
): ErrorObject => ({
  errorCode: `E_${service}_${errorType}`,
  httpStatus: errorTypeToHttpStatus[errorType].httpStatus,
});
