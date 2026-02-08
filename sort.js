const persons = ['rakib', 'akib', 'nokib', 'sakib', 'Pakib', 'anis', 'Anis'];

const sortedPersons = persons.sort();
console.log(sortedPersons);

//sort -->
// const numbers = [4, 7, 2, 8, 3, 6];
/**
 * Ascending ---> smaller to larger: [2, 3, 4, 6, 7, 8]
 * Descending --> larger to smaller: [8, 7, 6, 4, 3, 2]
*/

const numbers = [4, 7, 12, 8, 43, 6, 1];

const numbers_asc = numbers.sort(); //--> Not working; Sort by  String
console.log(numbers_asc)

const number_asc_sort = [...numbers].sort(function(a,b) {return a - b});
const numers_dsc_sort = [...numbers].sort(function(a,b) {return b - a});
console.log(number_asc_sort);
console.log(numers_dsc_sort);