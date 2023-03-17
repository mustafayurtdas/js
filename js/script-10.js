/*Doğum yılı girilen kişinin ehliyet alıp alamayacağını, 
alamayacak ise kaç yıl sonra alabileceğini gösteren 
programı yapınız
*/

const dogumYili = Number(prompt("Doğum yılınızı giriniz"));

const tarihSaat = new Date();
const mevcutYil = tarihSaat.getFullYear();
const yas = mevcutYil - dogumYili;

if(yas>=18){
    alert("Ehliyet alabilirsiniz");
}
else{
    const kalanYil = 18 - yas;
    alert("Ehliyeti " + kalanYil + " yıl sonra alabilirsiniz");
}
