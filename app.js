// Reduce - can replace map and filter however it is more challanging
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 paramiter ('curr') - current iteration/value

const people = [
    {name:'bob', age:20, position:'developer', id:1, salary:200},
    {name:'peter', age:25, position:'designer', id:2, salary:300},
    {name:'susy', age:30, position:'the boss', id:3, salary:500},
    {name:'anna', age:35, position:'the boss', id:4, salary:500},
];

const total = people.reduce(function(acc,currItem) {
    console.log(`total ${acc}`);
    console.log(`current money: ${currItem.salary}`);
    acc += currItem.salary; // Iterator
    return acc;             // MUST RETURN first valur from callback functioin    
}, 500);                    // Initial value

console.log(total);
   