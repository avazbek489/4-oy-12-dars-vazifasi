// // // Quyidagi masalalarni ishlash
// // 1-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumArray(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }

//   return sum;
// }

// console.log(sumArray(arr));

// // 2-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function minArray(arg) {
//   let min = arg[0];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] < min) {
//       min = arg[i];
//     }
//   }

//   return min;
// }

// console.log(minArray(arr));

// // 3-SAVOL JAVOBI
// let arr = [`Hello`, `world`, `Length`];
// function lengthStringArray(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (typeof arg[i] == "string") {
//       res.push(arg[i].length);
//     }
//   }
//   return res;
// }
// console.log(lengthStringArray(arr));

// // 4-SAVOL JAVOBI
// let arr = [13, 35, 63, 44, 64, 43, 34, 36, 46];
// function sortArrayNumber(arg) {
//   arg.sort(function (a, b) {
//     return b - a;
//   });
//   return arg;
// }
// console.log(sortArrayNumber(arr));

// // 5-SAVOL JAVOBI
// let arr1 = [`hello`, 12, 121];
// let arr2 = [`world`, `indonesia`, 2, 24];
// function concatTwoArray(arg1, arg2) {
//   let res = arg1.concat(arg2);
//   return res;
// }
// console.log(concatTwoArray(arr1, arr2));

// // 6-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function reverseArray(arg) {
//   arg.reverse();
//   return arg;
// }
// console.log(reverseArray(arr));

// // 7-SAVOL JAVOBI
// let arr = [-3, 5, -1, 0, 7, -8, 10];
// function positiveFilterArray(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] >= 0) {
//       res.push(arg[i]);
//     }
//   }

//   return res;
// }
// console.log(positiveFilterArray(arr));

// // 8-SAVOL JAVOBI
// let num = [1, 2, 3, 4, 5];
// let res = sumArray(num, 3);
// function sumArray(arg, sum) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(arg[i] + sum);
//   }
//   return res;
// }
// console.log(res);

// // 9-SAVOL JAVOBI
// let arr = [-38, 5, 1, 0, 7, -8, 10, 23];
// function negativeArray(arg) {
//   let res1 = [];
//   let res2 = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] >= 0) {
//       res1.push(arg[i]);
//     } else {
//       res2.push(arg[i]);
//     }
//   }

//   return [res1, res2];
// }
// console.log(negativeArray(arr));

// // 10-SAVOL JAVOBI
// let arr = ["10", "hello", "20", "42", "world"];
// function stringToNumberArray(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     let num = +arg[i];
//     if (!isNaN(num)) {
//       res.push(num);
//     } else {
//       res.push(arg[i]);
//     }
//   }
//   return res;
// }
// console.log(stringToNumberArray(arr));

// // 11-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 2,354];
// function mediumArrayNumber(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return Math.trunc(sum / arr.length);
// }

// console.log(mediumArrayNumber(arr));

// // 12-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function separateEvenOdd(arg) {
//   let res1 = [];
//   let res2 = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 0) {
//       res1.push(arg[i]);
//     } else {
//       res2.push(arg[i]);
//     }
//   }
//   return [res1, res2];
// }
// console.log(separateEvenOdd(arr));

// // 13-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 12];
// function removeArray(arg, num) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] !== num) {
//       res.push(arg[i]);
//     }
//   }
//   return res;
// }
// console.log(removeArray(arr, 2));

// // 14-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function kv(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(arg[i] ** 2);
//   }
//   return res;
// }
// console.log(kv(arr));

// // 15-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function doubleArray(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(arg[i] * 2);
//   }
//   return res;
// }
// console.log(doubleArray(arr));

// // 16-SAVOL JAVOBI
// let arr = [1, null, 2, undefined, "hello", 3, null, "world", undefined, 4];
// function removeNullUndefinedArray(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] !== null && arg[i] !== undefined) {
//       res.push(arg[i]);
//     }
//   }
//   return res;
// }
// console.log(removeNullUndefinedArray(arr));

// // 17-SAVOL JAVOBI
// let arr = ["hello", "world", "javaScript", "is", "awesome"];
// function firstToUppercaseArray(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(arg[i][0].toUpperCase() + arg[i].slice(1));
//   }
//   return res;
// }
// console.log(firstToUppercaseArray(arr));

// // 18-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 2, 5, 2];
// function countArrayElements(arg, num) {
//   let count = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] == num) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countArrayElements(arr, 2));

// // 19-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5];
// let res = [6, 7];
// function addElementsToMiddle(arg, num) {
//   let nood = Math.floor(arg.length / 2);
//   arg.splice(nood, 0, ...num);
//   return arg;
// }
// console.log(addElementsToMiddle(arr, res));

// // 20-SAVOL JAVOBI
// let arr = [`olma`, "behi", "anjir", "pul", "gilos"];
// function sortLength(arg) {
//   return arg.sort((a, b) => a.length - b.length);
// }
// console.log(sortLength(arr));

// // 21-SAVOL JAVOBI
// Buni ishlay olmadim domlamdan sorab olaman.

// // 22-SAVOL JAVOBI
// let arr = [`olma`, "behi", "anjir", "pul", "gilos"];
// function arrayStringSeperate(arg) {
//   return arg.join(", ");
// }
// console.log(arrayStringSeperate(arr));

// // 23-SAVOL JAVOBI
// Buni ham ishlay olmadim domlamdan sorab olaman.

// // 24-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6];
// function lastNArray(arg, n) {
//   return arg.slice(-n);
// }
// console.log(lastNArray(arr, 3));
