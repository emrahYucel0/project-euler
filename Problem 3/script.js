// 600851475143 sayısının en büyük asal çarpanını bulma

function largestPrimeFactor(number) {
    let i = 2;
  
    while (i <= number) {
      if (number % i == 0) {
        number /= i;
      } else {
        i++;
      }
    }
  
    return i;
  }
  
  let numberToFactorize = 600851475143;
  let result = largestPrimeFactor(numberToFactorize);
  
  console.log(result);
  