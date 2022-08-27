function testStrict(val) {
  if (val === 7) { // strict equality
    return "Equal";
  }
  return "Not Equal";
}

function compareEquality(a, b) {

  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
