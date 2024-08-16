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
