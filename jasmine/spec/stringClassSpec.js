'use strict';

describe('String', function() {

  describe('hasVowels', function() {

    it('should return typeof Boolean', function() {
      expect('sleep'.hasVowels()).toEqual(jasmine.any(Boolean));
    });
    it('should return true if it contains a vowel', function() {
      expect('sleep'.hasVowels()).toBeTruthy();
      expect('dsr'.hasVowels()).toBeFalsy();
    });

  });

  describe('toUpper', function() {

    it('should return typeof String', function() {
      expect('sleep'.toUpper()).toEqual(jasmine.any(String));
    });
    it('should return string converted to Uppercase', function() {
      expect('susan'.toUpper()).toMatch('SUSAN');
      expect('toUpPer'.toUpper()).toMatch('TOUPPER')
    });

  });

  describe('toLower', function() {

    it('should return typeof String', function() {
      expect('BUILDING'.toLower()).toEqual(jasmine.any(String));
    });
    it('should return string converted to Lowercase', function() {
      expect('BUILDING'.toLower()).toMatch('building');
      expect('toLower'.toLower()).toMatch('tolower');
    });

  });

  describe('ucFirst', function() {

    it('should return typeof String', function() {
      expect('stuff'.ucFirst()).toEqual(jasmine.any(String));
    });
    it('should change the First Character of the string to an Upper case.', function() {
      expect('sleep'.ucFirst()).toMatch('Sleep')
      expect('susan loves food'.ucFirst()).toEqual("Susan Loves Food");
    });

  });

  describe('isQuestion', function() {

    it('should return typeof Boolean', function() {
      expect('susan loves me?'.isQuestion()).toEqual(jasmine.any(Boolean));
    });
    it('should return true if it is a question', function() {
      expect('susan loves me?'.isQuestion()).toBeTruthy();
      expect('?susan loves me'.isQuestion()).toBeFalsy();
    });

  });

  describe('words', function() {

    it('should return typeof Object and instanceof Array', function() {
      expect('susan loves me'.words()).toEqual(jasmine.any(Object));
      expect('susan loves me'.words() instanceof Array).toBeTruthy();
    });
    it('should return split words in an array', function() {
      expect('susan loves me'.words()).toEqual(['susan', 'loves', 'me']);
    });

  });

  describe('wordCount', function() {
    it('should return typeof Boolean', function() {
      expect('respect'.wordCount()).toEqual(jasmine.any(Number));
    });
    it('should return length of words in string', function() {
      expect('respect'.wordCount()).toEqual(1);
      expect('i love food'.wordCount()).toEqual(3);
    });

  });

  describe('toCurrency', function() {

    it('should return typeof String', function() {
      expect('21092.31'.toCurrency()).toEqual(jasmine.any(String));
    });
    it('should return a currency representation of the string', function() {
      expect('21092.31'.toCurrency()).toEqual('21,092.31');
    });

  });

  describe('fromCurrency', function() {

    it('should return typeof String', function() {
      expect('21,092.31'.fromCurrency()).toEqual(jasmine.any(Number));
    });
    it('should return a number representation of the Currency String', function() {
      expect('21,092.31'.fromCurrency()).toEqual(21092.31);
    });

  });

});
