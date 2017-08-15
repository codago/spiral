'use strict'

function spiral(param)
{
  let tampung = new Array(param),
  angka=0;
  for(let  i=0; i<param; i++)
  {
    tampung[i] = new Array(param);
    for (let   j=0; j<param; j++)
    {
      tampung[i][j] = angka;
      angka++;
    }
  }


  let atas = 0, kiri = 0, bawah = param, kanan = param;
  let arah = "kanan";
  while(atas<=bawah && kiri<=bawah)
  {
    if (arah =="kanan")
    {
        for (let i=kiri; i<kanan; i++)
        {
            console.log(tampung[atas][i])
        }
        atas= atas+1;
        arah = "bawah";
    }

    else if (arah =="bawah")
    {
        for (let i=atas; i<bawah; i++)
        {
            console.log(tampung[i][kanan-1])
        }
        kanan= kanan-1;
        arah = "kiri";
    }

    else if (arah =="kiri")
    {
        for (let i=kanan-1; i>=kiri; i--)
        {
            console.log(tampung[bawah-1][i])
        }
        bawah= bawah-1;
        arah = "atas";
    }

    else if (arah =="atas")
    {
        for (let i=bawah-1; i>=atas; i--)
        {
            console.log(tampung[i][kiri])
        }
        kiri= kiri+1;
        arah = "kanan";
    }
  }

}

spiral (5);
spiral (6);
spiral (7);
