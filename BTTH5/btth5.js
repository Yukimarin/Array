let todoList = ["Go to school at 7am", "Read book at 12 am"];
// In ra phan tu trong mang
for (let i = 0; i < todoList.length; i++) {
  console.log(`${i + 1}. ${todoList[i]}`);
}
let state = true;
while (state) {
  // Cho nguoi dung nhap C/R/U/D/E
  let input = prompt("Cho nguoi dung nhap C/R/U/D/E").toLowerCase();
  // console.log(input);
  if (input === "c") {
    //   console.log("tao moi");
    let newTodo = prompt("Nhap vao noi dung cong viec can them moi");
    todoList.push(newTodo);
    for (let i = 0; i < todoList.length; i++) {
      console.log("Sau khi them moi");
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  } else if (input === "r") {
    console.log("In lai");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  } else if (input === "u") {
    console.log("Update");
    let updateIndex = prompt("Nhap vao vi tri muon update");
    let updateTodo = prompt("Nhap vao noi dung muon update");
    todoList[updateIndex - 1] = updateTodo;
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  } else if (input === "d") {
    console.log("Delete");
    let deleteIndex = prompt("Nhap vao vi tri muon delete");
    todoList.splice(deleteIndex - 1, 1);
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  } else if (input === "e") {
    state = false;
    console.log("Cam on ban da su dung ung dung To Do List");
  }
}
