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