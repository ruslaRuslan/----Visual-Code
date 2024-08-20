// const name = "Ruslan and Ali";

// // console.log(name.length); // 14 (metnin sayir)
// //---------------------------------------------------

// // console.log(name.includes("us")); //true
// // console.log(name.includes("and", 7)); //true (baslangicdan and-e qeder true onan sonra false olacax!)
// // console.log(name.includes("and", 8)); //false (baslangicdan and-e qeder true onan sonra false olacax!)
// // console.log(name.includes("d ")); //true
// // console.log(name.includes("8nd")); //false
// // eyer metndeki yaziraldan biri varsa true verecek. Eyer yoxdusa false qaytaracax!

// //----------------------------------------------------------------------------------------------

// // console.log(name.indexOf("and Ali")); // 7 necenciden basladigini gosterir (eyer sef olarsa -1 verecek)

// // console.log(name.indexOf("Ali", 11)); // 11 reqemi 0-dan 11-e qeder ne reqem yazsam 11 verecek (eyer sef yazsam -1 verecek)

// //----------------------------------------------------------------------------------------------
// // console.log(name.lastIndexOf("Ali", 11)); // 11 reqemi 11-dan yuxari ne reqem yazsam 11 verecek (eyer 11-den asagi yazsam -1 verecek)

// // console.log(name.lastIndexOf("and", 1201)); // 7 reqemi 7-dan yuxari ne reqem yazsam 7 verecek (eyer 11-den asagi yazsam -1 verecek)

// //----------------------------------------------------------------------------------------------
// // console.log(name.repeat(3)); // Ruslan and AliRuslan and AliRuslan and Ali  (3 defe tekrar string-de olani tekrar qaytarir.)

// //----------------------------------------------------------------------------------------------

// // console.log(name.replace("and", "&")); // Ruslan & Ali (var olan stringi isdediyimizle evez ede bilerik)

// //----------------------------------------------------------------------------------------------

// // console.log(name.slice(0, 3)); // Rus
// // console.log(name.slice(8, 10)); // nd
// // console.log(name.slice(8)); // nd Ali
// // console.log(name.slice(2, 12)); // slan and A
// // console.log(name.slice(5, 8)); // n a
// // console.log(name.slice(4, 8));
// // console.log(name.slice(3, 7)); // lan
// // console.log(name.slice(5, 9)); // n an (5-den basdiyacax 9 olmamis dayanacax)

// //----------------------------------------------------------------------------------------------

// // console.log(name.split(" ")); //  ['Ruslan', 'and', 'Ali']
// // split string-i massive yigir

// //----------------------------------------------------------------------------------------------
// // console.log(name.toLowerCase()); //ruslan and ali (hamsini kiciltdi)
// // console.log(name.toUpperCase()); // RUSLAN AND ALI (hamsini boyutdu)

// //----------------------------------------------------------------------------------------------

// // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// // let ad = "            Salam 57            ";
// // console.log(ad.trim()); //Salam 57  (sonan ve evvelden bosluqlari silir)

// // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_Massiv-in metodlari_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// let people = [
//   {
//     name: "Ruslan",
//     age: 23,
//     budget: 2500,
//   },
//   {
//     name: "Ali",
//     age: 24,
//     budget: 4200,
//   },
//   {
//     name: "Ramin",
//     age: 21,
//     budget: 2400,
//   },
//   {
//     name: "Isa",
//     age: 26,
//     budget: 3140,
//   },
// ];
// // forEach
// // people.forEach(function (person) {
// //   console.log(person);
// // });

// // {name: 'Ruslan', age: 23, budget: 2500}
// // {name: 'Ali', age: 24, budget: 4200}
// // {name: 'Ramin', age: 21, budget: 2400}
// // {name: 'Isa', age: 26, budget: 3140}
// // _______________________________________________________________________________________________________________________________________

// // forEach
// // people.forEach((person) => console.log(person));

// // {name: 'Ruslan', age: 23, budget: 2500}
// // {name: 'Ali', age: 24, budget: 4200}
// // {name: 'Ramin', age: 21, budget: 2400}
// // {name: 'Isa', age: 26, budget: 3140}
// // void funksiyadi hecneyi return etmir!
// // ---------------------------------------------------------------------------------------------------------------------------------------

// // Map
// // let newArray = people.map((person) => `${person.name} (${person.age})`);
// // console.log(newArray); //  ['Ruslan (23)', 'Ali (24)', 'Ramin (21)', 'Isa (26)']
// // map massiv-de deyisiklik etmek ucun isdifade olunur!

// // ---------------------------------------------------------------------------------------------------------------------------------------

// // let adults = [];
// // for (let i = 0; i < people.length; i++) {
// //   if (people[i].age >= 18) {
// //     adults.push(people[i]);
// //   }
// // }
// // console.log(adults);
// // {name: 'Ruslan', age: 23, budget: 2500}
// // {name: 'Ali', age: 24, budget: 4200}
// // {name: 'Ramin', age: 21, budget: 2400}
// // {name: 'Isa', age: 26, budget: 3140}

// // (bu for ile olan hali  idi)
// // _____________________________________________________________________________________________________________________________________

// // Filter
// // const adults = people.filter((person) => {
// //   if (person.age >= 23) {
// //     return true;
// //   }
// // });
// // console.log(adults);
// // {name: 'Ruslan', age: 23, budget: 2500}
// //{name: 'Ali', age: 24, budget: 4200}
// //{name: 'Isa', age: 26, budget: 3140}

// // ---------------------------------------------------------------------------------------------------------------------------------------
// // // Reduce
// // let amount = people.reduce((total, person) => total + person.budget, 0);
// // console.log(amount); //12240

// // ---------------------------------------------------------------------------------------------------------------------------------------

// // const adults = people.find((person) => {
// //   if (person.age >= 23) {
// //     return true;
// //   }
// // });
// // console.log(adults);
// // // {name: 'Ruslan', age: 23, budget: 2500}
// // // ilk tapdigini verdi

// // ---------------------------------------------------------------------------------------------------------------------------------------
// // findIndex

// // const adults = people.findIndex((person) => {
// //   if (person.age > 23) {
// //     return true;
// //   }
// // });
// // console.log(adults);
// // 1
// //necenci index oldugunu bize gosterdi

// // ---------------------------------------------------------------------------------------------------------------------------------------
// // every
// // let info = people.every((person) => {
// //   return person.age >= 21;
// // });
// // console.log(info);
// // eyer 1 false olarsa false qaytaracax. hamsi true olmalidi

// // ---------------------------------------------------------------------------------------------------------------------------------------

// // some

// let info = people.some((person) => {
//   return person.age >= 25;
// });
// console.log(info); // true
// // 1 dene true olarsa true qaytarcax, hamsi false olsa false qaytaracax (en azi 1 true olmalidi)
// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// 1. *Ədədin Tək və ya Cüt olduğunu tapın*
//    İstifadəçidən bir ədəd alın və bu ədədin tək və ya cüt olduğunu müəyyən edən bir funksiyanı yazın.

// let tekVeCut = prompt("tek ve ya cut eded yazin");

// let result =
//   tekVeCut % 2 === 0 ? `cut eded ${tekVeCut}` : `tek eded ${tekVeCut}`;
// console.log(result);

// ______________________

// let tekVeCut2 = parseInt(prompt("Tek ve ya cut eded yazin"));

// if (!isNaN(tekVeCut2)) {
//   if (tekVeCut2 % 2 === 0) {
//     console.log(`${tekVeCut2} cut edetdi.`);
//   } else if (tekVeCut2 % 2 !== 0) {
//     console.log(`${tekVeCut2} tek edetdi.`);
//   }
// } else {
//   console.log("Tek ve ya cut eded yazin!");
// }
// -----------------------------------------------------------------------------------------------------------------------------

// 2. *Ədədlər arasında ən böyük ədədi tapın*
//    İstifadəçidən üç fərqli ədəd alın və bu ədədlər arasında ən böyüyünü tapmaq üçün bir funksiyanı yazın.

// let eded1 = parseFloat(prompt("birinci ededi yaz"));
// let eded2 = parseFloat(prompt("ikinci ededi yaz"));
// let eded3 = parseFloat(prompt("ucuncu ededi yaz"));
// if ((!isNaN(eded1), !isNaN(eded2), !isNaN(eded3))) {
//   if ((eded1 > eded2 && eded1 > eded3) || (eded1 > eded3 && eded1 > eded2)) {
//     console.log(
//       ` birinci eded  ${eded1} boyukdur diger iki eded ${eded2} ve ${eded3}`
//     );
//   } else if (
//     (eded2 > eded1 && eded2 > eded3) ||
//     (eded2 > eded3 && eded2 > eded1)
//   ) {
//     console.log(
//       `ikinci yazilan eded ${eded2} boyukdur diger iki eded ${eded1} ve ${eded3}`
//     );
//   } else if (
//     (eded3 > eded1 && eded3 > eded2) ||
//     (eded3 > eded2 && eded3 > eded1)
//   ) {
//     console.log(
//       `ucuncu yazilan eded ${eded3} boyukdur diger iki eded ${eded1} ve ${eded2}`
//     );
//   } else {
//     console.log(
//       "xais olunur 3 ferqli eded yazin! (elave nese yazmayin ve xanalari bos buraxmayin!)"
//     );
//   }
// } else {
//   console.log(
//     "xais olunur 3 ferqli eded yazin! (elave nese yazmayin ve xanalari bos buraxmayin!)"
//   );
// }
// ________________________________

// let a = parseFloat(prompt("birinci ededi yaz"));
// let b = parseFloat(prompt("ikinci ededi yaz"));
// let c = parseFloat(prompt("ucuncu ededi yaz"));

// let result = Math.max(a, b, c);
// if ((a !== b && a !== c) || (b !== a && b !== c) || (c !== b && c !== a)) {
//   console.log(result);
// } else {
//   console.log("hamsi beraberdir");
// }

// ---------------------------------------------------------------------------------------------------------------------------------
// 3. *Verilmiş ədədin faktorialını hesablayın*
//    İstifadəçidən bir ədəd alın və bu ədədin faktorialını hesablayan bir funksiyanı yazın.

// let user = parseFloat(prompt("isdediyiniz ededin faktorialini tapin"));
// let result = 1;
// if (0 < user) {
//   for (let i = 1; i <= user; i++) {
//     result *= i;
//   }
//   console.log(result);
// } else {
//   console.log("eded yazin ve 0-dan asagi hecne yazmayin!");
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// 4. *Ədədlər siyahısının cəmini tapın*
//    Verilmiş bir ədəd siyahısının cəmini hesablayan bir funksiyanı yazın.

// const ededler = [1, 2, 3, 4, 5];
// function hesablama(siyahi) {
//   return siyahi.reduce((a, b) => a + b);
// }
// console.log(hesablama(ededler));

// ---------------------------------------------------------------------------------------------------------------------------------

// 5. *Sətirdəki samit hərfləri sayın*
//    İstifadəçidən bir sətir alın və bu sətirdə neçə samit hərf olduğunu sayan bir funksiyanı yazın.

// bos, alinmadi
// ---------------------------------------------------------------------------------------------------------------------------------

// 6. *Ədədi çevirmək (reverse) və tərsinə yazdırmaq*
//    İstifadəçidən bir ədəd alın və bu ədədin rəqəmlərini tərsinə çevirərək ekrana yazdıran bir funksiyanı yazın.

// let user = prompt(
//   "isdediyiniz ededi yazin ve onun reqemlerinin tersini gorun!"
// );
// if (Number(user)) {
//   let tersEded = user.split("").reverse().join("");
//   console.log(tersEded);
// } else {
//   console.log("reqem ve ya eded yaz (ayri hecne yazma)!!");
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// 7. *Sətirdəki hərflərin sırasını dəyişdirin*
//    Verilmiş bir sətirin hərflərini tərsinə çevirən bir funksiyanı yazın.

// let user = prompt(
//   "isdediyiniz ededi yazin ve onun reqemlerinin tersini gorun!"
// );
// if (!Number(user)) {
//   let tersEded = user.split("").reverse().join("");
//   console.log(tersEded);
// } else {
//   console.log("ancaq string yaz (ayri hecne yazma)!!");
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// 8. *Fibonacci seriyasını yaratmaq*
//    İstifadəçidən neçə elementli bir Fibonacci seriyası yaratmaq istədiyini soruşun və bu seriyanı yaradan bir funksiyanı yazın.

// alinmadi

// ---------------------------------------------------------------------------------------------------------------------------------

// 9. *Sözün palindrom olub-olmadığını yoxlayın*
//    İstifadəçidən bir söz alın və bu sözün palindrom olub-olmadığını yoxlayan bir funksiyanı yazın.

// let user = prompt("Sözün palindrom olub-olmadığını yoxlayın");
// function isPalindrome(string) {
//   let reversed = user.split("").reverse().join("");
//   return reversed === string;
// }
// if (isPalindrome(user)) {
//   console.log(`${user} palindromdu`);
// } else {
//   console.log(`${user} palindrom deyil`);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// 10. *Sıralanmış siyahıda elementin yerini tapın (Binary Search)*
//     İstifadəçiyə sıralanmış bir siyahı verin və bu siyahıda müəyyən bir elementin yerini binary search algoritmi ilə tapmaq üçün bir funksiyanı yazın

// alinmadi

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// 1. area_of_rectangle
// User will enter the sides of rectangle: width and length. Create variables and assign these to variables. Later, calculate the area of the rectangle and alert it

// Istifadeci duzbucagin tereflerini daxil edecek: en ve uzunluq. Deyisenler yaradin ve bunlari hemin deyisenlere menimsedin. Daha sonra saheni hesablayin ve istifadeciye gosterin.

// let en = parseFloat(prompt("enini teyin edin"));
// let uzunluq = parseFloat(prompt("uzunluqu teyin edin"));

// let result = en + uzunluq;
// console.log(`en: ${en} uzunluq:${uzunluq} umumi sahe: ${result}`);

// ---------------------------------------------------------------------------------------------------------------------------------

// 2. age_calculator
// User will enter his/her birth date. Find his/her age and alert it.

// Istifadeci oz dogum ilini daxil edecek. Onun yasini tap ve goster.

// let user = prompt("dogum ilinizi yazin");
// let = date = new Date().getFullYear();
// let result = date - user;
// if (user >= 1900) {
//   console.log(` sizin ${result} yasiniz var`);
// } else {
//   console.log(
//     `${result} yasin olmasi mumkun deyil xais olunur dogum ilinizi duzgun teyin edesiz`
//   );
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// 3.km to mil
// Kilometr deyerini mil'e cevirin,  1km 0,6214 mile beraberdir.User'den kilometr deyerini alin ve alert ile mil deyerini gosterin.

// let user = parseInt(prompt("isdediyiniz km-in ml-sini oyrenin"));
// let result = user * 0.6214;
// console.log(`${user} km ${result} ml dir`);

// ---------------------------------------------------------------------------------------------------------------------------------

// 4. Isitfadeciden adini ve soyadini al, onlari birlesdirib tam shekilde ekrana cixar. (console-a) : meselen,
// Ali GreenHeart

// let name = prompt("adini yaz");
// let surname = prompt("soyadini yaz");

// function SurnameLastName(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }
// SurnameLastName(name);
// SurnameLastName(surname);
// console.log(`${SurnameLastName(name)} ${SurnameLastName(surname)}`);

// ---------------------------------------------------------------------------------------------------------------------------------

// 5. Istifadecinin adini al ve gozellesdirib ekrana cixarmaq, meselen, Ali   —> ~ ~ Ali ~ ~  , Rza —> ~ ~ Rza ~ ~

// let name = prompt("adini yaz");
// console.log(` ~~💕 ${name} 💕~~ `);

// ---------------------------------------------------------------------------------------------------------------------------------

/*6#### JavaScript-də ədədin kvadrat kökünü tapmaq üçün proqram yazın */

// let user = parseFloat(prompt("eded ve ya reqem yaz"));
// let result = Math.sqrt(user);
// console.log(result);

// ---------------------------------------------------------------------------------------------------------------------------------

/* 7### Selsi dəyərini Fahrenheit-ə çevirin. Düstur: fahrenheit = celsius * 1.8 + 32*/

// let celsius = parseFloat(prompt("celsius yaz (isdediyin eded ve reqemi yaz)"));

// let fahrenheit = celsius * 1.8 + 32;

// console.log(`${celsius}°C= ${fahrenheit}°F `);

// ---------------------------------------------------------------------------------------------------------------------------------

/* 8### Istifadəçinin daxil etdiyi nömrənin müsbət, mənfi və ya sıfır olduğunu təyin edin və göstərin(console.log)(if...else istifadə edin) */

let user = parseFloat(prompt("eded teyin edin"));
if (user === 0) {
  console.log(`isdifadeci ${user} teyin etdi`);
} else if (user < 0) {
  console.log(`${user} menfi edetdir`);
} else if (user > 0) {
  console.log(`${user} musbet edetdir`);
} else {
  console.log("xais olunur eded ve ya reqem yazin (elave nese yazmayin!)");
}

// ---------------------------------------------------------------------------------------------------------------------------------

/* 9### Rəqəmin tək və ya cüt olduğunu yoxlamaq üçün JavaScript proqramı yazın.(if...else istifadə edin)*/

// ---------------------------------------------------------------------------------------------------------------------------------

/* 10### JavaScript-də üç ədəd arasında ən böyüyü tapın.(Həm if else həm də Math.max() )*/
// ---------------------------------------------------------------------------------------------------------------------------------

/* 11### JavaScript-də sadə kalkulyator hazırlayın.(if else və switch case istifadə edin). ( 2 eded ve 1 operatoru (+, -) prompt-la alin). Sonra yoxlayin, operator +dursa, cemini ekrana cixarin ve s. */

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
