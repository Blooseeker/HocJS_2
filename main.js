// 32.5 Toán Tử Spread trong JavaScript - ES6
// https://www.youtube.com/watch?v=uP8I_oY5X2o&t=161s
// let M1 = [1, 2, 3];
// let M2 = [...M1];
// console.log(M2);
// // mảng M2 là mảng clone của  M1
// // thay đổi M2 ko liên quan đến M1
// M2[1] = 99;
// console.log("Mảng M2 = " + M2);
// console.log("Mảng M1 = " + M1);

// // Truyền đối số vào hàm.
// function sum(a, b, c) {
//   return a + b + c;
// }
// let number = [1, 2, 3];
// let result = sum(...number);
// console.log(result);

// // kết hợp mảng
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combinedArray = [...arr1, ...arr2];
// console.log(combinedArray);

// // tạo thêm phần tử
// let M3 = [1, 2, 3];
// let M4 = [...M3, 4, 5, 9];
// console.log(M4);

// //  Chuyển đổi iterable thành mảng
// let myName = "anh";
// let chars = [...myName];
// console.log(chars);

// 32.6 Phương Thức sort() trong JavaScript - ES6
// https://www.youtube.com/watch?v=gc9F2QuGi1Y

// 32.7 Phương Thức reduce() trong JavaScript
// https://www.youtube.com/watch?v=qcNgqYJPDwU

// 32.8 JavaScript Filter() Method - Sử dụng filter()
// https://www.youtube.com/watch?v=GVudfkxuA4M

/*
 Bài tập js 32:
Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên có n phần tử, n do người dùng nhập từ bàn phím  


 Bài tập js 33:
 1. Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên, có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím 
2. Xuất các giá trị trong mảng
3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
4. Sắp xếp mảng tăng dần
5. Tính tổng các phần tử trong mảng
6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong mảng hay không, nếu có xuất ra vị trí index của số đó trong mảng
*/

// Bài tập 32
// let M = [];
// let n;
// // check điều kiện đảm bảo n là số nguyên
// while (true) {
//   n = Number(prompt("Mời nhập số phần tử n của mảng:"));
//   // kiểm tra n là số nguyên lớn hơn 0
//   if (Number.isInteger(n) && n > 0) {
//     // chỉ khi n là số nguyên >0 thì kết thúc vòng lặp
//     break;
//   }
// }

// console.log("Số phần tử của mảng là: " + n);
// // duyệt mảng và gán giá trị cho mảng
// for (let i = 0; i < n; i++) {
//   console.log(i);
//   let input = Number(prompt(`Mời nhập vào phần tử thứ: ${i + 1}`));
//   M.push(input);
// }
// // xuất mảng sau khi nhập
// console.log(M);

// 33.3 Giải bài tập js 33 - Thực hành JavaScript Array
// https://www.youtube.com/watch?v=0UgCbw8BLK8

// let M = [];
// let n;
// // check n là số nguyên và lớn hơn 0
// while (true) {
//   n = Number(prompt("Mời nhập số nguyên n:"));
//   // kiểm tra xem là số nguyên và n > 0
//   if (Number.isInteger(n) && n > 0) {
//     break; //n là số nguyên và n>0 thì lệnh này kết thúc vòng lặp while
//   }
// }
// // duyệt các giá trị của mảng các phần tử là ngẫu nhiên
// for (let i = 0; i < n; i++) {
//   let bien = Math.floor(Math.random() * 100);
//   M.push(bien);
// }
// console.log("****Mảng ban đầu M****");
// console.log("Là: " + M);

// // đảo ngược mảng
// let Mdao = M.reverse();
// console.log("****Mảng đảo ngược của M****");
// console.log("Là: " + Mdao);

// // sắp xếp mảng tăng dần
// let Mtangdan = M.sort((a, b) => a - b);
// M.push(Mtangdan);
// console.log("****Mảng tăng dần của M****");
// console.log("Là: " + Mtangdan);

// // sắp xếp mảng giảm dần
// let Mgiamdan = M.sort((a, b) => b - a);
// M.push(Mgiamdan);
// console.log("****Mảng giảm dần của M****");
// console.log("Là: " + Mgiamdan);

// //  tính tổng các phần tử trong mảng
// let MtongMang = M.reduce((a, b) => a + b, 0);
// console.log("****Tổng mảng của M****");
// console.log("Là: " + MtongMang);

// bài tập 33 thầy chữa
function mangRandom(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

let n = parseInt(prompt("Nhập số phần tử của mảng: "));
let randomArray = mangRandom(n);

// xuất các giá trị trong mảng
console.log("****Mảng ban đầu****");
// console.log(randomArray); // in trực tiếp
// in ra chuỗi ngăn cách bởi khoảng trắng
console.log("Mảng: " + randomArray.join(" "));

//  đảo ngược mảng
console.log("****Mảng sau khi đảo ngược****");
let reverseArray = randomArray.slice().reverse();
console.log("Mảng: " + reverseArray.join(" "));

// sắp xếp mảng tăng dần
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log("****Mảng sau khi sắp xếp tăng dần****");
let sortedArray = sortArray([...randomArray]);
console.log("Mảng: " + sortedArray.join(" "));

// tính tổng phần tử trong mảng
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
console.log("****Tổng các phần tử trong mảng****");
let sumElement = sum(randomArray);
console.log("Tổng: " + sumElement);

/* 
Cho người dùng nhập 1 số bất kì kiểm tra
số đó có trong mảng hay không
nếu có xuất ra vị trí index số đó trong mảng
*/
// Nhập liệu
let seachNumber = Number(prompt("Nhập số kiểm tra: "));
//  dùng forr duyệt mảng
let indexArr = [];
for (let i = 0; i < randomArray.length; i++) {
  if (seachNumber === randomArray[i]) {
    indexArr.push(i);
  }
}
console.log(indexArr);
// kiểm tra nếu ko có phần tử đã nhập
if (indexArr.length === 0) {
  console.log(`Không có số ${seachNumber} trong mảng`);
} else {
  console.log(
    `Số ${seachNumber} xuất hiện tại vị trí index: ` + indexArr.join(" ")
  );
}
