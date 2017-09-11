var https = require('https');

function getHTML(options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var rawData = '';
    response.on('data', function (data) {
      rawData += data;
    });

    response.on('end', function () {
      printHTML(rawData);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.hmtl'
};

getHTML(requestOptions);