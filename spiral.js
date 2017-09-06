function spiral(matrix) {
 var matrix = makeMatrix(matrix);
 var result = [];
    var goAround = function(matrix) {
      if(matrix.length){
        if (matrix.length == 0) {
            return;
        }
      }
      if(matrix.length){
        // right
        result = result.concat(matrix.shift());
      }
      if(matrix.length){
        // down
        for (var j=0; j < matrix.length; j++) {
            result.push(matrix[j].pop());
        }
      }
      if(matrix.length){
        // bottom
        result = result.concat(matrix.pop().reverse());
       //   up
        for (var k=matrix.length-1; k >= 0; k--) {
          result.push(matrix[k].shift());

        }
      }
    }
    goAround(matrix);
          goAround(matrix);
                goAround(matrix);
                  goAround(matrix);
                   goAround(matrix);
    return result;
}
// matrix

function makeMatrix(param) {
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
console.log('result', spiral(5));
