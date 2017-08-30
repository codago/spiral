'use strict'

function spiral(param1)
{
 let grid = new Array(param1),
 number = 0;
 let result = [];

 for(let  i=0; i<param1; i++)
 {
   grid[i] = new Array(param1);
   for (let   j=0; j<param1; j++)
   {
     grid[i][j] = number;
     number++;
   }
 }

 let top = 0, left = 0, bot = param1, right = param1;
 let direction = "right";
 while(top<=bot && left<=bot)
 {
   if (direction =="right")
   {
       for (let i=left; i<right; i++)
       {
          //  console.log(grid[top][i]);
           result.push(grid[top][i]);
       }
       top= top+1;
       direction = "bot";
   }    else if (direction =="bot")
   {
       for (let i=top; i<bot; i++)
       {
          // console.log(grid[i][right-1])
          result.push(grid[i][right-1]);
       }
       right= right-1;
       direction = "left";
   }    else if (direction =="left")
   {
       for (let i=right-1; i>=left; i--)
       {
          //  console.log(grid[bot-1][i])
           result.push(grid[bot-1][i]);
       }
       bot= bot-1;
       direction = "top";
   }    else if (direction =="top")
   {
       for (let i=bot-1; i>=top; i--)
       {
          //  console.log(grid[i][left])
           result.push(grid[i][left]);
       }
       left= left+1;
       direction = "right";
   }
 }
console.log(result);
}

spiral (5);
spiral (6);
spiral (7);
