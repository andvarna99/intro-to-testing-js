// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//unit test for sayHello function
describe('sayHello',function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

//unit test for isFive function

describe('isFive',function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return true no matter what when executed', function () {
        expect(typeof isFive()).toBe("boolean");
    });
});

//unit test for isEven function

describe('isEven',function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return true no matter what the input when executed', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when executed with 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when executed with "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when executed with Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed with boolean inputs', function() {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed without an argument', function () {
        expect(isEven()).toBe(false);
    });
});

//unit test for the isVowel function
describe('isVowel',function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean when executed', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when executed with "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when executed with "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when executed with "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when executed with boolean inputs', function() {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when executed with "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when executed without an argument', function () {
        expect(isVowel()).toBe(false);
    });
});

//unit test for the add function
describe('add',function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when executed with 2 and 3', function() {
        expect(add(2,3)).toBe(5);
    });
    it('should return -12 when executed with -3 and -9', function() {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return 11 when executed with "5" and 6', function() {
        expect(add("5",6)).toBe(11);
    });
    it('should return 6 when executed with "-4" and "10"', function() {
        expect(add("-4","10")).toBe(6);
    });
    it('should return NaN when executed with "banana" and "split"', function() {
        expect(add("banana","split").toString()).toBe("NaN");
    });
    it('should return NaN when executed with 2 and "apples"', function() {
        expect(add(2,"apples").toString()).toBe("NaN");
    });
    it('should return NaN when executed with nothing', function() {
        expect(add().toString()).toBe("NaN");
    });
});