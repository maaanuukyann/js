// const numbers = [3, 5, 10, 11, 16, 77, ]
// let sum = 0
// numbers.forEach((num) => {
//     sum += num

// })
// console.log(sum / numbers.length);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers.forEach ((num) => {
//     console.log(num);

//    numbers.forEach((num2) => {
//     console.log(`${num} * ${num2} = ${num * num2}`);

//    })
// })

// const numbers = [5, 7, 4, -9, 67, 87, -234, 7442, 865, -6545]

// let sorted = [];

// let num1 = numbers.findIndex(el => el == 67)
// console.log(num1);

// numbers.forEach(num => {

//     let index = sorted.findIndex(item => item > num);

//     if (index === -1) {
//         sorted.push(num);
//     } else {
//         sorted.splice(index, 0, num);
//     }
// });
// console.log(sorted);

// let users = [
//     {
//         name:"name",
//         age:20
//     },
//     {
//         name:"name",
//         age:20
//     },{
//         name:"name",
//         age:20
//     },
// ]
// let index = users.findIndex(user => user == {name:"name",age:20} )

// console.log(index);

// const numbers = [1, 7, 8, 4, 8, 45, 568, 68, 57, 45];
// let max = numbers[0];
// let index = 0;

// numbers.forEach((num) => {
//   if (max < num) {
//     max = num;
//   }
//   index = numbers.findIndex((el) => el == max);
// });

// console.log(index);

// console.log(max);

// const numbers = [1, 0, 5 , 0 , 93 ,0, 55, 0 ,45];
// let numbers2 = []

// numbers.forEach(num => {
//  if( num === 0){
//      numbers2.unshift(num)
//  }else {
//     numbers2.push(num)
//  }
   

// })
// console.log(numbers2);

const numbers = [6, 7, 256, 855, 785, 44, 13, 5, 12, 96]

let nums = {
    even:[],
    odd:[],
}

numbers.forEach( num => {
    if(num % 2 == 0){
        nums.even.unshift(num)
    }else{
        nums.odd.unshift(num)
    }
})
console.log(nums);
