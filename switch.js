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

//Добавление параметра поумолчанию в оператор switch. default оператор - выполняется если не найдено соответствующее case выражение
function switchOfStuff(val) {
  let answer = '';
  // Only change code below this line
  switch(val) {
  case 'a':
    answer = 'apple';
    break;
  case 'b':
    answer = 'bird';
    break;
  case 'c':
    answer = 'cat';
    break;
    default://Если не подходит ни один case
    answer = 'stuff';
    break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);
