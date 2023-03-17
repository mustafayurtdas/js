/*Girilen 10 sayının ortalamasını bulan programı yapınız.
*/

let toplam = 0;


for(let i=1; i<=10; i++){
    const sayi = prompt(i + ". sayıyı giriniz");
    toplam = toplam + Number(sayi);
    console.log(toplam);
}

const ort = toplam / 10;


alert(ort);