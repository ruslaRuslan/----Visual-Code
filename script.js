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

// let user = parseFloat(prompt("eded teyin edin"));
// if (user === 0) {
//   console.log(`isdifadeci ${user} teyin etdi`);
// } else if (user < 0) {
//   console.log(`${user} menfi edetdir`);
// } else if (user > 0) {
//   console.log(`${user} musbet edetdir`);
// } else {
//   console.log("xais olunur eded ve ya reqem yazin (elave nese yazmayin!)");
// }

// ---------------------------------------------------------------------------------------------------------------------------------

/* 9### Rəqəmin tək və ya cüt olduğunu yoxlamaq üçün JavaScript proqramı yazın.*/

// let user = parseFloat(prompt("tek ve ya cut eded yaz"));
// // cox qisa yol ile
// let result = user % 2 === 0 ? `${user} cut eddetdir` : `${user} tek eddetdir`;
// console.log(result);
// ____________________________
// if else ile

// let user = parseFloat(prompt("tek ve ya cut eded yaz"));
// if (user % 2 === 0) {
//   console.log(`${user} cut eddetdir`);
// } else if (user % 2 !== 0) {
//   console.log(`${user} tek eddetdir`);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

/* 10### JavaScript-də üç ədəd arasında ən böyüyü tapın.(Həm if else həm də Math.max() )*/

// if else ile

// let a = parseFloat(prompt("birinci eded"));
// let b = parseFloat(prompt("ikinci eded"));
// let c = parseFloat(prompt("ucuncu eded"));

// if (a > b && c < a) {
//   console.log(
//     ` birinci-ci yazilan ${a} boyukdu ne ki ikinci yazilan ${b} ve ucuncu yazilan ${c}`
//   );
// } else if (b > a && c < b) {
//   console.log(
//     ` ikinci-ci yazilan ${b} boyukdu ne ki birinci-ci yazilan ${a} ve ucuncu yazilan ${c} `
//   );
// } else if (c > a && b < c) {
//   console.log(
//     `ucuncu yazilan ${c} boyukdu ne ki birinci yazilan ${a} ve ikinci yazilan ${b}`
//   );
// } else if (a === b && a === c && b === c) {
//   console.log(`${b} hamsi beraberdi`);
// } else {
//   console.log(
//     "xais olunur eded ve ya reqem yaz (bos buraxma ve elave nese yazma!)"
//   );
// }

// _______________________________

// Math.max() - ile

// let a = parseFloat(prompt("birinci eded"));
// let b = parseFloat(prompt("ikinci eded"));
// let c = parseFloat(prompt("ucuncu eded"));

// let result = Math.max(a, b, c);
// console.log(`${result} boyukdu digerlerinnen `);

// ---------------------------------------------------------------------------------------------------------------------------------

/* 11### JavaScript-də sadə kalkulyator hazırlayın.(if else və switch case istifadə edin). ( 2 eded ve 1 operatoru (+, -) prompt-la alin). Sonra yoxlayin, operator +dursa, cemini ekrana cixarin ve s. */

// switch - ile
// function calculate() {
//   let num = parseFloat(prompt("birinci reqemi teyin edin"));
//   let operator = prompt("+, -, *, / operator yaz");
//   let num2 = parseFloat(prompt("ikinci reqemi teyin edin"));
//   let result;
//   switch (operator) {
//     case "+":
//       result = num + num2;
//       break;
//     case "-":
//       result = num - num2;
//       break;
//     case "*":
//       result = num * num2;
//       break;
//     case "/":
//       result = num / num2;
//       break;
//     default:
//       console.log("xais olunur duz yazin!!");
//   }
//   console.log(`cavap: ${result}`);
// }
// calculate();
// ___________________________

// if - ile
// function calculate() {
//   let num = parseFloat(prompt("birinci reqemi teyin edin"));
//   let operator = prompt("+, -, *, / operator yaz");
//   let num2 = parseFloat(prompt("ikinci reqemi teyin edin"));
//   let result;
//   if (operator == "+") {
//     result = num + num2;
//   } else if (operator == "-") {
//     result = num - num2;
//   } else if (operator == "*") {
//     result = num * num2;
//   } else if (operator == "/") {
//     result = num / num2;
//   } else {
//     console.log("Yalnish (xais olunur duz yazin!!)");
//   }
//   console.log(`cavap: ${result}`);
// }
// calculate();

// ---------------------------------------------------------------------------------------------------------------------------------

// 12. Istifadeciden soz alin. Eger daxil etdiyi soz "user"-e beraber olsa console-a "xos geldin istifadeci", sozu cixsin. "admin" olsa "xos geldin cenab admin", "guest" olsa "xos geldin qonaq"

// let user = prompt("user ,admin ve ya guest yaz");
// if (user === "user") {
//   console.log("xos geldin istifadeci");
// } else if (user === "cenab") {
//   console.log("xos geldin cenab admin");
// } else if (user === "guest") {
//   console.log("xos geldin qonaq");
// } else {
//   console.log("user ,admin ve ya guest yaz!! (elave hecne yazma!!!)");
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// 13. FizzBuzz taski

// let fizz = prompt("Fizz");
// let buzz = prompt("Buzz");

// let result = "";
// if (fizz === "fizz" || fizz === "Fizz") {
//   result = fizz;
// }

// if (buzz === "buzz" || buzz === "Buzz") {
//   result += buzz;
// }
// console.log(result);

// ---------------------------------------------------------------------------------------------------------------------------------

// 14. Istifadeciden eded alin. Eger eded 2 reqemlidirse, console-a "eded ikireqemlidir" cixsin.

// let user = parseFloat(prompt("iki reqemli eded yaz"));
// if (user > 9 && user <= 99) {
//   console.log("eded ikireqemlidir");
// } else {
//   console.log("iki ededli reqemler yaz!!!!! (elave hecne yazma)");
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// 15. Istifadeciden eded alin. Eger eded hem 2ye ve hem de 5e bolunerse, console-a "bu istediyim ededdir" cixsin.

// let user = parseFloat(prompt("2-ye ve 5-e bolunen yaz"));
// if (user % 2 === 0 && user % 5 === 0) {
//   console.log(`${user} bu istediyim ededdir`);
// } else {
//   console.log("2-ye ve 5-e bolunen yaz!!!!! (elave hecne yazma)");
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// 16. 3 eded daxil edin. Onlarin cemi eger 100-den cox olarsa, console-a "cemleri kecdi 100u" cixsin.

// let num1 = parseFloat(prompt("birinci eded"));
// let num2 = parseFloat(prompt("ikinci eded"));
// let num3 = parseFloat(prompt("ucuncu eded"));

// function Cem() {
//   let result = num1 + num2 + num3;
//   return result;
// }
// if (Cem() > 100) {
//   console.log("cemleri kecdi 100-u");
// } else {
//   console.log(Cem());
// }

// -------------------------------------------------------------------------------------------------------------------

//17. Ureyimde bir reqem tutmusam 0-dan 50ye qeder. User her defesinde hemin ededi sorusun. Eger sehvdirse, yeniden sorussun. Duz olanda, kapital bank hesabinda 1000 manat kocurulsun console-a cixarin.
// *ADVANCED*: nece defeye tapdi, onu da cixarin. Tutaq ki,  ehsen, 10 defeye tapdin.
// *ADVANCED ADVANCED* :
//  eger addimin sayi 1 olanda olsun 1000 manat
//  eger addimlarin sayi 2,3,4,5 olarsa  olsun 750 manat
//  eger addimlarin sayi 6,7,8,9 olarsa  olsun 250 manat
//  eger addimlarin sayi 10+ olarsa  olsun -250 manat  (ozu bize pul versin)

// let secretNumber = Math.floor(Math.random() * 50) + 1;
// let attempts = 0;
// let prize = 0;

// while (true) {
//   let user = parseInt(prompt("1-den 50-ye qeder reqem yaz"), 10);

//   attempts++;

//   if (user === secretNumber) {
//     if (attempts === 1) {
//       prize = 1000;
//     } else if (attempts <= 5) {
//       prize = 750;
//     } else if (attempts <= 9) {
//       prize = 250;
//     } else {
//       prize = -250;
//       console.log(` 10 cehdi kecdi, ${prize} manat  (ozu bize pul versin).`);
//     }

//     if (attempts <= 10) {
//       console.log(`${attempts} cəhddə  ${prize} manat qazandin .`);
//     }
//     break;
//   } else {
//     alert("Yeniden Cehd!");
//   }
// }
// -------------------------------------------------------------------------------------------------------------------

// 18. 1-den verilen edede qeder olan ededlerin cemi.

// let user = parseFloat(prompt("eded daxil et"));
// let result = 0;
// if (1 <= user) {
//   for (let i = 0; i <= user; i++) {
//     result += i;
//   }
//   console.log(result);
// } else {
//   console.log("1-den yaz !!!(elave hecne yazma!!)");
// }

// -------------------------------------------------------------------------------------------------------------------
// 19. ekranda bu formada sekil cekin
// ****
// ***
// **
// *

// for (let i = 4; i >= 0; i--) {
//   console.log("*".repeat(i));
// }
// ----------------------------------------------------------------------------------------------

// 20.  1-den verilen edede qeder ededlerin hasili -=>  faktorial (5!= 1*2*3*4*5)

// promptla
// let user = parseFloat(
//   prompt("isdediyin ededin ve ya reqemin faktorialini tap")
// );
// let result = 1;
// if (Number(user)) {
//   for (let i = 1; i <= user; i++) {
//     result *= i;
//   }
//   console.log(result);
// } else {
//   console.log("eded ve ya reqem yaz (elave nese yazma!!)");
// }
// ____________________
// massiv-ile

// let array = [1, 2, 3, 4];
// let result = array.reduce((a, b) => a * b);
// console.log(result);

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//1. user prompt-la 2 eded daxil edecek. Siz, onlarin quvvetini tapacaqsiniz: tutaq ki, 2,5  ---> 2*2*2*2*2=32 ekrana cixmalidir.
// Diqqet edin ki, sizin ayrica funksiyalariniz olsun. Hem deyiseni prompt-la alib number-e ceviren funksiyaniz, hem hesablayan funksiyaniz ve hem de ekrana cixaran funksiyaniz. Bir sozle calisin funksiyalarla isleyin.

// Funksiya, istifadəçidən daxil edilmiş dəyəri alır və number tipinə çevirir

// const getNumber = (propsPrompt) => {
//   return prompt(propsPrompt).split(",").map(Number);
// };
// const calculate = (a, b) => {
//   return Math.pow(a, b);
// };
// const resultD = (result) => {
//   console.log(`cavap: ${result}`);
// };
// const [a, b] = getNumber("2 eded daxil edin");
// const result = calculate(a, b);
// resultD(result);
// ____________________

// let num1 = parseFloat(prompt("birinci eded"));
// let num2 = parseFloat(prompt("ikinci eded"));

// let result = Math.pow(num1, num2);
// if (num1 !== 0 && num2 !== 0) {
//   console.log(result);
// }
// if (num1 === 0 || num2 === 0) {
//   console.log(`0-i neye vursan 0 alinir ve neyi 0-a vursan 0 alinir`);
// } else {
//   console.log("eded yazin elave hecne yazmayin");
// }

// ----------------------------------------------------------------------------------------------
// 2. Sade funksiyalar yaradin. Calculator-a aid. (sum, multiply, divide, sqrt, subtract)

// const Sum = (a, b) => {
//   return a + b;
// };
// const Multiply = (a, b) => {
//   return a * b;
// };
// const Divide = (a, b) => {
//   if (a === 0 || b === 0) {
//     console.log("0-a bolunen ve 0-a bolen olmur! xais olunur duz yaz");
//   } else {
//     return a / b;
//   }
// };
// const Subtract = (a, b) => {
//   return a - b;
// };
// const Sqrt = (a, b) => {
//   return Math.sqrt(a, b);
// };

// console.log(Sum(6, 3));
// console.log(Subtract(6, 3));
// console.log(Multiply(6, 3));
// console.log(Divide(6, 3));
// console.log(Sqrt(16));

// ----------------------------------------------------------------------------------------------

// 3. logGreeting() adında funksiya tərtib edin hansıki konsola «[Adınız] is a JS developer» mesajı çıxarsın.
// let name = prompt("ad daxil edin");
// const logGreeting = (user) => {
//   return user;
// };
// console.log(logGreeting(`${name} is a JS developer`));

// ----------------------------------------------------------------------------------------------

// 4. İstifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

// let user = prompt("Ruslan, Ali ve ya Namiq adini yaz elave nese yazma");

// function UserProperty(words) {
//   words = words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();

//   const validNames = ["Ruslan", "Ali", "Namiq"];

//   if (validNames.includes(words)) {
//     return words;
//   } else {
//     return "Yalnış!!!";
//   }
// }

// console.log(`« ${UserProperty(user)} is active now » `);

// ----------------------------------------------------------------------------------------------

// 5. Parametr kimi ədədi qəbul edən və onu dördüncü dərəcə qüvvətə yülsəldərək konsolda göstərən fourth() funksiyasını yazın.

// const fourth = (number) => {
//   let result = Math.pow(number, 4);
//   console.log(result);
//   return result;
// };
// fourth(3);

// ----------------------------------------------------------------------------------------------

// # Evvelki movzulardan tasklar. Funksiyasiz.
// 6. Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın. (for ile yazin)

// for (let i = 100; i <= 990; i++) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }

// ----------------------------------------------------------------------------------------------

// 7. Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

// for (let i = 10; i <= 99; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// ----------------------------------------------------------------------------------------------

// 8. İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın. Meselen, 50-ye hansi ucreqemli ededler bolunur?: 100, 150, 200, 250, ...

// let user = parseFloat(prompt("isdediyiniz ededi yazin"));
// let result = 0;
// for (let i = 100; i <= 999; i++) {
//   if (i % user === 0) {
//     console.log((result += i));
//   }
// }
// console.log("imumi cem:" + result); // bunu yazsaqda olar yazmasaqda. (amma yuxaridakiler sertdi!)
// ----------------------------------------------------------------------------------------------
// 9. Bir add funksiyasi yazin. 3 arqument alsin. ilk 2si ededler (eded1 ve eded2) 3cusu ise, funksiya olsun. (callback). men o funksiyaya console.log ve ya alert verib, ozum teyin edim, neticeni alert-de gostersin, yoxsa console-da.

// add(3,5,console.log) //  console-a 8 yazmalidi
// add(3,5,alert) // alert-e 8 yazmalidi

// add funksiyası təyin edirik

// function add(eded1, eded2) {
//   return eded1 + eded2;
// }
// console.log(add(5, 3));
// alert(add(5, 3));

// ----------------------------------------------------------------------------------------------

// 10. Bir parametrli funksiya yazın, parametr olaraq cins(K,Q) və ad qəbul etsin.
// Həmin funksiya geriyə funksiya göndərsin.
// Geriyə göndərdiyi funksiyada əgər cins qadındırsa qarşısına Xanım, kişidirsə cənab yazılıb, console-a çıxarılsın.

// function greet(cins, ad) {
//   return function () {
//     let title;
//     if (cins === "Q") {
//       title = "Xanim";
//     } else if (cins === "K") {
//       title = "Cenab";
//     } else {
//       title = "";
//     }
//     console.log(`${title} ${ad}`);
//   };
// }
// const Qadin = greet("Q", "Ayla");
// Qadin();
// const Kishi = greet("K", "Ruslan");
// Kishi();

// ----------------------------------------------------------------------------------------------

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// Asagidaki tasklari arrow function isletmekle yaz:

// 1: usernameEmoji("alion","🦁") // 🦁alion🦁

// const usernameEmoji = (name, emoji) => {
//   let result = emoji + name + emoji;
//   console.log(result);
//   return result;
// };
// usernameEmoji("alion", "🦁");

// ----------------------------------------------------------------------------------------------

// 2. switch (adi kalkulyator, +, -, *, / desteklensin!)
// Task2: calculator(12,23,'+') // 35
// calculator(12,2,'*') // 24

// const calculator = (num1, num2, operator) => {
//   switch (operator) {
//     case "+":
//       console.log(num1 + num2);
//       return;
//     case "-":
//       console.log(num1 - num2);
//       return;
//     case "*":
//       console.log(num1 * num2);
//       return;
//     case "/":
//       if (num1 === 0) {
//         console.log("0 hecneye bolunmur");
//       } else if (num2 === 0) {
//         console.log("0-a hecne bolunmur");
//       } else {
//         console.log(num1 / num2);
//       }
//       return;

//     default: {
//       console.log("duzgun yaz");
//     }
//   }
// };
// calculator(10, 2, "*");
// calculator(10, 2, "/");
// calculator(10, 2, "-");
// calculator(10, 2, "+");
// calculator(10, 0, "/");
// calculator(0, 2, "/");

// ----------------------------------------------------------------------------------------------

// if/else
// 3  *: showClock(12, 30) // Saat 12-dir, 30 deqiqedir.
// showClock(11) // Saat 11-dir.  //  eger deqiqe verilmese, deqiqe hissesi yazilmasin

// const showClock = (saat, deqiqe) => {
//   if (Number(saat) && Number(deqiqe)) {
//     console.log(`saat ${saat}-dir, ${deqiqe} deqiqedir`);
//   } else {
//     console.log(`saat ${saat}-dir`);
//   }
// };
// showClock(12, 30);
// showClock(12);

// ----------------------------------------------------------------------------------------------

// switch
//4. Xos gelmisiniz, sozunun diger dillerde tercumesi
// Task4: translateWelcome("az") // Xos gelmisiniz
// translateWelcome("en") // Welcome
// translateWelcome("ru") // Dobro pojalovat
// translateWelcome("ir") // Khosh amedi!
// translateWelcome("basqaBirDil") // Bu dil desteklenmir!

// const translateWelcome = (language) => {
//   switch (language) {
//     case "az":
//       console.log("Xos gelmisiniz");
//       return;
//     case "en":
//       console.log("Welcome");
//       return;
//     case "ru":
//       console.log("Добро пожаловать");
//       return;
//     case "ir":
//       console.log("Khosh amedi");
//       return;
//     default:
//       console.log("Bu dil desteklenmir!");
//   }
// };
// translateWelcome("az");
// ----------------------------------------------------------------------------------------------
// 5: ageGroup(6) // usaq
// ageGroup(20) // genc
// ageGroup(50) // qoca
// ageGroup(90) // ahil
// verilen yasa gore yas qrupunu console-a yaz:
// [0-9]  usaq
// [9-25] genc,
// [26-45] yetkin
// [45-60]  qoca
// 80+ ahil

// const ageGroup = (age) => {
//   if (age <= 9) {
//     console.log("usaq");
//   } else if (age <= 25) {
//     console.log("genc");
//   } else if (age <= 45) {
//     console.log("yetkin");
//   } else if (age <= 60) {
//     console.log("qoca");
//   } else {
//     console.log("ahil");
//   }
// };
// ageGroup(66);

// ----------------------------------------------------------------------------------------------

// 6: repeatChar('a',5) // aaaaa
// verdiyim simvolu eded qeder tekrarlayib birlesdir

// const repeatChar = (char, repeat) => {
//   let result = char.repeat(repeat);
//   console.log(result);
//   return result;
// };
// repeatChar("a", 5);
// ____________________________________________

// ----------------------------------------------------------------------------------------------
// 7: repeatChar('😀', 6) // 😀😀😀😀😀😀

// const repeatChar2 = (char, count) => {
//   let result = "";
//   for (let i = 1; i <= count; i++) {
//     result += char;
//   }
//   return result;
// };
// console.log(repeatChar2("c", 3));

// ----------------------------------------------------------------------------------------------

// 8: repeatCharV2('😀', 10) // 10-u 2ye bol ve o qeder birlesdir 😀😀😀😀😀

// const repeatCharV2 = (char, count) => {
//   let result = "";
//   for (let i = 1; i <= count; i++) {
//     if (count % 2 === 0) {
//       let resultD = count / 2;
//       result = char.repeat(resultD);
//     }
//   }
//   return result;
// };
// console.log(repeatCharV2("😀", 10));

// ----------------------------------------------------------------------------------------------

// 9: repeatCharV3('😀', 5) // 5-den 1 vahid az birlesdir 😀😀😀😀

// const repeatCharV3 = (char, count) => {
//   let result = "";
//   for (let i = 1; i <= count; i++) {
//     if (true) {
//       let resultD = count - 1;
//       result = char.repeat(resultD);
//     }
//   }
//   return result;
// };
// console.log(repeatCharV3("😀", 5)); // 😀😀😀😀
// ----------------------------------------------------------------------------------------------

// 10: repeatCharV4(5) // "012345"

// const repeatCharV4 = (numbers) => {
//   let result = "";
//   for (let i = 0; i <= numbers; i++) {
//     result += i;
//   }
//   console.log(result);
//   return result;
// };
// repeatCharV4(5);  // 012345
// repeatCharV4(12); // "0123456789101112"
// repeatCharV4(9); // "0123456789"

// ----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------

// 11: repeatCharV5(13) // 024681012  -> verilen edede qeder cut ededleri birlesdir (if/else)

// const repeatCharV5 = (numbers) => {
//   let result = "";
//   for (let i = 0; i <= numbers; i++) {
//     if (i % 2 === 0) {
//       result += i;
//     }
//   }
//   console.log(result);

//   return result;
// };
// repeatCharV5(15);

// ----------------------------------------------------------------------------------------------

// 12: repeatCharV6(15) // 13579111315  -> verilen edede qeder tek ededleri birlesdir

// const repeatCharV6 = (numbers) => {
//   let result = "";
//   for (let i = 0; i <= numbers; i++) {
//     if (i % 2 !== 0) {
//       result += i;
//     }
//   }
//   console.log(result);

//   return result;
// };
// repeatCharV6(15);

// ----------------------------------------------------------------------------------------------

// 13: repeatCharV7(20, 6) // 6-12-18
// repeatCharV7(32, 8) // 8-16-24-32

// const repeatCharV7 = (char, count) => {
//   let result = [];
//   for (let i = count; i <= char; i += count) {
//     result.push(i);
//   }
//   console.log(result.join("-"));
//   return result;
// };

// repeatCharV7(32, 8); // 8-16-24-32
// repeatCharV7(20, 6); // 6-12-18
// _________________________________________-
// const repeatCharV7 = (end, interval) => {
//     let r = "";
//     for (let i = 1; i <= end; i++) {
//       if (i % interval === 0) {
//         r += `${i}-`;
//       }
//     }
//     return r;
//   };
//   console.log(repeatCharV7(20, 6));
//   console.log(repeatCharV7(32, 8));
// ----------------------------------------------------------------------------------------------

// 14: showClock(13,45) // Saat: 13 Deqiqe: 45
// showClock(16) // Saat: 16

// const showClock = (hours, minutes) => {
//   if (Number(hours) && Number(minutes)) {
//     console.log(`Saat: ${hours} Deqiqe: ${minutes}`);
//   } else if (null === minutes || undefined === minutes) {
//     console.log(`Saat: ${hours}`);
//   }
// };
// showClock(13, 45);
// showClock(16);
// // ----------------------------------------------------------------------------------------------
// 15: showClockAzeri(9, 5)// 09:05 -> 10-a isleyib 5 deqiqe
// showClockAzeri(8, 30) 8:30 -> 9-un yarisi
// showClockAzeri(12) -> 12 tamam
// showClockAzeri(11, 56) -> 12-ye qalib 4 deqiqe

// const showClockAzeri = (hours, minutes) => {
//   if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
//     console.log(``);
//   } else {
//     if (minutes === undefined || minutes == null || minutes === 0) {
//       console.log(`${hours} tamam`);
//     } else if (minutes === 30) {
//       console.log(`${hours + 1}-un yarsi`);
//     } else if (minutes < 30) {
//       console.log(`${hours + 1}-e isleyip ${minutes} deqiqe `);
//     } else if (minutes > 30) {
//       console.log(`${hours + 1}-e qalip ${60 - minutes} deqiqe`);
//     }
//   }
// };
// showClockAzeri(9, 5); //10-e isleyip 5 deqiqe
// showClockAzeri(8, 30); // 9-un yarsi
// showClockAzeri(12); // 12 tamam
// showClockAzeri(11, 56); // 12-e qalip 4 deqiqe

// // ----------------------------------------------------------------------------------------------
// 16: sum(1,100) ->  1-den 100-e qeder ededlerin cemini tap;
// sum(4, 9) -> 4-den 9-a qeder ededlerin cemini tap; -> 39

// const sum = (num1, num2) => {
//   let result = 0;
//   for (let i = num1; i <= num2; i++) {
//     result += i;
//   }
//   console.log(result);
//   return result;
// };
// sum(1, 100); //5050
// sum(4, 9);   //39
// ----------------------------------------------------------------------------------------------
// 17: edediOrta(2,6) //  10 ~> 2+3+4+5+6 = 20 / 2 =  10
// verilen ededlerin arasini topla ve ortalama qiymet cixart.

// const edediOrta = (num1, num2) => {
//   let result = 0;
//   for (let i = num1; i <= num2; i++) {
//     result += i;
//   }
//   let resultD = result / num1;
//   console.log(`${num1} = ${resultD}`);
// };
// edediOrta(2, 6);
// edediOrta(5, 10);

// ----------------------------------------------------------------------------------------------
// 18:
// repeatCharV8(1, 4, 10) //  1-5-9-
// repeatCharV8(2, 3, 8) // 2-5-8-
// repeatCharV8(4, 7, 20) // 4-11-18-

// const repeatCharV8 = (num1, num2, num3) => {
//   let result = `${num1}-${num1 + num2}-${(num3 = num1 + num2 + num2)}- `;
//   console.log(result);
//   return result;
// };
// repeatCharV8(1, 4, 10); //  1-5-9-
// repeatCharV8(2, 3, 8); // 2-5-8-
// repeatCharV8(4, 7, 20); // 4-11-18-

// ----------------------------------------------------------------------------------------------
// 19: {for, if} sumV2(start, end, number)
// sumV2(2, 13, 5) // 5, 10 ~> 15
// sumV2(1, 60, 13) // 13, 26, 39, 52 -> 130

// const sumV2 = (start, end, number) => {
//   let result = 0;
//   for (let i = start; i <= end; i++) {
//     if (i % number === 0) {
//       result += i;
//     }
//   }
//   console.log(result);

//   return result;
// };
// sumV2(2, 13, 5);
// sumV2(1, 60, 13);
// ----------------------------------------------------------------------------------------------

// 20: sumV3(num) -> 1-den 100e qeder intervalda, verilen edede bolunen ededlerin cemi
// sumV3(12) // 12, 24, 36, 48, 60, 72, 84, 96 ~> 432

// const sumV3 = (num) => {
//   let result = 0;
//   for (let i = 1; i <= 100; i++) {
//     if (i % num === 0) {
//       result += i;
//     }
//   }
//   console.log(result);
//   return result;
// };
// sumV3(12); //432
// sumV3(50); // 150

// ----------------------------------------------------------------------------------------------

// 21: {for, if} sumV4(50) : 1, 2, 5, 10, 25, 50 -> 93 dividend
// sumV4(12) // 1, 2, 3, 4, 6, 12 -> 28

// const sumV4 = (num) => {
//   let result = 0;
//   for (let i = 0; i <= num; i++) {
//     if (num % i === 0) {
//       result += i;
//     }
//   }
//   console.log(result);
//   return result;
// };
// sumV4(12);
// sumV4(10);

// ----------------------------------------------------------------------------------------------
// 22: {for} Ancaq 4 reqemli eded olacaq! sumV5(eded)
//sumV5(2018) -> bu ededin reqemlinin cemi: 2+0+1+8= 11
// sumV5(6785) -> bu ededin reqemlinin cemi: 6+7+8+5= 26

// const sumV5 = (eded) => {
//   if (1000 > eded || eded > 9999) {
//     return "yalnis 4 reqli eded yaz!!!";
//   }

//   let result = 0;
//   let stringNumber = eded.toString();
//   for (let i = 0; i < stringNumber.length; i++) {
//     result += parseInt(stringNumber[i]);
//   }
//   console.log(result);
//   return result;
// };
// sumV5(2018);
// sumV5(6785);

// ----------------------------------------------------------------------------------------------
// 23: sumV6(135)
// 1000-den 9999 (4reqemli ededlerin icerisinde verilen edede bolunen ededleri console-a yaz)

// const sumV6 = (number) => {
//   let result = "";
//   for (let i = 1000; i <= 9999; i++) {
//     if (i % number === 0) {
//       result += `${i},`;
//     }
//   }
//   console.log(result);
//   return result;
// };
// sumV6(135);
// sumV6(1000);
