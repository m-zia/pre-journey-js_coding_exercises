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
    });

    test("empty array test", () => {
        expect(sumMultiples([])).toEqual(0);
    });

    test("works with decimals", () => {
        expect(sumMultiples([1.0,2.0,4.0])).toEqual(0);
        expect(sumMultiples([-2.0,-3.0,-5.0])).toEqual(-8);
    });
});


//This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string.
//A valid DNA string may contain characters C, G, T or A only.
describe("isValidDNA", () => {
    test("checks to see if the string contains 'C', 'G', 'T' or 'A' only", () => {
        expect(isValidDNA('CGTA')).toEqual(true);
        expect(isValidDNA('CCCC')).toEqual(true);
        expect(isValidDNA('ZZ')).toEqual(false);
    });

    test("checks to see if the lower case strings are recognised", () => {
        expect(isValidDNA('cgta')).toEqual(false);
        expect(isValidDNA('cccc')).toEqual(false);
        expect(isValidDNA('zz')).toEqual(false);
        expect(isValidDNA('cccc')).toEqual(false);
    });

    test("works with an empty string", () => {
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

    test("checks to see if it works with an empty string", () => {
        expect(getComplementaryDNA('')).toEqual('');
    });
});

//Test to see if a Number is Prime
describe("isItPrime", () => {
    test("checks to see if a number is prime", () => {
        expect(isItPrime(9)).toEqual(false);
        expect(isItPrime(3)).toEqual(true);
        expect(isItPrime(30)).toEqual(false);
        expect(isItPrime(73)).toEqual(true);
    });

    test("minus number test", () => {
        expect(isItPrime(-9)).toEqual(false);
        expect(isItPrime(-3)).toEqual(false);
        expect(isItPrime(-30)).toEqual(false);
        expect(isItPrime(-73)).toEqual(false);
    });
});



//This function should receive a number and return an array of n arrays, each filled with n items. 
//The parameter "fill" should be used as the filler of the arrays. 
describe("createMatrix", () => {
    test("checks to see if the matrix functions works", () => {
        expect(createMatrix(3,"foo")).toEqual( [["foo", "foo", "foo"],["foo", "foo", "foo"],["foo", "foo", "foo"]]);
        expect(createMatrix(2,"hello")).toEqual([["hello", "hello"],["hello", "hello"]]);
    });
});


//This function takes an array of staff objects in the format:
// and a day of the week. For the café to run successfully, at least 3 staff members are required per day. 
//The function should return true/false depending on whether there are enough staff scheduled for the given day.
describe("areWeCovered", () => {
    test("test when there aren't enough people", () => {
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] }, { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]}],
    "Tuesday"
        )).toEqual(false);
    });

    test("test when there are enough people", () => {
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] }, { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]},
         {name: "Goku", rota: ["Tuesday", "Friday"] }],
    "Tuesday"
        )).toEqual(true);
    });
});





