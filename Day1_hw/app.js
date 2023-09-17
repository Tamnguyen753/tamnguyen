// 1. Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays;

// function sameElement (arr1,arr2) {
//     const same = arr1.filter(item => arr2.includes(item));
//     return same;
// }
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3,4,5,6,7];
// const result = sameElement(array1,array2);
// console.log(result);


// 2. Find 2 elements with the greatest sum in an array

// function greatestSum(arr){
//     arr.sort((a,b) => b - a);
//     const num1 = arr[0];
//     const num2 = arr[1];
//     return [num1,num2];
// }

// const number = [1,7,9,2,5,3,8];
// const sum = greatestSum(number);
// console.log(sum);


// 3. Find pairs of elements whose sum is equal to a given number
// Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]

// function findNumber(arr,number) {
//     const result = [];
//     const numMap = new Set();

//     for(let i =0; i < arr.length; i++){
//         const currentNumber = arr[i];
//         const complement = number - arr[i];
//         if(numMap.has(complement)){
//             result.push([arr[i], complement]);
//         }
//         numMap.add(currentNumber);

//     }
//     return result
// }

// const arr= [1,7,9,2,5,3,8];
// const number = 10;
// const result = findNumber(arr,number);
// console.log(result);

// 4. Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
// Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
// sử dụng set
// function newArray (arr) {
//     const newArr = new Set(arr);//Tạo một Set chứa các phần tử duy nhất
//     return Array.from(newArr);// tạo set thành mảng mới

// }
// const array = [1,2,3,1,2,3,4,5,6,4];
// const newArr = newArray(array);
// console.log(newArr);

// k dùng set
// function uniqueElement(arr) {
//     const newArray = [];
//     for(const number of arr){
//         if(!newArray.includes(number)){
//             newArray.push(number)
//         }
//     }
//     return newArray
// }
// const array = [1,2,3,1,2,3,4,5,6,4,7,8,9,7,8,9];
// const newArr = uniqueElement(array)
// console.log(newArr);

// 5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array

// function duplicateElement (arr1,arr2) {
//     const result =[];
//     for(const value of arr1){
//         if(arr2.includes(value) && !result.includes(value)){
//             result.push(value)
//         }
//     }
//     return result
// }
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
// const arr2 = [3, 5, 9, 10, 88];
// const result = duplicateElement(arr1,arr2)
// console.log(result);

// 6. Given an array arr1. Write a function that returns a new array of elements that appear more than once in arr1. The elements in new array can only appear once in this array.
// Example: 	const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
// 		const myFunc = (inputArr) => {
// 			// write your code here
// 		}
// 		const arr2 = myFunc(arr1); // [2,3,1,5]

// function newArray (arr){
//     const counts = {};
//     const result=[];
//     for(const value of arr){
//         if(counts[value] === undefined){
//             counts[value] = 1;
//         }else{
//             counts[value]++; 
//         }
//     }
//     for(const key in counts){
//         if(counts[key] > 1){
//             result.push(+key)
//         }
//     }
//     return result

// }
// const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
// const result = newArray(arr1);
// console.log(result);

// 7. 	I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
// 	Write a function with 1 input parameter, an return a new object like this:
// 	{'face': 2, 'zalo': 3, 'gmail':1}

// function newObject(arr){
//     const count = {}
//     for(const value of arr){
//         if(count[value] === undefined){
//             count[value] = 1;
//         }else {
//             count[value]++;
//         }
//     }
//     return count
// }

// const arr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
// const result = newObject(arr);
// console.log(result);

// 8. 	I have an array like this: const arr1 = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }]
// 	Please write a function has 2 input parameters, 1st param is an array like above array, 2nd param is the name of any property in each object of the array.

// function myFunc(name,arr){
//     const result = {};
//     for(const obj of arr){
//         const value = obj[name];
//         if(!result[value]){
//             result[value] = [];
//         }
//         result[value].push(obj)
//     }
//     return result;
// }
// const arr1 = [{ make: 'audi', model: 'r8', year: '2012' }, 
//               { make: 'audi', model: 'rs5', year: '2013' }, 
//               { make: 'ford', model: 'mustang', year: '2012' }, 
//               { make: 'ford', model: 'fusion', year: '2015' }, 
//               { make: 'kia', model: 'optima', year: '2012' }]
// const result = myFunc('make', arr1)
// console.log(result);

// 9. I have 1 object like this: 
// 		const order = {
// 			'cart': [
// 				{ id: 1, name: "ao dai", amount: 5, price: 100000 },
// 				{ id: 2, name: "ao coc", amount: 2, price: 200000 },
// 				{ id: 3, name: "quan dai", amount: 3, price: 150000 },
// 				{ id: 4, name: "quan coc", amount: 4, price: 130000 },
// 			],
// 			'customer': 'Name',
// 			'address': '12 Giai Phong Street'
// 		};
// 	Please use only reduce method, and only one time, and return 2 variables: totalOfMoney = 1870000, totalOfAmount = 14;
 
// function total(order){
//     const cart = order.cart;
//     let totalPrice  = 0;
//     let totalAmount  = 0;
//     for(const product of cart){
//         totalAmount  += product.amount;
//         totalPrice  += product.price * product.amount;
//     }
//     return {totalAmount,totalPrice}
// }

// 		const order = {
// 			'cart': [
// 				{ id: 1, name: "ao dai", amount: 5, price: 100000 },
// 				{ id: 2, name: "ao coc", amount: 2, price: 200000 },
// 				{ id: 3, name: "quan dai", amount: 3, price: 150000 },
// 				{ id: 4, name: "quan coc", amount: 4, price: 130000 },
// 			],
// 			'customer': 'Name',
// 			'address': '12 Giai Phong Street'
// 		};
//         const {totalAmount, totalPrice} = total(order);
//         console.log(totalAmount);
//         console.log(totalPrice)


// 11. Get a new array, which includes unique elements. Those elements are elements from arrays in each value of object deps below

// 			}
// 	=> [1, 2, 3, 12, 323, 5, 8, 14, 79, 64, 105]
function newArr(obj){
    const allNumber=[];
    for(const key in obj){
        if(Array.isArray(obj[key])){
            obj[key].forEach(item => {
                if(Array.isArray(item)){
                    allNumber.push(...item)
                }else{
                    allNumber.push(item)
                }
                
            });
        }
    }
    const uniqueNumber = new Set(allNumber);
    const result =Array.from(uniqueNumber);
    return result;
}
	const deps = {
        'data01':[1,2,3,[12,323]],
        'data02':[5,8,12],
        'data03':[5,14,79],
        'data04':[3,64,105],}
    const arr = newArr(deps)
    console.log(arr);