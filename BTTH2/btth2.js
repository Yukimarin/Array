// let array = [10, 2, -3, 4];
let n = prompt("Nhap vao chuoi ky tu so ngan cach boi dau ,");
let array = n.split(",");

let max = Number(array[0]);
let min = Number(array[0]);

for (let i = 0; i < array.length; i++) {
  if (max <= Number(array[i])) {
    max = Number(array[i]);
  } else if (min >= Number(array[i])) {
    min = Number(array[i]);
  }
}
console.log(`So be nhat trong chuoi so la: ${min}`);
console.log(`So lon nhat trong chuoi so la: ${max}`);
