//Оператор switch проверяет значение и может иметь множество операторов case
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2: 
      answer = 'beta';
      console.log('beta');
      break;
    case 3: 
      answer = 'gamma';
      console.log('gamma');
      break;
    case 4: 
      answer = 'delta';
      console.log('delta');
      break;
  }

  return answer;
}

caseInSwitch(1);
