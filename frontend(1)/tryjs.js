var Spotify = require('node-spotify-api');

var spotify = new Spotify({
id: '43ef82781ed44adc848188f762d0c794',
secret: 'INSERT SECRET'
});

spotify.search({ type: 'playlist', query: 'piano' }, function(err, data) {
if (err) {
  return console.log('Error occurred: ' + err);
}

console.log(data.playlists.items[1]);
});
