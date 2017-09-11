var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.hmtl'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    var rawData = '';
    response.on('data', function (data) {
      rawData += data;
    });

    response.on('end', function () {
      console.log(rawData);
    });
  });
}

getAndPrintHTML();