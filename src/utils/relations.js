/**
 * @fileoverview A utility object containing functions for prisma relations
 * @module utils/relations
 */

import { prisma } from '@/composables/prisma';
import { Objects } from '@/utils/objects';

export const Relations = {
  /**
   * Gets the valid filters keys for the relation.
   * @returns {Array} - The valid filters keys for the relation.
   */

  getValidFilterKeys: () => {
    return ['include', 'orderBy', 'select', 'where', 'skip', 'take'];
  },

  /**
   * Gets the filters for the given relation.
   * @param {string} relation - The relation to get the filters for.
   * @param {Object} relations - The relations to use for the filters.
   * @returns {Object} - The filters for the given relation.
   * @async
   */

  getFilters: ({ relations, relation }) => {
    const filters = Relations.getValidFilterKeys();

    return filters.reduce((filters, key) => {
      filters[key] = relations?.[relation]?.[key];
      return filters;
    }, {});
  },

  /**
   * Gets the relation data for the given relation.
   * @param {string} relation - The relation to get the data for.
   * @param {string} method - The method name to use for the relation.
   * @param {Object} filters - The filters to use for the relation.
   * @returns {Object} - The relation data for the given relation.
   * @async
   */

  getData: async ({ relation, method, filters }) => {
    try {
      const data = await prisma?.[relation]?.[method](filters);
      return Objects.serialize(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
