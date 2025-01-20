import { describe, it, expect } from 'vitest';
import { generateInfrastructureErrorObject } from './generate-infrastructure-error-object.util';
import { infrastructureErrorType } from '../constants/infrastructure-error-type.constant';
import { errorTypeToHttpStatus } from '../constants/error-type-to-http-status.constant';

describe('generateInfrastructureErrorObject', () => {
  it('should generate error object without attribute', () => {
    const region = 'TEST';
    const errorType = infrastructureErrorType.REQUIRED;

    const result = generateInfrastructureErrorObject(region, errorType);

    expect(result).toEqual({
      errorCode: `E_${region}_RESOURCE_${errorType}`,
      httpStatus: errorTypeToHttpStatus[errorType].httpStatus,
    });
  });

  it('should generate error object with attribute', () => {
    const region = 'TEST';
    const errorType = infrastructureErrorType.REQUIRED;
    const attribute = 'USER';

    const result = generateInfrastructureErrorObject(region, errorType, attribute);

    expect(result).toEqual({
      errorCode: `E_${region}_${attribute}_${errorType}`,
      httpStatus: errorTypeToHttpStatus[errorType].httpStatus,
    });
  });
});
