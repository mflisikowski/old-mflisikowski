const usesProductivity = require('./uses-productivity-seed');
const usesDevelopment = require('./uses-development-seed');
const usesWorkstation = require('./uses-workstation-seed');
const usesDesign = require('./uses-design-seed');
const categories = require('./categories-seed');

const seeds = {
  categories,
  uses: [
    ...usesWorkstation,
    ...usesProductivity,
    ...usesDevelopment,
    ...usesDesign,
  ],
};

module.exports = seeds;
