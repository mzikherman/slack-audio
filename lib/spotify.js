// lib/spotify.js

var Spotify = {
    'name': 'Spotify',
    'getMessage': getMessage
};

module.exports = Spotify;

function getMessage(username, data) {
    var msg = username + ' is now playing via Spotify:\n',
        trackId = data['trackId'] || null,
        artist = data['albumArtist'] || data['artist'],
        year = data['year'],
        name = data['name'],
        album = data['album'];

    if (artist && name) {
        if (trackId) {
            var spotifyURI = trackId.replace(/spotify:/g, '');
            var link = 'http://open.spotify.com/' + spotifyURI.replace(/:/g, '/');
            msg += '> *<' + link + '|' + artist + ' - ' + name + '>*';
        } else {
            msg += '> *' + artist + ' - ' + name + '*';
        }
    } else {
        return null;
    }

    if (album) {
        msg += '\n> ' + album;
        if (year) msg += ' (' + year + ')'
    }

    return msg;
}
