// Faktoriyel hesaplayan fonksiyon
// 5! = 5x4x3x2x1 = 120

function faktoriyel(sayi){
  let carpim = 1;

  for(let i=sayi; i>=1; i--){
    carpim = carpim * i;
  }

  return carpim;
}

function onClickFaktoriyel(){
  const sayi = Number(prompt("Sayı giriniz"));
  const sonuc = faktoriyel(sayi);
  alert(sonuc);
}