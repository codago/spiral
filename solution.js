"use strict"

function spiral(size){
  let result=[]
  let matrix = []
  let count = 0

  for(let i=0; i<size; i++){
    matrix[i]=[]
    for(let j=0; j<size; j++){
      matrix[i][j]= count
      count++
    }
  }

  console.log(matrix);

  let length = Math.pow(size, 2);
  let x = 0;
  let y = 0;
  let max = size;
  let min = 0;

  while(result.length < length){

    // arah kanan
    while(x < max){
      if(result.length < length){
        result.push(matrix[y][x]);
      }
      x++
    }
    x--
    y++
    //arah bawah
    while(y < max){
      if(result.length < length){
        result.push(matrix[y][x]);
      }
      y++
    }
    y--
    x--
    //arah kiri
    while(x >= min){
      if(result.length < length){
        result.push(matrix[y][x]);
      }
      x--
    }
    x++
    y--
    //arah ke atas
    while(y > min){
      if(result.length < length){
        result.push(matrix[y][x]);
      }
      y--
    }
    y++
    x++
    max--
    min++
  }

  console.log(result);
}

spiral(5);
