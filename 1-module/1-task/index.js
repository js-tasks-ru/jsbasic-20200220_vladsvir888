/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
 
function factorial(n) {
	let factorial = 1;
	let i = 2;

	while(i <= n) {
		factorial *= i;
		i++;
	}

	return factorial;
}
