function spiral(matrix){
  var list= [];

  while(matrix.length>1){

    //Right
    list= list.concat(matrix.splice(0,1)[0]);

    //Down
    for(var idx in matrix){
      list.push(matrix[idx].splice(-1)[0]);
    }

    //Left
    list= list.concat(matrix.splice(-1,1)[0].reverse());

    //Up
    for(var idx=matrix.length-1;idx>=0;idx--){
      list.push(matrix[idx].splice(0,1)[0]);
    }

  }

  if(matrix.length>0){
  	list.push(matrix.pop()[0]);
  }

  return list;
}

// setup a matrix
var M = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]];

for(var i = 0; i < M.length;i++){

  console.log(M[0][i])
}


for(var i = 1; i < M.length;i++){

  console.log(M[i][M[i].length-1])
}

for(var i = M.length-2; i >= 0 ;i--){

  console.log(M[M[i].length-1][i])
}
for(var i = M.length-2; i >= 0 ;i--){

  console.log(M[M[i].length-2][i])
}

// return it in spiral order
// spiral(M);
