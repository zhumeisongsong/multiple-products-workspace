export const applicationErrorType = {
  NOT_ALLOWED_REQUEST: 'NOT_ALLOWED_REQUEST', // when the request is not allowed
  UNAUTHORIZED: 'UNAUTHORIZED', // when the user is not authorized
} as const satisfies { [key: string]: string };

export type ApplicationErrorType =
  (typeof applicationErrorType)[keyof typeof applicationErrorType];
