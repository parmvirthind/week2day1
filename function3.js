var https = require('https');

function getAndPrintHTML(options) {

  https.get(options, function (response) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.hmtl'
};

getAndPrintHTML(requestOptions);