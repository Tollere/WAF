var connect = require('connect'),
    http = require('http'),
    directory = '/path/to/Folder';

connect()
    .use(connect.static(directory))
    .listen(80);

console.log('Listening on port 80.');