function spiral(param1){

  var count = 0;
  var array = [];

  for( var i = 0; i < param1; i++)
  {
    array[i] = []
      for (var j = 0; j < param1 ; j ++)
      {
      array[i][j] = count;
      count++;
    }
  }


var hasil =[];
var atas = 0
var kanan = 1
var bawah = 1
var kiri = 0


for(i = 0 ; i < (param1*2)/4; i ++){
  for (var a = atas; a < param1; a++){
  //cek apakah index ada atau tidak
  if(hasil.indexOf(array[atas][a])==-1)
    hasil.push(array[atas][a]);
  }
  atas++
  for (var ka = 1; ka < param1; ka++){
  if(hasil.indexOf(array[ka][param1-kanan])==-1)
    hasil.push(array[ka][param1-kanan]);
  }
  kanan++
  for (var b = param1-2; b > 0; b--) {
  if(hasil.indexOf(array[param1-bawah][b])==-1)
    hasil.push(array[param1-bawah][b]);
  }
  bawah++
  for (var ki = param1-1; ki > 0; ki--) {
  if(hasil.indexOf(array[ki][kiri])==-1)
    hasil.push(array[ki][kiri]);
  }
  kiri++

}
    console.log(array);
    console.log(hasil);
}
 spiral(5);
 spiral(6);
 spiral(7);
