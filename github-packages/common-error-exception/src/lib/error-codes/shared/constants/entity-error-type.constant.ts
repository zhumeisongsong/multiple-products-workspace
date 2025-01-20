export const entityErrorType = {
  DUPLICATED: 'DUPLICATED',
  NOT_FOUND: 'NOT_FOUND',
} as const satisfies { [key: string]: string };

export type EntityErrorType =
  (typeof entityErrorType)[keyof typeof entityErrorType];

export const entityAttributeErrorType = {
  REQUIRED: 'REQUIRED',
  INVALID_FORMAT: 'INVALID_FORMAT',
  INVALID_VALUE: 'INVALID_VALUE',
  MAX_LENGTH_EXCEEDED: 'MAX_LENGTH_EXCEEDED',
  MIN_LENGTH_NOT_REACHED: 'MIN_LENGTH_NOT_REACHED',
} as const satisfies { [key: string]: string };

export type EntityAttributeErrorType =
  (typeof entityAttributeErrorType)[keyof typeof entityAttributeErrorType];
