function multiplesOf3and5(number) {
  var sum = 0;
  for(var i = 3; i < number; i+= 3){
    sum += i;
  }

for(var i = 5; i < number; i+=5){

    if(i % 3 != 0){
    sum += i;
    }
  }

  console.log(sum);
  return sum;
}

multiplesOf3and5(1000);
