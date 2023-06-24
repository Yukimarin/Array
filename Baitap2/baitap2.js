let array = ["Academy", "Rikkei", "Chào", "Xin"];
// Su dung ham co san la ham reverse()
// let newArray = array.reverse();
// console.log(newArray);
// let a = newArray.join(" ");
// console.log(a);

// Su dung vong lap For
let newArray = [];
for (let index = array.length - 1; index >= 0; index--) {
  // console.log(array[index]);
  newArray.push(array[index]);
  console.log(newArray);
}
console.log(newArray);
let a = newArray.join(" ");
console.log(a);
