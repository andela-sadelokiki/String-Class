'use strict';

var result, check;

String.prototype.hasVowels = function() {

  //check if string contains vowel and returns corresponding boolean value
  check = /[aeiou]+/i;
  result = check.test(this);
  return result;
};

String.prototype.toUpper = function() {
  result = this.toUpperCase();
  return result;
};

String.prototype.toLower = function() {
  result = this.toLowerCase();
  return result;
};

String.prototype.ucFirst = function() {

  //converts first character to uppercase and other characters to lower case
  result = this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  return result;
};

String.prototype.isQuestion = function() {

  //check is string is a question and returns corresponding boolean value
  check = /[^?]+\?/;
  result = check.test(this);
  return result;
};

String.prototype.words = function() {

  //returns list of words in string as an array
  result = this.split(/\s+/);
  return result;
};

String.prototype.wordCount = function() {
  return this.words().length;
};

String.prototype.toCurrency = function() {

  //three digits sets are matched with comma and the remaining digit(s)(capture group 1)from the end of the string
  result = this.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return result;
};

String.prototype.fromCurrency = function() {

  //digit followed by decimal is replaced with empty string and a number is returned
  result = parseFloat(this.replace(/[^\d\.]/g, ''));
  return result;
};
