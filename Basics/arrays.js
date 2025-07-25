/*
Here, we will learn about arrays in javascript.
It is a non-primitive datatype.
They are used in almost anything and everything.
Also, when we declare a normal array in console, there are 2 nested prototypes. 
*/
let names = ["mike", "harvard", "louis"]
let codes = [223, 392, 128, 901, 475, 837, 172]
let codeNames = [39, "hello", 129, "world", 94]
const arr = [1, 2, 3, 4, 5]
const newCodes = codes.join()

console.log(`length : ${codes.length}`)
console.log(codes.includes(901))

names.push("jessica")
codes.pop()

console.log()
console.log(newCodes)
console.log(typeof newCodes)

/* 
Unshift and shift are not considered good as they shift the whole array. 
*/
codeNames.unshift(90)
codeNames.shift()

console.log()
console.log(names)
console.log(codes)
console.log(codeNames)

/*
Let's see slice and splice in arrays.
It's a common interview question about what they do. 
Slice does not change the original array but splice does.
*/
const sliceArr = arr.slice(1, 3)

console.log()
console.log("A :", arr)
console.log("slice :", sliceArr)

const spliceArr = arr.splice(1, 3)

console.log()
console.log("B :", arr)
console.log("splice :", spliceArr);

/*
Here, we will see more about arrays.
*/
const marvel = ["ironman", "spiderman", "captain america"]
const dc = ["batman", "superman", "flash"]

marvel.push(dc)

console.log("push operation")
console.log(marvel)

marvel.pop()

const allHeros = marvel.concat(dc)

console.log("\nconcat operation")
console.log(allHeros)

const newHeros = [...dc, ...marvel]

console.log("\nspread operation")
console.log(newHeros)

const myArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]], 11, 12]
const newArr = myArr.flat(Infinity)

console.log("\nflat operation")
console.log(newArr)

console.log()
console.log(Array.isArray("proficiencyhub95"))

console.log()
console.log(Array.from("proficiencyhub95"))

console.log()
console.log(Array.from({ username : "proficiencyhub95" }))

let stage1 = 10
let stage2 = 20
let stage3 = 30

console.log()
console.log(Array.of(stage1, stage2, stage3))