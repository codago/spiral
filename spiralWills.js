function spiral(param){
  let grid = new Array(param),
  number = 0;
  for (let i = 0; i < param; i++){
    grid[i] = new Array(param);
    for (let j=0; j < param; j++){
      grid[i][j] = number;
      number++;
    }
  }
  let top = 0, left = 0, bot = param, right = param;
  let direction = "right";
  while(top<=bot && left<=bot) {
    if (direction == "right") {
      for (let i = left; i < right; i++){
        console.log(grid[top][i]);
      }
      top = top + 1;
      direction = "bot";

    } else if (direction == "bot"){
      for (let i = top; i < bot; i ++){
        console.log(grid[i][right-1])
      }
      right = right-1;
      direction = "left"
    } else if (direction == "left"){
      for (let i=right-1; i>=left; i--){
        console.log(grid[bot-1][i])
      }
      bot = bot - 1;
      direction = "top";
    } else if (direction == "top"){
      for (let i = bot -1; i >=top; i--){
        console.log(grid[i][left])
      }
      left = left+1;
      direction = "right";
    }
  }
}

spiral(6)
