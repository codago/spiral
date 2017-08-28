function spiral(n) {
  let count = 0, grid = new Array(n);
  for(i=0; i<n; i++) {

  grid[i] = new Array(n);
  for(j=0; j<n; j++){
    grid[i][j] = count;
    count++;
  }
}

let top = 0, left = 0, bottom = n, right = n;
let direction = "right";
while(top<=bottom && left<=bottom)
{
  if (direction =="right")
  {
      for (let i=left; i<right; i++)
      {
          console.log(grid[top][i])
      }
      top= top+1;
      direction = "bottom";
  }    else if (direction =="bottom")
  {
      for (let i=top; i<bottom; i++)
      {
          console.log(grid[i][right-1])
      }
      right= right-1;
      direction = "left";
  }    else if (direction =="left")
  {
      for (let i=right-1; i>=left; i--)
      {
          console.log(grid[bottom-1][i])
      }
      bottom = bottom-1;
      direction = "top";
  }    else if (direction =="top")
  {
      for (let i=bottom-1; i>=top; i--)
      {
          console.log(grid[i][left])
      }
      left= left+1;
      direction = "right";
  }
}
}

spiral(5);
