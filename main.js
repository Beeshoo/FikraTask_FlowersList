let fs = require("fs")
let result= fs.readFileSync("./flower.txt").toString()

var lines = result.split('\n');
console.log(lines.length)
let countS = 0
for (let index = 0; index < lines.length; index++) {

    if (lines[index].charAt(0)== "S" || lines[index].charAt(0)== "s") {
        console.log(lines[index])
        countS++
    }
}
console.log(countS)

for (let index = 0; index < lines.length; index++) {

    if (lines[index].charAt(0)== "B" || lines[index].charAt(0)== "b") {
        console.log(lines[index])
    }
}

for (let index = 0; index < lines.length; index++) {

    if (lines[index].length == 5) {
        console.log(lines[index])
    }
}