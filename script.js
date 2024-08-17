const name = "Ruslan and Ali";

// console.log(name.length); // 14 (metnin sayir)
//---------------------------------------------------

// console.log(name.includes("us")); //true
// console.log(name.includes("and", 7)); //true (baslangicdan and-e qeder true onan sonra false olacax!)
// console.log(name.includes("and", 8)); //false (baslangicdan and-e qeder true onan sonra false olacax!)
// console.log(name.includes("d ")); //true
// console.log(name.includes("8nd")); //false
// eyer metndeki yaziraldan biri varsa true verecek. Eyer yoxdusa false qaytaracax!

//----------------------------------------------------------------------------------------------

// console.log(name.indexOf("and Ali")); // 7 necenciden basladigini gosterir (eyer sef olarsa -1 verecek)

// console.log(name.indexOf("Ali", 11)); // 11 reqemi 0-dan 11-e qeder ne reqem yazsam 11 verecek (eyer sef yazsam -1 verecek)

//----------------------------------------------------------------------------------------------
// console.log(name.lastIndexOf("Ali", 11)); // 11 reqemi 11-dan yuxari ne reqem yazsam 11 verecek (eyer 11-den asagi yazsam -1 verecek)

// console.log(name.lastIndexOf("and", 1201)); // 7 reqemi 7-dan yuxari ne reqem yazsam 7 verecek (eyer 11-den asagi yazsam -1 verecek)

//----------------------------------------------------------------------------------------------
// console.log(name.repeat(3)); // Ruslan and AliRuslan and AliRuslan and Ali  (3 defe tekrar string-de olani tekrar qaytarir qaytarir.)

//----------------------------------------------------------------------------------------------

// console.log(name.replace("and", "&")); // Ruslan & Ali (var olan stringi isdediyimizle evez ede bilerik)

//----------------------------------------------------------------------------------------------

// console.log(name.slice(0, 3)); // Rus
// console.log(name.slice(8, 10)); // nd
// console.log(name.slice(8)); // nd Ali
// console.log(name.slice(2, 12)); // slan and A
// console.log(name.slice(5, 8)); // n a
// console.log(name.slice(4, 8));
// console.log(name.slice(3, 7)); // lan
// console.log(name.slice(5, 9)); // n an (5-den basdiyacax 9 olmamis dayanacax)

//----------------------------------------------------------------------------------------------

// console.log(name.split(" ")); //  ['Ruslan', 'and', 'Ali']
// split string-i massive yigir

//----------------------------------------------------------------------------------------------
// console.log(name.toLowerCase()); //ruslan and ali (hamsini kiciltdi)
// console.log(name.toUpperCase()); // RUSLAN AND ALI (hamsini boyutdu)

//----------------------------------------------------------------------------------------------

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// let ad = "            Salam 57            ";
// console.log(ad.trim()); //Salam 57  (sonan ve evvelden bosluqlari silir)

// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_Massiv-in metodlari_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let people = [
  {
    name: "Ruslan",
    age: 23,
    budget: 2500,
  },
  {
    name: "Ali",
    age: 24,
    budget: 4200,
  },
  {
    name: "Ramin",
    age: 21,
    budget: 2400,
  },
  {
    name: "Isa",
    age: 26,
    budget: 3140,
  },
];
// forEach
// people.forEach(function (person) {
//   console.log(person);
// });

// {name: 'Ruslan', age: 23, budget: 2500}
// {name: 'Ali', age: 24, budget: 4200}
// {name: 'Ramin', age: 21, budget: 2400}
// {name: 'Isa', age: 26, budget: 3140}
// _______________________________________________________________________________________________________________________________________

// forEach
// people.forEach((person) => console.log(person));

// {name: 'Ruslan', age: 23, budget: 2500}
// {name: 'Ali', age: 24, budget: 4200}
// {name: 'Ramin', age: 21, budget: 2400}
// {name: 'Isa', age: 26, budget: 3140}
// void funksiyadi hecneyi return etmir!
// ---------------------------------------------------------------------------------------------------------------------------------------

// Map
// let newArray = people.map((person) => `${person.name} (${person.age})`);
// console.log(newArray); //  ['Ruslan (23)', 'Ali (24)', 'Ramin (21)', 'Isa (26)']
// map massiv-de deyisiklik etmek ucun isdifade olunur!

// ---------------------------------------------------------------------------------------------------------------------------------------

// let adults = [];
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i]);
//   }
// }
// console.log(adults);
// {name: 'Ruslan', age: 23, budget: 2500}
// {name: 'Ali', age: 24, budget: 4200}
// {name: 'Ramin', age: 21, budget: 2400}
// {name: 'Isa', age: 26, budget: 3140}

// (bu for ile olan hali  idi)
// _____________________________________________________________________________________________________________________________________

// Filter
const adults = people.filter((person) => {
  if (person.age >= 23) {
    return true;
  }
});
console.log(adults);
// {name: 'Ruslan', age: 23, budget: 2500}
//{name: 'Ali', age: 24, budget: 4200}
//{name: 'Isa', age: 26, budget: 3140}
