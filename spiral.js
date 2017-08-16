// Untuk matrix 7 x 7
var spiral = function(){

  var matrix = [[0, 1,   2, 3,  4, 5, 6],
               [7,   8, 9, 10, 11, 12, 13],
               [14, 15, 16, 17, 18, 19, 20],
               [21, 22, 23, 24, 25, 26, 27],
               [28, 29, 30, 31, 32, 33, 34],
               [35, 36, 37, 38, 39, 40, 41],
               [42, 43, 44, 45, 46, 47, 48]];
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
console.log('result', spiral());

/*
// Untuk Matrix 6x6
var spiral = function(){

  var matrix = [[0, 1,   2, 3,  4, 5],
               [6,  7,   8, 9, 10, 11],
               [12, 13, 14, 15, 16, 17],
               [18, 19, 20, 21, 22, 23],
               [24, 25, 26, 27, 28, 29],
               [30, 31, 32, 33, 34, 35]];
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
    return result;
}
console.log('result', spiral());
*/


// untuk matrix 5 x 5
/*var spiral = function(){

  var matrix = [[0, 1,   2,   3,  4],
               [5,  6,   7,   8,  9],
               [10, 11, 12,  13, 14],
               [15, 16, 17,  18, 19],
               [20, 21, 22,  23, 24]];
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
    return result;
}
console.log('result', spiral());
*/
