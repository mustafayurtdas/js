// İki sayıyı toplayan fonksiyon

// generic fonksiyon
function topla(s1, s2){
  const toplam = s1 + s2;
  return toplam;
}


// Event fonksiyon, void: geri değer döndürmeyen fonksiyonlar.
function onClickTopla(){
  const sayi1 = Number(prompt("1.sayıyı giriniz"));
  const sayi2 = Number(prompt("2.sayıyı giriniz"));

  const sonuc = topla(sayi1,sayi2);
  alert(sonuc);
  
}



