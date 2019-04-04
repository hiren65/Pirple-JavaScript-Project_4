'use strict';
module.exports.flipCoin = (event, context, callback) => {
  var output = 'HEADS';
  if (Math.random() < 0.5) {
    output = 'TAILS'
  }
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: `${output}!`,
      input: event,
    }),
  };


};

