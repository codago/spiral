function createMatrix(param1) {
    var arrNum = [];
    var count = 1;
    for (var i = 0; i < param1; i++) {
        arrNum[i] = [];
        for (var j = 0; j < param1; j++) {
            arrNum[i][j] = count;
            count++;
        }
    }

    return arrNum;
}


function spiral(arrNum, data = []) {

    if (typeof arrNum === "number") {
        arrNum = createMatrix(arrNum);
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

    if (left.length != 0) {
        left = left.toString().split(",").map(function (val) {
            return +val;
        })
    }

    var merge = data.concat(top, right, bottom, left);
    
    if (arrNum.length === 1) {
        arrNum = arrNum.toString().split(",").map(function (val) {
            return +val;
        })
        return merge.concat(arrNum);
    } else if (arrNum.length === 2) {
        arrNum = arrNum.toString().split(",").map(function (val) {
            return +val;
        })

        var temp = arrNum.splice(2, 3).toString().split(",").reverse().map(function (val) {
            return +val;
        });

        return merge.concat(arrNum, temp);
    } else if(arrNum.length === 0){
         return merge;
    }

    if (arrNum.length > 0) return spiral(arrNum, merge);
}


console.log(spiral(2))
console.log(spiral(3))
console.log(spiral(4))
console.log(spiral(5)) 
console.log(spiral(6)) 
console.log(spiral(7))