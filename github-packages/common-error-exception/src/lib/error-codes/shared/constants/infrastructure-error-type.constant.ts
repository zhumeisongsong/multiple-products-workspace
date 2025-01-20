export const infrastructureErrorType = {
  REQUIRED: 'REQUIRED',
  MAX_SIZE_EXCEEDED: 'MAX_SIZE_EXCEEDED',
  MIN_SIZE_LESS_THAN_ZERO: 'MIN_SIZE_LESS_THAN_ZERO',
  MAX_LENGTH_EXCEEDED: 'MAX_LENGTH_EXCEEDED',
  PARSE_EXCEPTION: 'PARSE_EXCEPTION',
  TOKEN_REFRESH_FAILED: 'TOKEN_REFRESH_FAILED',
} as const satisfies { [key: string]: string };

export type InfrastructureErrorType =
  (typeof infrastructureErrorType)[keyof typeof infrastructureErrorType];
