// let array = [1, 2, 3, 5, 4, 400];
let n = prompt("nhap vao chuoi ky tu so ngan cach boi dau ", "");
let array = n.split(",");
// Su dung ham sort
// let a = array.sort((a, b) => {
//   return a - b;
// });
// console.log(a);

// Su dung vong lap for de duyet tung phan tu sau do sap xep lai chung
// Tu be den lon
for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (Number(array[i]) > Number(array[j])) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log(array);
