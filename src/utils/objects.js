/**
 * @fileoverview A utility object containing functions for object modifications.
 * @module utils/objects
 */

export const Objects = {
  /**
   * Recursively converts all date properties of an object to ISO strings
   * @function
   * @param {Object} obj - The object to be serialized
   * @returns {Object} The serialized object
   */

  serialize: (obj) => {
    return JSON.parse(JSON.stringify(obj));
  },

  /**
   * Converts a Date object to an ISO string.
   * @function
   * @param {Date} date - The Date object to be serialized
   * @returns {string} The serialized ISO string
   */

  toISOString: (dateObject) => {
    return new Date(dateObject).toISOString();
  },

  /**
   * Checks if an object contains a key.
   * @function
   * @param {Object} object - The object to be checked
   * @param {string} key - The key to be checked
   * @returns {boolean} The result of the check
   */

  keyExist: (object, key) => {
    return key in object;
  },

  /**
   * Gets the relation keys from the given relations object.
   * @param {Object} relations - The relations object.
   * @returns {Array} - An array with all relation keys.
   */

  getKeys: (object) => {
    return Object.keys(object);
  },

  /**
   * Checks if the given data is an object.
   * @param {Object} data - The data to be checked.
   * @returns {boolean} - The result of the check.
   */

  isObject: (data) => {
    return data !== null && typeof data === 'object';
  },
};
