/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  //code here
  let result = []
  if (arr.length < 1) {
    return [];
  } else {
    let arrAngka = [];
    let angkaTerkecil = arr[0][0];
    let angkaTerbesar = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let temp = arr[i][j];
        if (typeof temp === "number") {
          if (arr[i][j] < angkaTerkecil) {
            angkaTerkecil = arr[i][j];
          } else if (arr[i][j] > angkaTerbesar) {
            angkaTerbesar = arr[i][j];
          }
        }
      }
    }
    for (let i = angkaTerkecil; i < angkaTerbesar; i++) {
      arrAngka.push(i);
    }
    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr[x].length; y++) {
        for (let z = 0; z < arrAngka.length; z++) {
          if(arr[x][y] == arrAngka[z]) {
            delete arrAngka[z]
          }          
        }
      }
    }

    for (let j = 0; j < arrAngka.length; j++) {
      if(arrAngka[j] !== undefined) {
        result.push(arrAngka[j])
      }      
    }
  }
  return result
}

console.log(
  missingNum([
    [3, " ", 5],
    [1, " ", 7],
    [9, " ", " "],
  ])
); // [ 2, 4, 6, 8 ]
console.log(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
); // [ 3, 4 ]
console.log(
  missingNum([
    [11, " ", 13],
    [17, " ", 19],
    [" ", 16, " "],
  ])
); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "],
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []
