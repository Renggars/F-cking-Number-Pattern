/**
Mini Sudoku Board
=================
Implementasikan function `miniSudokuBoard` untuk membuat
papan 3x3 yang tipe data-nya berupa Array.
`miniSudokuBoard` akan menerima satu parameter yaitu `text`
yang tipe data-nya berupa String.

# Contoh I/O
- Input: '290500007'
  Output: [ ['2', '9', '0'], ['5', '0', '0'], ['0', '0', '7] ]
  
- Input: '302609005'
  Output: [ ['3', '0', '2'], ['6', '0', '9'], ['0', '0', '5'] ]

# Kondisi khusus
- Jika parameter adalah string kosong, kembalikan nilai 'Empty board'
- Jika panjang dari string tidak sama dengan 9, kembalikan nilai 'Invalid input'

*/

function miniSudokuBoard(text) {
      //code here
      let result = []
      if(text == '') {
        return "Empty board"
      } else if(text.length !== 9) {
        return "Invalid input"
      } else {
        let arr = text.split('')
        let index = 0
        let tempResult = []
        for (let i = 0; i < arr.length; i++) {
          if(index == 3) {
            result.push(tempResult)
            tempResult = []
            index = 0
          }
          tempResult.push(arr[i])
          index++
        }
        result.push(tempResult)
      }
      return result
  return arr
}

console.log(miniSudokuBoard("005030081"));
// /[ [ '0', '0', '5' ], [ '0', '3', '0' ], [ '0', '8', '1' ] ]
console.log(miniSudokuBoard("105802000"));
// [ [ '1', '0', '5' ], [ '8', '0', '2' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard("608730000"));
// [ [ '6', '0', '8' ], [ '7', '3', '0' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard("096040001"));
// [ [ '0', '9', '6' ], [ '0', '4', '0' ], [ '0', '0', '1' ] ]
console.log(miniSudokuBoard("87109"));
// Invalid input
console.log(miniSudokuBoard(""));
// Empty board
