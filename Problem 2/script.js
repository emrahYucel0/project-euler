// 4.000.000 a kadar olan fibonacci dizisindeki çift sayıların toplamı

function findEvenFibonacciSum(number) {
    let sum = 0;
    let a = 1;
    let b = 2;

    while (a<=number) {
        if (a%2===0) {
          sum = sum + a;              
        }

        let temp = a + b;
        a = b;
        b = temp;
    }
    return sum;
}

let number = 4000000;
var result = findEvenFibonacciSum(number);
console.log(result);

// // 4.000.000 a kadar olan fibonacci dizisindeki tek sayılar

function fibonacciOddNumbers(limit) {
    let oddNumbers = [];
    let a = 1;
    let b = 2;
  
    while (a <= limit) {
      if (a % 2 === 1) {
        oddNumbers.push(a);
      }
  
      let temp = a;
      a = b;
      b = temp + b;
    }
  
    return oddNumbers;
  }
  
  let limit = 4000000;
  var result = fibonacciOddNumbers(limit);
  
  console.log(result.join(', '));
  