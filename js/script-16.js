/*100 ile 200 arasındaki çift sayıların toplamını 
bulan programı yazınız.

100 + 102 + 104 + 106 + .... + 200 = ?
*/

let toplam = 0;

for (let i = 100; i <= 200; i=i+2) {
  toplam = toplam + i;
}

console.log(toplam);
