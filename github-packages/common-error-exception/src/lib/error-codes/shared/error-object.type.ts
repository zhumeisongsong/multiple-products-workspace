import { StatusCodes } from 'http-status-codes';

export type ErrorObject = {
  errorCode: string;
  httpStatus: StatusCodes;
};

// Infrastructure
export type InfrastructureAttribute = {
  [key: string]: string;
};
export type InfrastructureError = {
  [key: string]:
    | {
        [key: string]: ErrorObject;
      }
    | ErrorObject;
};
