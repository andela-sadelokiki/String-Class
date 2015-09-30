'use strict';

var check = null;

//checks if string contains vowel and returns corresponding boolean value
String.prototype.hasVowels = function() {
  check = /[aeiou]+/i;
  return check.test(this);
};

//converts string to uppercase by performing bitwise AND operation on the ASCII alphabetic characters
String.prototype.toUpper = function() {
  return this.replace(/[a-z]/g, function(txt) {
    return String.fromCharCode(txt.charCodeAt(0) & ~32)
  });
};

//converts string to lowercase by performing bitwise AND operation on the ASCII alphabetic characters
String.prototype.toLower = function() {
  return this.replace(/[A-Z]/g, function(txt) {
    return String.fromCharCode(txt.charCodeAt(0) + 32)
  });
};

//converts first character to uppercase and other characters to lower case
String.prototype.ucFirst = function() {
  return this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

//checks if string is a question and returns corresponding boolean value
String.prototype.isQuestion = function() {
  check = /[^?]+\?/;
  return check.test(this);
};

//returns list of words in string as an array
String.prototype.words = function() {
  return this.split(/\s+/);
};

//returns the number of words in the string
String.prototype.wordCount = function() {
  return this.words().length;
};

//three digits sets are matched with comma and the remaining digit(s)(capture group 1)from the end of the string
String.prototype.toCurrency = function() {
  return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

//digit followed by decimal is replaced with empty string and a number is returned
String.prototype.fromCurrency = function() {
  return parseFloat(this.replace(/[^\d\.]/g, ''));
};
