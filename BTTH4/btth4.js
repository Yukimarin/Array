let array = [1, 2, 3, 1, 5, 12, 6, 12, 5, 5,12];
let maxCount = 0;
let newArray = [];

for (let i = 0; i < array.length; i++) {
  let count = 1;
  //   Dem so lan xuat hien phan tu trong mang
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] === array[i]) {
      count++;
      // count =+1
      // count = count +1
    }
  }
  //   Kiem tra neu so lan xuat hien ma no lon hon maxCount thi se gan lai maxCount=count
  // va push phan tu do vao trong mang rong
  if (count > maxCount) {
    maxCount = count;
    newArray = [array[i]];
  }
  //   Neu so lan xua hien ma bang maxCount thi cac ban push array[i] vao trong mang newArray
  else if (count === maxCount) {
    newArray.push(array[i]);
  }
}

console.log("Phan tu xuat hien nhieu nhat :" + newArray.join(","));
