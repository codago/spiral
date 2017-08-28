//matrix 5x5

function spiral(matrix) {
    var result = [];

    if(matrix == null || matrix.length == 0) return result;

    var m = matrix.length;
    var n = matrix[0].length;

    var x=0;
    var y=0;

    while(m>0 && n>0){

        if(m==1){
            for(var i=0; i<n; i++){
                result.push(matrix[x][y++]);
            }
            break;
        } else if(n==1){
            for(var i=0; i<m; i++){
                result.push(matrix[x++][y]);
            }
            break;
        }




        for(var i=0;i<n-1;i++){
            result.push(matrix[x][y++]);
        }

        for(var i=0;i<m-1;i++){
            result.push(matrix[x++][y]);
        }

        for(var i=0;i<n-1;i++){
            result.push(matrix[x][y--]);
        }

        for(var i=0;i<m-1;i++){
            result.push(matrix[x--][y]);
        }
        x++;
        y++;
        m=m-2;
        n=n-2;
    }

    return result;
}

var matrix5 = [[0, 1, 2, 3, 4],
           [5, 6, 7, 8, 9],
           [10, 11, 12, 13, 14],
           [15, 16, 17, 18, 19],
           [20, 21, 22, 23, 24]];




spiral(matrix5)

// matrix 6x6
//
// function spiral(matrix) {
//     var result = [];
//
//     if(matrix == null || matrix.length == 0) return result;
//
//     var m = matrix.length;
//     var n = matrix[0].length;
//
//     var x=0;
//     var y=0;
//
//     while(m>0 && n>0){
//
//         if(m==1){
//             for(var i=0; i<n; i++){
//                 result.push(matrix[x][y++]);
//             }
//             break;
//         } else if(n==1){
//             for(var i=0; i<m; i++){
//                 result.push(matrix[x++][y]);
//             }
//             break;
//         }
//
//
//
//
//         for(var i=0;i<n-1;i++){
//             result.push(matrix[x][y++]);
//         }
//
//         for(var i=0;i<m-1;i++){
//             result.push(matrix[x++][y]);
//         }
//
//         for(var i=0;i<n-1;i++){
//             result.push(matrix[x][y--]);
//         }
//
//         for(var i=0;i<m-1;i++){
//             result.push(matrix[x--][y]);
//         }
//         x++;
//         y++;
//         m=m-2;
//         n=n-2;
//     }
//
//     return result;
// }
//
// var matrix6 = [[0, 1, 2, 3, 4, 5],
//            [6, 7, 8, 9, 10, 11],
//            [12, 13, 14, 15, 16, 17],
//            [18, 19, 20, 21, 22, 23],
//            [24, 25, 26, 27, 28, 29]
//            [30, 31, 32, 33, 34, 35]];
//
//
//
//
// spiral(matrix6)
