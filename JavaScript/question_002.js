function fiboEvenSum(number) {
  if(number >= 2 && number < 4){
    return 2;
  }

  else if(number < 2){
    return 0;
  }

  var prevNum = 1;
  var fibonacci = 2;
  var sum = 2;

  for(var i = 2; i <= number; i++){
    fibonacci += prevNum;
    prevNum = fibonacci - prevNum;
    if(fibonacci % 2 == 0){
      sum += fibonacci;
    }
  }
  return sum;
}

fiboEvenSum(10);
