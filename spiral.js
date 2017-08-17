function spiral(matrix) {
  var matrix = createMatrix(matrix);
  var list = [];

  while (matrix.length > 1) {
    //Right
    list = list.concat(matrix.splice(0, 1)[0]);

    //Down
    for (var idx in matrix) {
      list.push(matrix[idx].splice(-1)[0]);
    }

    //Left
    list = list.concat(matrix.splice(-1, 1)[0].reverse());

    //Up
    for (var idx = matrix.length - 1; idx >= 0; idx--) {
      list.push(matrix[idx].splice(0, 1)[0]);
    }
  }

  if (matrix.length > 0) {
    list.push(matrix.pop()[0]);
  }

  return list;
}

// setup a matrix

function createMatrix(param) {
  var result = [];
  var num = 0;
  for (var x = 0; x < param; x++) {
    result[x] = [];
    for (var y = 0; y < param; y++) {
      result[x][y] = num;
      num++;
    }
  }
  return result;

}
console.log(spiral(5));
