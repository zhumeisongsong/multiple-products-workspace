import { errorTypeToHttpStatus } from '../constants/error-type-to-http-status.constant';
import { InfrastructureErrorType } from '../constants/infrastructure-error-type.constant';
import { ErrorObject } from '../error-object.type';

export const generateInfrastructureErrorObject = (
  region: string,
  errorType: InfrastructureErrorType,
  attribute?: string,
): ErrorObject => ({
  errorCode: `E_${region}_${attribute || 'RESOURCE'}_${errorType}`,
  httpStatus: errorTypeToHttpStatus[errorType].httpStatus,
});
