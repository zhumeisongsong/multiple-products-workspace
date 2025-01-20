import { describe, it, expect } from 'vitest';
import { generateEntityErrorObject } from './generate-entity-error-object.util';
import { entityErrorType } from '../constants/entity-error-type.constant';
import { errorTypeToHttpStatus } from '../constants/error-type-to-http-status.constant';

describe('generateEntityErrorObject', () => {
  it('should generate error object without attribute', () => {
    const region = 'TEST';
    const errorType = entityErrorType.NOT_FOUND;

    const result = generateEntityErrorObject(region, errorType);

    expect(result).toEqual({
      errorCode: `E_${region}_RESOURCE_${errorType}`,
      httpStatus: errorTypeToHttpStatus[errorType].httpStatus,
    });
  });

  it('should generate error object with attribute', () => {
    const region = 'TEST'; 
    const errorType = entityErrorType.NOT_FOUND;
    const attribute = 'USER';

    const result = generateEntityErrorObject(region, errorType, attribute);

    expect(result).toEqual({
      errorCode: `E_${region}_${attribute}_${errorType}`,
      httpStatus: errorTypeToHttpStatus[errorType].httpStatus,
    });
  });
});
