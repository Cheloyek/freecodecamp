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
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

// if, else

function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);
