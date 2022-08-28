function testEqual(val) {
  if (val == 12) { // equal
    return "Equal";
  }
  return "Not Equal";
}
// оператор строгого неравенства
function testStrictNotEqual(val) {
  if (val !== 17) { // если не равно
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
