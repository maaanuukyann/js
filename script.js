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

const numbers = [5, 7, 4, -9, 67, 87, -234, 7442, 865, -6545]

let sorted = [];

numbers.forEach(num => {
    let index = sorted.findIndex(item => item > num);

    if (index === -1) {
        sorted.push(num);
    } else {
        sorted.splice(index, 0, num);
    }
});

console.log(sorted);