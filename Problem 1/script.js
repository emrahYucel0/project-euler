
// 1000 in altındaki 3 veya 5 in katlarının toplamını bulma

function sumMultiples(number) {
    let sum = 0;
  
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  const number = 1000;
  var result = sumMultiples(number);
  
  console.log(`The sum of all multiples of 3 or 5 below ${number} is: ${result}`);

  // 1000 in altındaki 3 ve 5 in katlarını bulma

  function findMultiples(limit) {
    let multiples = [];
  
    for (let i = 1; i < limit; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        multiples.push(i);
      }
    }
  
    return multiples;
  }
  
  const limit = 1000;
  var result = findMultiples(limit);
  
  console.log(result.join(', '));
  

