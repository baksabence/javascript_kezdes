
var szam = 2;

export function udvozles(nev) {
    console.log("helló " + nev + "ez a dal most téleg aról szól");
  }
  
export function elagazas1() {
    if (szam === 2) {
      console.log("A számunk = " + szam);
      console.log(typeof szam);
    } else {
      console.log("A számunk nem = " + szam);
      console.log(typeof szam);
    }
  }
  
  /* A szam valtozorol dontsuk el hogy paros e */
export function elagazas2() {
    if (szam === 0) {
      console.log(szam + "A szám 0");
    } else if (szam % 2 == 0) {
      console.log(szam + "páros");
    } else {
      console.log(szam + "nem páros");
    }
  }
  
  /* irjuk le consolera 10x az alabbi uzenetet */
  
export function forCiklus() {
    for (let index = 0; index < 10; index++) {
      console.log(`A(z) ${index}. uzenet`);
    }
  }
  
export function whileCiklus() {
    let index = 0;
  
    while (index < 10) {
      console.log("Ez az első üzenet" + index);
      index++;
    }
  }
  