/* const jibran =  {
    edad: 31,
    getEdad: function(){
        console.log(this.edad)
    },
}
let jibran2 = jibran.getEdad
let jibran3 = jibran2.bind(jibran)
jibran3() */

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const existStorage = new Set();
const result = [];
for (const num of nums) {
  !existStorage.has(num) ? existStorage.add(num) : result.push(num);
}
console.log;
existStorage;

const num = [4, 3, 2, 7, 8, 2, 3, 1];
let twiceNums = [];

//caso#1= que el arreglo contenga todos sus elementos repetidos con valor [1,1,1,1] resultado esperado: [1]
//caso#2= arreglo vacio resultado esperado: [];
//caso#2= array con todos sus elementos distintos con valor [0, 1, 2, 3] resultado esperado: [];
//caso#4= que tenga algunos repetidos con valor [4,3,2,7,8,2,3,1] resultado esperado [2,3];

for (let i = 0; i < num.length; i++) {
  /* let x = {
        value: num[i],
        index: i,
        counter: 0
    } */
  let counter = 0;
  for (let j = 0; j < num.length; j++) {
    if (num[i] === num[j] && i != j && !twiceNums.some((el) => el === num[i])) {
      counter++;
      /* if(x.counter >= 0){

            }
            x.counter++ */
      /* twiceNums.push(num[i]) */
    }
  }
  
  if (counter > 0) {
    twiceNums.push(num[i]);
  }
}
console.log(twiceNums);

/* let result = [];

    num.forEach((val, ind, arr) => {
        let temp = Math.abs(arr[ind]) - 1;
    
        if(arr[temp] < 0){
           
            result.push(temp+1)
        }

        arr[temp] *= -1;
    }) */
//-----------------------------------------------------------
/* const nums = [-1,0,3,5,9,12];

 for (let i = 0; i < nums.length; i++) {
     const x = nums[i];
     
 }
 console.log(nums.indexOf(2)) */
