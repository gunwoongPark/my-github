import { isArray, isEmpty, isNaN, isNil } from "lodash";

export const isBlank = (value: any): boolean => {
  if (value === "") {
    return true;
  }

  if (isArray(value) && isEmpty(value)) {
    return true;
  }

  return false;
};

export const isNotBlank = (value: any): boolean => {
  return !isBlank(value);
};

export const isNotNaN = (value: any): boolean => {
  return !isNaN(value);
};

export const isNotNil = (value: any): boolean => {
  return !isNil(value);
};
