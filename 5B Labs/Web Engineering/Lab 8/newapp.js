let i;
i = 97;
const letters = new Set();
while (i <= 122) {
    letters.add(String.fromCharCode(i));
    i++;
}
console.log(letters)
