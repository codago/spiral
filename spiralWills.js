function spiral(param){
  let grid = new Array(param),
  number = 0;
  let hasil = [];
  for (let i = 0; i < param; i++){
    grid[i] = new Array(param);
    for (let j=0; j < param; j++){
      grid[i][j] = number;
      number++;
    }
  }
    //kanan
  let top = 0, left = 0, bot = param, right = param;
  let direction = "right";
  while(top<=bot && left<=bot) {
    if (direction == "right") {
      for (let i = left; i < right; i++){
        hasil.push(grid[top][i]);
      }
      top = top + 1;
      direction = "bot";
      //bawah
    } else if (direction == "bot"){
      for (let i = top; i < bot; i ++){
        hasil.push(grid[i][right-1])
      }
      right = right-1;
      direction = "left"
      //kiri
    } else if (direction == "left"){
      for (let i=right-1; i>=left; i--){
        hasil.push(grid[bot-1][i])
      }
      bot = bot - 1;
      direction = "top";
      //atas
    } else if (direction == "top"){
      for (let i = bot -1; i >=top; i--){
        hasil.push(grid[i][left])
      }
      left = left+1;
      direction = "right";
    }
  }
  console.log(hasil);
}

spiral (5);
spiral (6);
spiral (7);
