import { describe, it, expect } from 'vitest';
import { generateApplicationErrorObject } from './generate-application-error-object.util';
import { applicationErrorType } from '../constants/application-error-type.constant';
import { errorTypeToHttpStatus } from '../constants/error-type-to-http-status.constant';

describe('generateApplicationErrorObject', () => {
  it('should generate error object', () => {
    const region = 'TEST';
    const errorType = applicationErrorType.UNAUTHORIZED;

    const result = generateApplicationErrorObject(region, errorType);

    expect(result).toEqual({
      errorCode: `E_${region}_${errorType}`,
      httpStatus: errorTypeToHttpStatus[errorType].httpStatus,
    });
  });
});
