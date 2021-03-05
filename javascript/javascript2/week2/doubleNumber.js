let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i=0; i<numbers.length; i++){
    if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
         
    }
}

console.log("The doubled numbers are", newNumbers);

// map() method

const resultArr = [];
const oddDoubleNum = numbers.map(oddNum => {     
    if (oddNum % 2 !== 0){
    //     return oddNum * 2;
    // } else {
    //     return 0;
    resultArr.push(oddNum * 2);
    }
});

console.log(resultArr);

// filter() method

const requiredNumArr = [];
const filteredNum = numbers.filter(filterNum => {     
    if (filterNum % 2 !== 0){        
        requiredNumArr.push(filterNum * 2);
    } 
});

console.log("The double numbers are" , requiredNumArr);


///anoher map method

const arr = [1, 2, 3, 4, 5, 6];
 const oddMap = [];

  // add one to every element
  const getOddMap = arr.map(num => {
      if (num % 2 !== 0){
         return oddMap.push(num * 2);
      }
      else{
          return 0;
      }
  })
  console.log(oddMap);

  console.log(arr);


  // another filter method

  const arr = [1, 2, 3, 4, 5, 6];
  const oddFilter = [];
 
   // add one to every element
   const getOddFilter = arr.filter(num => {
       if (num % 2 !== 0){
          return oddFilter.push(num * 2);
       }
   })
   console.log(oddFilter);
 
   console.log(arr);