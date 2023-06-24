let store = ["Laptop", "Keyboard", " Mouse", "PC"];
let cart = [
  ["Laptop", 0],
  ["Keyboard", 0],
  ["Mouse", 0],
  ["PC", 10],
];
// Đọc dữ liệu từ giỏ hàng
console.log("Giỏ hàng của bạn");
for (let i = 0; i < cart.length; i++) {
  console.log(`${i + 1}. ${cart[i][0]}--${cart[i][1]}`);
}
// CRUDE
let state = true;
while (state) {
  let input = prompt("Nhập C/R/U/D").toLowerCase();
  if (input === "c") {
    let item = prompt("Nhập vào sản phẩm muốn mua");
    // Check item có tồn tại trong store, nếu tồn tại thì tôi sẽ thêm vào trong cart
    let checkStore = -1;
    for (let i = 0; i < store.length; i++) {
      if (item == store[i]) {
        checkStore = i;
      }
    }
    if (checkStore != -1) {
      let checkCart = -1;
      for (let i = 0; i < cart.length; i++) {
        if (item == cart[i][0]) {
          checkCart = i;
        }
      }
      if (checkCart != -1) {
        cart[checkCart][1]++;
      }
    }
    console.log("Giỏ hàng của bạn");
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}. ${cart[i][0]}--${cart[i][1]}`);
    }
  } else if (input === "r") {
    console.log("Giỏ hàng của bạn");
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}. ${cart[i][0]}--${cart[i][1]}`);
    }
  } else if (input === "u") {
    let updateItemCart = Number(prompt("Nhập vị trí mà bạn muốn update"));
    let numberItemCart = Number(prompt("Nhập vào số lượng mong muốn"));
    //   console.log(cart[updateItemCart - 1][1]);
    cart[updateItemCart - 1][1] = numberItemCart;
    console.log("Giỏ hàng của bạn");
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}. ${cart[i][0]}--${cart[i][1]}`);
    }
  } else if (input === "d") {
    let deleteItemCart = Number(prompt("Nhập vị trí mà bạn muốn update"));
    //   Xóa hẳn sản phẩm khỏi giỏ hàng
    //   cart.splice(deleteItemCart-1, 1);
    //   Đưa số lượng sản phảm về 0
    cart[deleteItemCart - 1][1] = 0;
    console.log("Giỏ hàng của bạn");
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}. ${cart[i][0]}--${cart[i][1]}`);
    }
  } else if (input === "e") {
    state = false;
    console.log("Thank you");
  }
}
