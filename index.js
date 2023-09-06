
// console.log(Math.ceil(Math.random() * 50) + 1);

// const arr = []

// math random 

// for (let i = 0; i < 100; i++) {
//     const randomNumb = Math.round((Math.random() * 50) + 1);
//     arr.push(randomNumb)
// }

// console.log(arr);

// const arrOdd = []
// const arrEven = []

// for (let i = 0; i < 10; i++) {
//     console.log(i, '<<< index');
//     arrEven.push(i)
// }

// arrEven.pop()

// console.log(arrEven);

const generateRandomNumber = (rangeNum) => {
    const arr =[]

    for (let i = 0; i < rangeNum; i++) {
        const randomNumb = Math.round((Math.random() * 50) + 1);
        arr.push(randomNumb)
    }

    return arr
}


console.log(generateRandomNumber(70));
console.log('hallo');
