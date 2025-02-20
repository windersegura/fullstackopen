
const numbers = [1,2,3,4,5,6];
const heroe = {
    name: "Hulk",
    age: 35,
    company: "Marvel"
}

const newNumbers = [...numbers, 7,8,9,10];

numbers.map((item) => {
    console.log(item * 3);
    
})

console.log(heroe);
console.log(newNumbers);


// const talk = ({name, age}) => {
//     console.log(name);
//     console.log(age);
// }

// talk(heroe);