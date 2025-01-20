import { entityAttributeErrorType, entityErrorType } from "../../shared/constants/entity-error-type.constant";
import { generateEntityErrorObject } from "../../shared/utils/generate-entity-error-object.util";
import { EntityAttribute } from "../entity-attribute.type";

const region = 'TASK';
const attribute = {
  TITLE: 'TITLE',
  DESCRIPTION: 'DESCRIPTION',
} as const satisfies EntityAttribute;

export const taskError = {
  NOT_FOUND: generateEntityErrorObject(region, entityErrorType.NOT_FOUND),
};

export const taskAttributeError = {
  TITLE: {
    REQUIRED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.REQUIRED,
      attribute.TITLE,
    ),
    MAX_LENGTH_EXCEEDED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.MAX_LENGTH_EXCEEDED,
      attribute.TITLE,
    ),
  },
  DESCRIPTION: {
    MAX_LENGTH_EXCEEDED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.MAX_LENGTH_EXCEEDED,
      attribute.DESCRIPTION,
    ),
  }
};
