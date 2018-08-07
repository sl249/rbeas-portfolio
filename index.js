'use strict';
var Funnel = require('broccoli-funnel');
var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'rbeas-portfolio',
  treeForPublic: function() {
    var publicTree = this._super.treeForPublic.apply(this, arguments);
    var trees = [];

    if (publicTree) {
      trees.push(publicTree);
    }

    trees.push(new Funnel(path.join(__dirname, 'vendor'), {
      files: ['favicon.png']
    }));

    return mergeTrees(trees);
  },
};
