let array = [1, 2, 3, 4, 5];
// "Tổng các phần tử là: 15"
// Cach1:  Su dung vong for sau do in ra ket qua
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   //   sum = 0  va array[0] = 1 => sum = sum + array[i] =1
//   // sum =1 va array[1] =2 =>sum = 1 + 2 = 3
//   sum = sum + array[i];
// }
// console.log(`Tong cac phan tu la:${sum}`);

// Cach 2: su dung ham reduce trong Es6
// reduce(previousValue, currentvalue, intialValue)
let sum = array.reduce((pre, cur) => {
  return (pre += cur);
}, 0);
console.log(`Tong cac phan tu la:${sum}`);
