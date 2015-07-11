#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var sgParkingSpots = require('./');
var argv = process.argv.slice(2);

var _ = require('lodash');
var columnify = require('columnify');

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    sg-parking',
    '',
    '  =>  NAME                   LOT',
    '      313@Somerset            35',
    '      Centrepoint            129',
    '      Concorde Hotel         184',
    '      [...]'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}


sgParkingSpots(function(err, parkingSpots){
  parkingSpots = _.sortBy(parkingSpots, 'name');

  var columns = columnify(parkingSpots, {
    columns: ['name', 'lot'],
    config: {
      lot: { align: 'right' }
    }
  });

  console.log(columns);
});
