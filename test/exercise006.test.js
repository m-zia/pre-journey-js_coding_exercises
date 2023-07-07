import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} from "../challenges/exercise006";

//This function will receive an array of numbers and should return the sum
//of any numbers which are a multiple of 3 or 5
describe("sumMultiples", () => {
    test("adds up all the multiples of 3 or 5", () => {
        expect(sumMultiples([1,2,3,4,5,6])).toEqual(14);
        expect(sumMultiples([1,2,4])).toEqual(0);
        expect(sumMultiples([-2,-3,-5])).toEqual(-8);
        expect(sumMultiples([])).toEqual(0); //empty array test

    });
});


//This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string.
//A valid DNA string may contain characters C, G, T or A only.
describe("isValidDNA", () => {
    test("checks to see if the string contains 'C', 'G', 'T' or 'A' only", () => {
        expect(isValidDNA('CGTA')).toEqual(true);
        expect(isValidDNA('CCCC')).toEqual(true);
        expect(isValidDNA('ZZ')).toEqual(false);
        expect(isValidDNA('cccc')).toEqual(false); //lower case test
        expect(isValidDNA('')).toEqual(false); //empty string test
    });
});


//This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs.
//In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".

describe("getComplementaryDNA", () => {
    test("checks to see if the string contains 'C', 'G', 'T' or 'A' only", () => {
        expect(getComplementaryDNA('ACTG')).toEqual('TGAC');
        expect(getComplementaryDNA('TTTT')).toEqual('AAAA');
        expect(getComplementaryDNA('AAA')).toEqual('TTT');
    });
});


