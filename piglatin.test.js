
console.log("hello");

const translate = require("./piglatin.js")

describe("translate", function(){
    test("look for A in the word Apple return appley", function (){
        expect(translate("Apple")).toEqual("appleway");
    });
    test("look for e in the word Easy return Easyy", function (){
        expect(translate("Easy")).toEqual("easyway");
    });
    test("look for I in the word island return islandway", function (){
        expect(translate("Island")).toEqual("islandway");
    });
    test("look for O in the word Owner return owenerway", function (){
        expect(translate("owner")).toEqual("ownerway");
    });
    test("look for U in the word upper return upperway", function (){
        expect(translate("Upper")).toEqual("upperway");
    });

//move first letter to the end and add -ay
    test("look for H in the word Hello return ellohay", function (){
        expect(translate("Hello")).toEqual("ellohay");
    });
// 2 consonent more first 2 letters to the end and add -ay
    test("2 consonentof word Fruit  => uitfray" , function (){
        expect(translate("fruit")).toEqual("uitfray");
    });
});

