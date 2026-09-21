let num = 142
let string = "132"
let boolean = true
let nullValue = null

console.log(num)

let convertedNumber = String(num)
console.log(convertedNumber);
console.log(typeof(convertedNumber));

let convertedString = Number(string)
console.log(convertedString);
console.log(typeof(convertedString));

let convertedBoolean = Number(boolean)
console.log(convertedBoolean);
console.log(typeof(convertedBoolean));

let convertedNull = Number(nullValue)
console.log(convertedNull);
console.log(typeof(convertedNull));

let convertedNull2 = String(nullValue)
console.log(convertedNull2);
console.log(typeof(convertedNull2));

// Operations //

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%3);

let str1 = "Hello "
let str2 = "Mello"

console.log(str1 + str2);

console.log("1" + 1);   // 11
console.log(1 + "1");   // 11
console.log("1" + "1");   // 11
console.log("1" + 1 + 1);   // 111
console.log(1 + 1 + "1");   // 21
console.log(1 + 1 + "1" + 1);  // 211

let hitPoints = 100

console.log(hitPoints++); // Answer was 100 because the ++ was after the operation

console.log(++hitPoints);   // Answer was 102 because the ++ was before the operation,
                            //  so it added 1 to the value before it was printed

