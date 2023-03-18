// Aşağıdaki işlemi yapan fonksiyonu yapınız

// 1/1! + 1/2! + 1/3! + … + 1/n!


function faktoriyel(sayi){
  let carpim = 1;

  for(let i=sayi; i>=1; i--){
    carpim = carpim * i;
  }

  return carpim;
}

function onClickFaktoriyel(){
  const sayi = Number(prompt("Sayı giriniz"));

  let toplam = 0;

  for(let i=1; i<=sayi; i++){
    toplam = toplam + 1/faktoriyel(i);
  }

  alert(toplam);
}