// Using the following pattern..
//
// [1] -> 1
// [1, 1] -> 2
// [2, 1] -> 3
// [1, 2, 1, 1] -> 4
// [1, 1, 1, 2, 2, 1] -> 5
// [3, 1, 2, 2, 1, 1] -> 6
// [1, 3, 1, 1, 2, 2, 2, 1] -> 7
//
// Implement a function called `hearsay` to return the nth row
//
// hearsay(2) = [1, 1]
// hearsay(4) = [1, 2, 1, 1]

function hearsay(level) {
  const matrix = [[1]];
  for(let i = 0; i < level; i++) {
    let hash = [];
    let pointerCounter = 0;
    let pointerNumber = 0;
    for(let j = 0; j < matrix[i].length; j++ ){
      if (j === 0 || matrix[i][j] !== hash[pointerNumber]) {
        hash.push(1)
        hash.push(matrix[i][j]);
        pointerNumber = hash.length - 1;
        pointerCounter = pointerNumber - 1;
      }
      else if(matrix[i][j] === hash[pointerNumber]) {
        hash[pointerCounter]++;
      }
    }
    //console.log(hash);
    matrix.push(hash);
  }
  return(matrix[level - 1]);
}

console.log(hearsay(10));