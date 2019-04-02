console.log('Loading function');

module.exports.getSquare = async (event, context) => {
  //console.log('Received event:', JSON.stringify(event, null, 2));

  console.log(`Value`, event.key1);
  // console.log('value2 =', event.key2);
  //console.log('value3 =', event.key3);

  //return event.key1;  // Echo back the first key value
  let mynum = parseInt(event.key1);
  return   "Value square " + pp(mynum);

  // throw new Error('Something went wrong');
};
let pp = function (num){
  return num*num;
};

