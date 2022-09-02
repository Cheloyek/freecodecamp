//если объект содержит checkProp, то выведет свойство объекта, если не содержит выведет "Not Found"
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found"
  }
}
