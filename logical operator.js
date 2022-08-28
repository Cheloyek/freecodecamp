//-------&& или------------------
function testLogicalAnd(val) {
 /*  if (val >= 25) {
    if (val <= 50) {*/
  if (val >= 25 && val <= 50) {
     return "Yes";
    }
  return "No";
}

testLogicalAnd(10);


//---------|| и------------------
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

//----------if, else------------

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

//----------many else----------

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else  if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}
testElseIf(7);

//---------logical order-------------

function orderMyLogic(val) {
  if (val < 5) { // сначала меньшее значение
    return "Less than 5";
  } else if (val < 10) { // большее значение
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//---------chaining if else---------

function testSize(num) {
 if(num <5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else {
    return "Huge"
  }
}

testSize(7);
