// && или
function testLogicalAnd(val) {
 /*  if (val >= 25) {
    if (val <= 50) {*/
  if (val >= 25 && val <= 50) {
     return "Yes";
    }
  return "No";
}

testLogicalAnd(10);


// || и
/* function testLogicalOr(val) {
  if (val < 10) {
    return "Outside";
  }

  if (val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);
*/
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
