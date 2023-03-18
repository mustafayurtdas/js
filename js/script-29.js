

function notCevir(puan){
  let harf = "";
  if(puan>=90 && puan<=100){
    harf = "A";
  }
  else if(puan>=80 && puan<90){
    harf = "B";
  }
  else if(puan>=70 && puan<80){
    harf = "C";
  }
  else if(puan>=50 && puan<70){
    harf = "D";
  }
  else if(puan>=0 && puan<50){
    harf = "F";
  }
  return harf;
}

const sonuc = notCevir(80);
alert(sonuc);