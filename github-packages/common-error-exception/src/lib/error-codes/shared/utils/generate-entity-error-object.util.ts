import { ErrorObject } from '../error-object.type';
import { errorTypeToHttpStatus } from '../constants/error-type-to-http-status.constant';
import { EntityErrorType, EntityAttributeErrorType } from '../constants/entity-error-type.constant';

export const generateEntityErrorObject = (
  region: string,
  errorType: EntityErrorType | EntityAttributeErrorType,
  attribute?: string,
): ErrorObject => ({
  errorCode: `E_${region}_${attribute || 'RESOURCE'}_${errorType}`,
  httpStatus: errorTypeToHttpStatus[errorType].httpStatus,
});
