import { generateEntityErrorObject } from '../../shared/utils/generate-entity-error-object.util';
import {
  entityAttributeErrorType,
  entityErrorType,
} from '../../shared/constants/entity-error-type.constant';
import { EntityAttribute } from '../entity-attribute.type';

const region = 'USER';
const attribute = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
} as const satisfies EntityAttribute;

export const userError = {
  NOT_FOUND: generateEntityErrorObject(region, entityErrorType.NOT_FOUND),
};

export const userAttributeError = {
  EMAIL: {
    REQUIRED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.REQUIRED,
      attribute.EMAIL,
    ),
    INVALID_FORMAT: generateEntityErrorObject(
      region,
      entityAttributeErrorType.INVALID_FORMAT,
      attribute.EMAIL,
    ),
    MAX_LENGTH_EXCEEDED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.MAX_LENGTH_EXCEEDED  ,
      attribute.EMAIL,
    ),
  },
  PASSWORD: {
    REQUIRED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.REQUIRED,
      attribute.PASSWORD,
    ),
    MIN_LENGTH_NOT_REACHED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.MIN_LENGTH_NOT_REACHED,
      attribute.PASSWORD,
    ),
  },
  FIRST_NAME: {
    MAX_LENGTH_EXCEEDED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.MAX_LENGTH_EXCEEDED,
      attribute.FIRST_NAME,
    ),
  },
  LAST_NAME: {
    MAX_LENGTH_EXCEEDED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.MAX_LENGTH_EXCEEDED,
      attribute.LAST_NAME,
    ),
  },
};
