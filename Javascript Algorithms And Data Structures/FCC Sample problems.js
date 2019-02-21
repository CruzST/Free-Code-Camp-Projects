/* INDEX
Intermediate Algorithm Scripting: Diff Two Arrays
Intermediate Algorithm Scripting: Seek and Destroy
Intermediate Algorithm Scripting: Wherefore art thou
Intermediate Algorithm Scripting: Pig Latin
Intermediate Algorithm Scripting: DNA Pairing
*/


/********************************************************************************************
*********************************************************************************************
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Note
You can return the array with its elements in any order.
*/

/** 
Solution 1
Create a function that checks arrays first and second.
It them pushes elements from the second, that ARE NOT in the first.
Run 2 times for both array conditions.
**/
function diffArray(arr1, arr2) {
  var newArr = [];

  function filter(first, second){
    for(let i = 0; i < second.length; i++){
      if (first.includes(second[i]) == false){
        newArr.push(second[i]);
      }
    }
  }

  filter(arr1, arr2);
  filter(arr2, arr1);

  return newArr;
}


/**
Solution 2
Concat the 2 arrays to form one big one.
Then filter through that big array.
It will return if the item in the big array is not present in arr1 both arr2.
**/
function diffArray(arr1, arr2){
	return arr1.concat(arr2).filter( element => !(arr1.includes(element) && arr2.includes(element)) )
}



/* Examples

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]
1, 1, 2, 2, 3, 3, 4, 5, 5
*/



/********************************************************************************************
*********************************************************************************************
Intermediate Algorithm Scripting: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

/* Solution
Create an array of the targets using Array.from, slice it starting from 1.
Filter the main array, returning values that are not present in the target array.
*/
function destroyer(arr) {
  // Remove all the values

  var targets = Array.from(arguments).slice(1);
  return arr.filter( (val) => !targets.includes(val) );


}

/*
Examples
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/



/********************************************************************************************
*********************************************************************************************
Intermediate Algorithm Scripting: Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, 
that was passed on as the second argument.
*/



function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet

  // Create an array of the keys
  var keyArr = Object.keys(source);

  // Filter through the collection 
  return collection.filter(function (obj) {
    // check each key in the key array and see if they all are true or not.
    return keyArr.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

/* Exmamples
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
*/



/********************************************************************************************
*********************************************************************************************
Intermediate Algorithm Scripting: Pig Latin
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

/*
Solution
*/
function translatePigLatin(str) {

  let newStr = '';
  let regex = (/[aeiou]/gi);

  // case 1: beginning of string is vowel
  if (str[0].match(regex))
  {
    newStr =  str + 'way';
  }
  // case 2: the strng is just consonants
  else if (str.match(regex) === null)
  {
    newStr = str + 'ay';
  }
  // case 3: starts with consonant and need to find the first vowel.
  else
  {
    //
    let vowelStart = str.indexOf(str.match(regex)[0]);
    newStr = str.slice(vowelStart) + str.slice(0, vowelStart) + 'ay';
  }

  return newStr;
}

/* Examples
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/



/********************************************************************************************
*********************************************************************************************
Intermediate Algorithm Scripting: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
/* Solution 1 - Basic*/
function pairElement(str) {
  let returnArray = [];
  let strArray = str.split("");

  for (let i = 0; i < strArray.length; i++){
    let localPair = [];
    let pairLetter = pairCase(strArray[i]);
    localPair.push(strArray[i], pairLetter);
    returnArray.push(localPair);
  }

  return returnArray;
}
/* Function will return the corresponding letter */
function pairCase(letter){
  switch(letter){
    case 'T':
      return 'A';
      break;
    case 'A':
      return 'T';
      break;
    case 'C':
      return 'G';
      break;
    case 'G':
      return 'C';
      break;
  }
}

/* Solution 2 - Medium*/

function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    }
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x,pairs[x]]);
  }

/* Examples
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/