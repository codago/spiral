function spiral(param1){
  let kotak = new Array(param1),
  number = 0;

  for (let i = 0; i < param1; i++){
    kotak[i] = new Array(param1);
    for (let j=0; j < param1; j++){
      kotak[i][j] = number;
      number++;
    }
  }

  let top = 0, left = 0, bottom = param1, right = param1;
  let Arah = "right";
  while(top<=bottom && left<=bottom) {
    if (Arah == "right") { //untuk kanan
      for (let i = left; i < right; i++){
        console.log(kotak[top][i]);
      }
      top = top + 1;
      Arah = "bottom"; // untuk bawah

    } else if (Arah == "bottom"){
      for (let i = top; i < bottom; i ++){
        console.log(kotak[i][right-1])
      }
      right = right-1;
      Arah = "left"// untuk kiri

    } else if (Arah == "left"){
      for (let i=right-1; i>=left; i--){
        console.log(kotak[bottom-1][i])
      }
      bottom = bottom - 1;
      Arah = "top";//untuk atas

    } else if (Arah == "top"){
      for (let i = bottom -1; i >=top; i--){
        console.log(kotak[i][left])
      }

      left = left+1;
      Arah = "right";//untuk kanan
    }
  }
}
spiral(5)
spiral(6)
spiral(7)
