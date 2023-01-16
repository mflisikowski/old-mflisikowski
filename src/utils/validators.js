/**
 * @fileoverview  A utility object containing functions for validating different types of data.
 * @module utils/validators
 */

import { Relations } from '@/utils/relations';
import { Objects } from './objects';

export const Validators = {
  /**
   * Checks if the given value is a array.
   * @param {any} data - The value to check.
   * @returns {boolean} - True if the value is a array, false otherwise.
   */

  isArray: (data) => Array.isArray(data),

  /**
   * Checks if the given value is a non-null object.
   * @param {any} data - The value to check.
   * @returns {boolean} - True if the value is a non-null object, false otherwise.
   */

  isObject: (data) => {
    return data !== null && typeof data === 'object';
  },

  /**
   * Checks if the given value is a string.
   * @param {any} data - The value to check.
   * @returns {boolean} - True if the value is a string, false otherwise.
   */

  isString: (data) => {
    return typeof data === 'string';
  },

  /**
   * Checks if the given value is a valid UUID.
   * @param {any} data - The value to check.
   * @returns {boolean} - True if the value is a valid UUID, false otherwise.
   */

  isUUID: (data) => {
    const uuidRegex =
      /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;
    return uuidRegex.test(data);
  },

  /**
   * Checks if the given object is a valid Prisma filter.
   * A valid Prisma filter is an object with keys: 'where', 'take', 'select', 'orderBy', 'skip'.
   * @param {Object} data - The object to check.
   * @returns {boolean} - True if the object is a valid Prisma filter, false otherwise.
   */

  isPrismaFilter: (data) => {
    if (!Validators.isObject(data)) {
      return false;
    }

    const validRelationsKeys = Relations.getValidFilterKeys();

    return validRelationsKeys.every(
      (key) => key in data && data[key] !== undefined
    );
  },

  isPrismaFilters: (data) => {
    if (!Validators.isObject(data)) {
      return false;
    }

    for (const key in data) {
      if (!Validators.isPrismaFilter(data[key])) {
        return false;
      }
    }

    return true;
  },

  /**
   * Checks if the given relation is valid.
   * A valid relation is a relation with a method.
   * @param {Object} relations - The relations object.
   * @param {string} relation - The relation to check.
   * @returns {boolean} - True if the relation is valid, false otherwise.
   */

  isValidRelation: ({ relations, relation }) => {
    return Objects.keyExist(relations, relation);
  },
};
