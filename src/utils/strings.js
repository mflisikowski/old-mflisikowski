/**
 * @fileoverview A utility object containing functions for string modifications.
 * @module utils/strings
 */

export const Strings = {
  /**
   * Create a URL-friendly / Key-friendly slug from a string
   *
   * @param {string} str - The string to convert
   * @return {string} The converted string
   * @function
   */

  slugify: (str) => {
    const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;';
    const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------';

    const p = new RegExp(a.split('').join('|'), 'g');

    return str
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(p, (c) => b.charAt(a.indexOf(c)))
      .replace(/&/g, '-and-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
      .toLowerCase();
  },

  /**
   * Convert any data to a JSON string.
   * @param {any} data - The data to convert.
   * @returns {string} - The converted data.
   */

  stringify: (data) => {
    return JSON.stringify(data);
  },
};
