/**
 * @fileoverview A utility object containing functions for array modifications.
 * @requires string
 * @module utils/array
 */

import { Strings } from '@/utils/strings';

export const Arrays = {
  /**
   * Groups an array of items by category name
   * @function
   * @param {Object[]} items - The array of items to group
   * @returns {Object[]} An array of grouped items with properties 'items', 'category', and 'id'
   */

  groupByCategory: (items) => {
    const grouped = items.reduce((previous, current) => {
      const category = current.category.name;
      const id = Strings.slugify(category);

      if (!previous[id]) {
        previous[id] = { items: [], category, id };
      }

      delete current.category;

      previous[id].items.push(current);

      return previous;
    }, {});

    return Object.values(grouped);
  },

  /**
   * Sorts the items inside each object of an array based on a specific key
   * @function
   * @param {Array} array - The array of objects that contain items
   * @param {string} key - The key of the property to sort the items by
   * @returns {Array} The same array of objects, but now the items inside each object are sorted based on the key
   */

  sortByCategoryName: (array, key = 'name') => {
    return array.map((category) => {
      return {
        ...category,
        items: Arrays.sortByAlphabet(category.items, key),
      };
    });
  },

  /**
   * Sorts an array of items alphabetically based on a specific key
   * @function
   * @param {Array} items - The array of items to be sorted
   * @param {string} key - The key of the property to sort the items by
   * @returns {Array} The sorted array of items
   */

  sortByAlphabet: (items, key) => {
    return items.sort((a, b) => {
      const nameA = a[key].toLowerCase();
      const nameB = b[key].toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  },

  /**
   * Checks if an array and is not empty
   * @function
   * @param {Array} data - The array to check
   * @returns {boolean} True if the array is not empty, false otherwise
   */

  isArray: (data) => Array.isArray(data) && data.length > 0,
};
