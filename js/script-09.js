/*Boy ve kilo değerlerini alıp vücut kitle  
endeksini bulup, ideal aralık dışındaki değerler için 
«ideal kilo değil», ideal aralıkta ise «ideal kilo» mesajı 
veren programı yazınız
 */

const boy = Number( prompt("Boyunuzu giriniz (mt)") );
const kilo = Number( prompt("Kilonuzu giriniz (kg)") );

const vki = (kilo / boy ** 2).toFixed(2);

if(vki >= 18.5 && vki <= 25){
    alert("Kilonuz ideal: " + vki);
}
else{
    alert("Kilonuz ideal değil: " + vki );
}

