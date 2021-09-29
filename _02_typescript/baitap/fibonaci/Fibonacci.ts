function isFibonacci(number) {
    if (number <= 1) {
        return 1;
    }
    else {
        return isFibonacci(number - 1) + isFibonacci(number - 2);
    }
}

console.log("Day so fibonacci la : ");
var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(isFibonacci(i));
    sum += isFibonacci(i);
}
console.log("Tong fibonacci la :" + sum);
