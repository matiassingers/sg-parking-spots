# sg-parking-spots [![Build Status][travis-badge]][travis-link] [![Dependency Status][gemnasium-badge]][gemnasium-link] [![Coverage Status][coveralls-badge]][coveralls-link]
> available parking spots in Singapore

Uses the [Traffic APIs](http://www.mytransport.sg/content/mytransport/home/dataMall.html#Traffic_Related) from Land Transport Authority.


## Install

```sh
$ npm install --save sg-parking-spots
```


## Usage

```js
var sgParkingSpots = require('sg-parking-spots');

sgParkingSpots(function(spots){
  console.log(spots);
  // => [ { name: 'Suntec City', area: 'Marina', datetime: '1436592857317', lot: '1154', coordinates: { latitude: 1.2935, logitude: 103.8572 } }, ...
});
```


## CLI

```sh
$ npm install --global sg-parking-spots
```

```sh
$ sg-parking-spots --help

  available parking spots in Singapore

  Example
    sg-parking

  =>  NAME                   LOT
      313@Somerset            35
      Centrepoint            129
      Concorde Hotel         184
      [...]
```


## License

MIT © [Matias Singers](http://mts.io)

[travis-badge]: http://img.shields.io/travis/matiassingers/sg-parking-spots.svg?style=flat-square
[travis-link]: https://travis-ci.org/matiassingers/sg-parking-spots

[gemnasium-badge]: http://img.shields.io/gemnasium/matiassingers/sg-parking-spots.svg?style=flat-square
[gemnasium-link]: https://gemnasium.com/matiassingers/sg-parking-spots

[coveralls-badge]: http://img.shields.io/coveralls/matiassingers/sg-parking-spots.svg?style=flat-square
[coveralls-link]: https://coveralls.io/r/matiassingers/sg-parking-spots
