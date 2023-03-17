/*Kullanıcının girmiş olduğu metin uzunluğu 2 ile 50 arasında ise «merhaba» yazan değilse hata veren programı yapınız
*/

const isim = prompt("İsminizi giriniz");


if(isim.length >= 2 && isim.length <= 50){
    alert("Merhaba " + isim);
}
else{
    alert("Geçerli bir isim giriniz");
}


/* if(isim.length<2 || isim.length > 50){
    alert("Geçerli bir isim giriniz");
}
else{
    alert("Merhaba " + isim);
} */