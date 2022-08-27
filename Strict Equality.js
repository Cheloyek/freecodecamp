//1
function testStrict(val) {
  if (val === 7) { // strict equality
    return "Equal";
  }
  return "Not Equal";
}

//2
function compareEquality(a, b) {

  if (a === b) { // strict equality
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
