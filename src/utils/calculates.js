/**
 * @fileoverview A utility object containing functions that calculate values.
 * @requires moment
 * @module utils/calculate
 */

import moment from 'moment';

export const Calculates = {
  /**
   * Calculate the total years of experience for a given array of job data.
   *
   * @param {Array} data - An array of job data objects.
   * @param {boolean} data[].present - Indicates whether the job is the person's current job.
   * @param {string} data[].start - The start date of the job in the format 'MM.YYYY'.
   * @param {string} data[].end - The end date of the job in the format 'MM.YYYY'.
   * @returns {Object} An object with the total number of years of experience.
   * @throws {Error} - If the workplace data is not an array.
   */

  experience: (data) => {
    return data.reduce(
      (acc, { present, start, end }) => {
        if (present) {
          const currentDate = moment();
          const startDate = moment(start, 'MM.YYYY');
          const years = currentDate.diff(startDate, 'years');

          return {
            years: acc.years + years,
          };
        }

        const startDate = moment(start, 'MM.YYYY');
        const endDate = moment(end, 'MM.YYYY');
        const years = endDate.diff(startDate, 'years');

        return {
          years: acc.years + years,
        };
      },
      { years: 0 }
    );
  },

  /**
   * Calculate the reading time for an article.
   *
   * @param {Object} article - The article object.
   * @param {string} article.content - The content of the article.
   * @returns {number} The estimated reading time in minutes.
   */

  readingTime: async ({ article: { content = '' } }) => {
    // Split the article text into an array of words
    const words = content.split(' ');

    // The average reading speed for an adult is around 200-300 words per minute.
    // Calculate the reading time in minutes
    const readingTime = Math.ceil(words.length / 250);

    return readingTime;
  },
};
