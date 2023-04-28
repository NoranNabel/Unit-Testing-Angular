const { expect } = require('chai');

const { capitalizeText, createArray, removePropertyFromObject } = require('../mochaLab');

describe('mocha lab functions', () => {
  describe('capitalizeText function', () => {
    it('Should return string when given a string', () => {
      const str = capitalizeText('hello world');
      expect(str).to.be.a('string');
    });

    it('Should return HELLO WORLD, if given hello world', () => {
      const str = capitalizeText('hello world');
      expect(str).to.eq('HELLO WORLD');
    });

    it('Should throw an error if a number is passed as a parameter', () => {
      expect(function () {
        capitalizeText(5);
      }).to.throw(Error);
    });
  });

  describe('createArray function', () => {
    it('Should return value of type array', () => {
      const arr = createArray(3);
      expect(arr).to.be.an('array');
    });

    it('Should have array of length 2 when passing 2 as a parameter', () => {
      const arr = createArray(2);
      expect(arr).to.be.lengthOf(2);
      expect(arr).to.include(1);
    });

    it("Should have array of length 3 and doesn't include 3 when passed as a parameter", () => {
      const arr = createArray(3);
      expect(arr).to.be.lengthOf(3);
      expect(arr).to.not.include(3);
    });
  });

  describe('removePropertyFromObject function', () => {
    it('Should not throw an error, if a property exists', () => {
      const obj = {
        name: 'bassel',
        hobbies: ['coding', 'sleeping'],
      };
      expect(function () {
        removePropertyFromObject(obj, 'name');
      }).to.not.throw(Error);
    });

    it('Should return an object', () => {
      const obj = {
        name: 'bassel',
        hobbies: ['coding', 'sleeping'],
      };
      const returnedObj = removePropertyFromObject(obj, 'hobbies');

      expect(returnedObj).to.be.an('object');
    });

    it('Should return the object with only hobbies after passing name as parameter', () => {
      const obj = {
        name: 'bassel',
        hobbies: ['coding', 'sleeping'],
      };
      const returnedObj = removePropertyFromObject(obj, 'name');

      expect(returnedObj).to.not.have.property('name');
      expect(returnedObj).to.have.property('hobbies');
    });

    it("Should throw an error if given key that doesn't exists in the object", () => {
      const obj = {
        name: 'bassel',
        hobbies: ['coding', 'sleeping'],
      };
      expect(function () {
        removePropertyFromObject(obj, 'job');
      }).to.throw(Error);
    });
  });
});
