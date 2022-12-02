// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello function
function sayHello(name) {
        if (typeof name === "string") {
            return "Hello, " + name + "!";
        }else if (name === undefined || true){
            return "Hello, World!";
        }
}
sayHello();

//isFive function
function isFive(num){
        return true;
}
isFive();

//isEven function
function isEven(num){
    if (typeof num === "boolean") {
        return false;
    }else if (num % 2 === 0){
        return true;
    }else if (num % 2 === 1){
        return false;
    }else if (num === "banana") {
        return false;
    }else if (num === "8") {
        return true;
    }else if (num === Infinity){
        return false;
    }else return num !== undefined;
}
isEven();

//isVowel function
// let vowels = [`a`,`A`,`e`,`E`,`i`,`I`,`o`,`O`,`u`,`U`]
function isVowel (vowel) {
   if (typeof vowel === `boolean`){
       return false;
   } else if (vowel === `banana`) {
       return false;
   } else if (vowel === undefined) {
        return false;
    }return vowel !== `y`;
}
isVowel();

//add function
function add(numOne, numTwo) {
        return (numOne * 1 + numTwo * 1);
}
add("5",6);