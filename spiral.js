'use strict'

function spiral(param)
{
  let tampung = new Array(param);
  let angka   = 0;
  let hasil   = [];

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
            hasil.push(tampung[atas][i])
        }
        atas= atas+1;
        arah = "bawah";
    }

    else if (arah =="bawah")
    {
        for (let i=atas; i<bawah; i++)
        {
            hasil.push(tampung[i][kanan-1])
        }
        kanan= kanan-1;
        arah = "kiri";
    }

    else if (arah =="kiri")
    {
        for (let i=kanan-1; i>=kiri; i--)
        {
            hasil.push(tampung[bawah-1][i])
        }
        bawah= bawah-1;
        arah = "atas";
    }

    else if (arah =="atas")
    {
        for (let i=bawah-1; i>=atas; i--)
        {
            hasil.push(tampung[i][kiri])
        }
        kiri= kiri+1;
        arah = "kanan";
    }
  }
console.log(hasil);
}

spiral (5);
spiral (6);
spiral (7);
