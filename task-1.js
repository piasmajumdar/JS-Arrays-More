/**
 * Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let rev_colors = [];
for(let color of colors) {
    rev_colors.unshift(color);
}
console.log(rev_colors);