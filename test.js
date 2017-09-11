var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.hmtl'
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);