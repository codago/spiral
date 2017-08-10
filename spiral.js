function createMatrix(param1) {
  var arrNum = [];
  var count = 0;
  for(var i=0;i<param1;i++){
      arrNum[i] = [];
      for(var j=0;j<param1;j++){
        arrNum[i][j] = count;
        count++;
      }
  }

  return arrNum;
}
var flag = true;
var arrNum;

function spiral(param1,data=[]) {

    if(flag){
    arrNum = createMatrix(param1);
        flag = false;
    }
    var top = arrNum.splice(0, 1).toString().split(",").map(function (val) {
        return +val;
    });


    var right = [];
    for (var i = 0; i < arrNum.length; i++) {
        var liCol = arrNum[i].splice(-1, 1);
        right.push(liCol);
    }
    right = right.toString().split(",").map(function (val) {
        return +val;
    })

    var bottom = arrNum.splice(arrNum.length - 1, 1).toString().split(",").reverse().map(function (val) {
        return +val;
    });


    var left = [];

    for (var i = arrNum.length - 1; i >= 0; i--) {
        var fiCol = arrNum[i].splice(0, 1);
        left.push(fiCol);
    }

    left = left.toString().split(",").map(function (val) {
        return +val;
    })
    
    var merge = data.concat(top,right, bottom, left);


    if (arrNum.length === 1) {
        arrNum = arrNum.toString().split(",").map(function (val) {
            return +val;
        })
        return merge.concat(arrNum);
    }else if(arrNum.length === 2){
         arrNum = arrNum.toString().split(",").map(function (val) {            
            return +val;
        })

        var temp = arrNum.splice(2,3).toString().split(",").reverse().map(function(val){
            return +val;
        });
        
        return merge.concat(arrNum,temp);
    }
    
    if (arrNum.length > 0) return spiral(arrNum[0].length,merge);
}

// console.log(spiral(5)) // [ 0,1,2,3,4,9,14,19,24,23,22,21,20,15,10,5,6,7,8,13,18,17,16,11,12 ]
console.log(spiral(6)) // [0,1,2,3,4,5,11,17,23,29,35,34,33,32,31,30,24,18,12,6,7,8,9,10,16,22,28,27,26,25,19,13,14,15,21,20 ]
// console.log(spiral(7)) // [0,1,2,3,4,5,6,13,20,27,34,41,48,47,46,45,44,43,42,35,28,21,14,7,8,9,10,11,12,19,26,33,40,39,38,37,36,29,22,15,16,17,18,25,32,31,30,23,24]