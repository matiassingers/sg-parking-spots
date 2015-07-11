'use strict';

var _ = require('lodash');
var got = require('got');

var endpoint = 'http://datamall.mytransport.sg/ltaodataservice.svc/CarParkSet';
var options = {
  json: true,
  headers: {
    AccountKey: '86Rip+7JBCE7grOicYA1JA==',
    UniqueUserID: '3222fa6c-eab6-4c7d-9aea-62dfdfe0225e'
  }
};

module.exports = function (callback){
  got(endpoint, options, function (err, data) {
    if (err) {
      return callback(err);
    }

    if (!data.d) {
      return callback(new Error('The response format has changed'));
    }

    data = _.map(data.d, function(item) {
      return {
        id: item.CarParkID,
        name: item.Development,
        area: item.Area,
        datetime: _.trim(item.CreateDate, '/Date()'),
        lot: item.Lots,
        coordinates: {
          latitude: item.Latitude,
          longitude: item.Longitude
        }
      }
    });

    callback(null, data);
  });
};
