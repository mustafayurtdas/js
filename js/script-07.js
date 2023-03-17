
/*Girilen 3 sayının ortalamasını bulan, eğer ortalama, ilk sayıdan büyükse "kâr", değilse "zarar" yazan programı yapınız.
*/
const num1 = Number( prompt("Enter 1th number") );
const num2 = Number( prompt("Enter 2th number") );
const num3 = Number( prompt("Enter 3th number") );

const avg = (num1 + num2 + num3) / 3;

if(avg>num1){
    alert("Kâr");
}
else{
    alert("Zarar");
}

