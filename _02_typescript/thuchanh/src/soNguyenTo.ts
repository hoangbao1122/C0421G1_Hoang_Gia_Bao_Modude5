function isPrime(number: number): boolean {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
let array = [5,55,100,7,9,3];
let tong = 0;
for (let number of array) {
    if (isPrime(number)) {
        tong += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + tong);
