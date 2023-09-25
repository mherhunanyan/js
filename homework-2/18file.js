/* Գրել ֆունկցիա, որը որպես մուտքագրում ստանում է n կենտ թիվ և վերադարձնում է սորտավորված 
հետևյալ կերպ`
n = 3, 3x3 matrix
[
  [ 3, 2, 9 ],
  [ 4, 1, 8 ],
  [ 5, 6, 7 ],
] */

function createSpiralMatrix(n) {
    let matrix = Array.from({length: n}, () => Array(n).fill(0));
    let num = 1, middle = Math.floor(n / 2), i = middle, j = middle;
    matrix[i][j] = num;
    for (let len = 1; len < n; len += 2) {
      for (let k = 0; k < len; k++) matrix[i][++j] = ++num;
      for (let k = 0; k < len; k++) matrix[++i][j] = ++num;
      for (let k = 0; k < len+1; k++) matrix[i][--j] = ++num;
      for (let k = 0; k < len+1; k++) matrix[--i][j] = ++num;
    }
    for (let k = 0; k < n-1; k++) matrix[i][++j] = ++num;
    return matrix;
  }
  
  console.log(createSpiralMatrix(3));
  