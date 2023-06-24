let n = prompt("Hay nhap vao cac so duoc ngan cach boi dau ,");
// console.log(n);
let array = n.split(",");
// console.log(array);
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < array.length; i++) {
  //   console.log(Number(array[i]));
  let number = Number(array[i]);
  if (number % 2 == 0) {
    sumEven = sumEven + number;
  } else {
    sumOdd += number;
  }
}

console.log(`Tong cac phan tu chan la:${sumEven}`);
console.log(`Tong cac phan tu le la:${sumOdd}`);
