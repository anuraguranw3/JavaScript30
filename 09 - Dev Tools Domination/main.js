const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("Regular");

// Interpolated
console.log("this is %s console log.", "Interpolated")

// Styled
console.log("%c This is styled console log.", "color: red; font-size: 32px;");

// warning!
console.warn("Problem! (this is console.warn)");

// Error :|
console.error("Error! (console.error)");

// Info
console.info("info from (console.info)");

// Testing
console.assert(1 === 0, "1 is not equal to 0");

// clearing
// console.clear();  // clears the console

// Viewing DOM Elements
console.log("console.dir(dogs)");
console.dir(dogs);

// Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.groupEnd(`${dog.name}`);
})

// counting
console.count("counting");
console.count("counting");
console.count("counting");
console.count("counting");
console.count("counting");
console.count("counting");
console.count("counting");
console.count("counting");
console.count("counting");
console.count("counting");

// timing
console.time("fetching took");
fetch("https://api.github.com/users/anuraguranw3")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fetching took");
        console.log(data);
    });

console.table(dogs);