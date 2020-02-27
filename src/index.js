let numerals = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

let ty = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];

module.exports = function toReadable(number) {
    let strNumber = number.toString();

    if (number < 20) {
        return numerals[number];
    } else if (number < 100) {
        if (strNumber[1] === "0") {
            return ty[strNumber[0] - 2];
        }
        return ty[strNumber[0] - 2] + " " + numerals[strNumber[1]];
    } else {
        const firstPart = numerals[strNumber[0]];
        const tmp = Number.parseInt(strNumber.slice(1));
        const secondPart = (tmp === 0) ? "" : ` ${toReadable(tmp)}`;

        return firstPart + " hundred" + secondPart;
    }
};
