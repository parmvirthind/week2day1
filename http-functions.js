var https = require("https");

module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var rawData = '';
    response.on('data', function (data) {
      rawData += data;
    });

    response.on('end', function () {
      callback(rawData);
    });
  });
};

