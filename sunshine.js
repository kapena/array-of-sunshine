/**
  Write a function that takes a string of characters and
  converts the string to an array of the individual characters,
  reverses the array and returns the reversed string of the original.
  Bonus: Use RegEx to create the array
*/
function reverseString(str) {
  // turn a string into an array and split. 
  var convert = str.split("");
  // reverse array and convert back into a string with join.
var myReverse = convert.reverse().join("");
 return myReverse;
}

/**
  Write a function that takes two parameters as input in the order
  of string, character. 

  With the first string parameter use Array
  functionality. 

  Remove the last character and put it at the beginning
  of the array. 

  Then insert the character passed in the second
  parameter into the second to last position of the array.
  Then convert the array to a string and return it.
*/

function spliceString(str, char) {
  // Array functionality turns a string into an array. 
  // Splitting changes an array into string
  var strArray = str.split("");

  // Pop takes the value off the end of the array. 
  // Then replace catches the poped array . 
  // Unshift adds what was passed to it at the begging of the array. 
  // replace was passed to .unshift()

  var replace = strArray.pop();
  strArray.unshift(replace);

  // splice changes the content of an array by removing existing elements
  // -1 is the end of the array 
  // 0 is saying how many characters we are cutting. 
  // strArray is adding "char" to my array through the function

  strArray.splice(-1, 0,char);
  return strArray.join("");
}

/**
  Using the Array map() method write a function that takes an array
  of strings as input and returns a duplicate array with all strings
  in pig latin form. (Ex. "metal" => "etalmay".)
  Note: For now, do not worry about words like "chicken".
  Instead of "ickenchay", it should just become "hickencay".
*/


function speakPigLatin(strArray) {
  return strArray.map(function (wordz) {
  // turning a string into an array inside of map.
  var newwordz = wordz.split("");
  // removing first letter of wordz
  var removeFirstLetter = newwordz.shift();
  // passing in removeFirstLetter to newwordz and then adding the phrase "ay" to newwordz
  newwordz.push(removeFirstLetter,"ay");
  // joining everything we added to the newwordz variable
  return newwordz.join("");
  });
}
