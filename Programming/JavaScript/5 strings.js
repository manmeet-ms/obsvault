const building = "Twin Towers"
const airline = new String('American Airlines')
console.log(`this is string interpolation This \$\{\} act as variable's placeholders. Like building = ${building}, Floors ${112}`);

console.log(airline.__proto__); //access all methods with this

// String methods
console.log(airline.toUpperCase()); //returns a new string
console.log(airline.charAt(2));
console.log(airline.indexOf('c'));

let gameName = 'LtJade#14521'

console.log(gameName);
console.log(`Length ${gameName.length}`);
console.log(`substring ${gameName.substring(0,4)}`);// always starts from zeroth index
console.log(`Slice ${gameName.slice(7,-3)}`);// cane take neg indices, reads backwards

// trim method
// replace method
// includes method
// split method
