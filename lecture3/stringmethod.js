//all string method
let str = "hello"
console.log(str.length) //length of string
console.log(str.toUpperCase()) //convert to uppercase
console.log(str.toLowerCase()) //convert to lowercase
console.log(str.indexOf("l")) //find index of first occurrence of "l"
console.log(str.lastIndexOf("l")) //find index of last occurrence of "l"
console.log(str.slice(1,4)) //extract a portion of the string from index 1 to 3
console.log(str.replace("l","x")) //replace first occurrence of "l" with "x"
console.log(str.replaceAll("l","x")) //replace all occurrences of "l" with "x"
console.log(str.split("")) //split the string into an array of characters
console.log(str.includes("lo")) //check if the string contains "lo"
console.log(str.startsWith("he")) //check if the string starts with "he"
console.log(str.endsWith("lo")) //check if the string ends with "lo"
console.log(str.trim()) //remove whitespace from both ends of the string
console.log(str.charAt(1)) //get the character at index 1
console.log(str.charCodeAt(1)) //get the Unicode value of the character at index 1
console.log(str.concat(" world")) //concatenate " world" to the string
console.log(str.repeat(3)) //repeat the string 3 times
console.log(str.padStart(10,"*")) //pad the string with "*" at the start until it reaches a length of 10
console.log(str.padEnd(10,"*")) //pad the string with "*" at the end until it reaches a length of 10
console.log(str.substring(1,4)) //extract a portion of the string from index 1 to 3
console.log(str.substr(1,3)) //extract a portion of the string from index 1 with length 3
console.log(str.match(/l/g)) //find all occurrences of "l" in the string
console.log(str.search("l")) //find the index of the first occurrence of "l"
console.log(str.localeCompare("hello")) //compare the string with "hello" (returns 0 if they are equal)