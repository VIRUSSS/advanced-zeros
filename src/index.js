module.exports = function getZerosCount(number, base) {
    const primeNumber = {};
    let tmpBase = base;
    for (let i = 2; i <= tmpBase; i++) {
        if (tmpBase % i == 0) {
            let c = 0;
            while (tmpBase % i == 0) {
                tmpBase /= i;
                c++;
            }
            primeNumber[i] = c;
        }
    }

    const res = [];
    for (let item in primeNumber) {
        let tmpNumber = number;
        let c = 0;
        while (tmpNumber != 0) {
            tmpNumber = Math.floor(tmpNumber/item);
            c += tmpNumber;
        }
        res.push(Math.floor(c / primeNumber[item]));
    }
    return Math.min.apply(null, res);
}