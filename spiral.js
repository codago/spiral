function spiral(param1){

  var nilai=0
  var ij=[]
  var hasil=[]

  for(var i=0; i < param1; i++){
    ij [i]=[]

    for(var j=0; j < param1; j++){
      ij[i][j]= nilai
      nilai++
    }
  }
  var atas = 0
  var kanan = 1
  var bawah = 1
  var kiri = 0

  for(i = 0 ; i < (param1*2)/4; i ++){
    for (var a = atas; a < param1; a++){
      if(hasil.indexOf(ij[atas][a])==-1)
      hasil.push(ij[atas][a])
    }
    atas++

    for(var c = 1; c < param1; c++){
      if(hasil.indexOf(ij[c][param1-kanan])==-1)
      hasil.push(ij[c][param1-kanan])
    }
    kanan++

    for(var b = param1-2; b > 0; b--){
      if(hasil.indexOf(ij[param1-bawah][b])==-1)
      hasil.push(ij[param1-bawah][b])
    }
    bawah++

    for(var d = param1-1; d >0; d--){
      if(hasil.indexOf(ij[d][kiri])==-1)
      hasil.push(ij[d][kiri])
    }
    kiri++
  }
  console.log(ij)
  console.log(hasil)
}
spiral(5)
spiral(6)
spiral(7)
