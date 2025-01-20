import { ErrorObject } from "../shared/error-object.type";

export type EntityError = { [key: string]: ErrorObject };

export type EntityAttributeError<T extends string | number | symbol> = Record<
  T,
  { [key: string]: ErrorObject }
>;
