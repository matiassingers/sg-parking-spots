'use strict';

var fs = require('fs');
var assert = require('assert');
var nock = require('nock');

var sgParkingSpots = require('./');

var mocks = nock('http://datamall.mytransport.sg')
  .get('/ltaodataservice.svc/CarParkSet')
  .reply(200, fs.readFileSync('fixtures/response.json'));

describe('should format the reponse correctly', function(){
  var spots;
  before(function(done){
    sgParkingSpots(function(err, response){
      spots = response;

      done();
    });
  });

  after(function(){
    mocks.done()
  });

  it('have correct amount of places', function() {
    assert.notEqual(spots, null);
    assert.equal(spots.length, 26);
  });

  it('have correct properties', function() {
    assert.equal(spots[2].name, 'The Esplanade');
    assert.equal(spots[6].lot, 77);
    assert.equal(spots[1].datetime, '1436593217747');
    assert.equal(spots[0].id, '1');
    assert.equal(spots[0].area, 'Marina');
    assert.equal(spots[0].coordinates.latitude, '1.2935');
    assert.equal(spots[0].coordinates.longitude, '103.8572');
  });
});
