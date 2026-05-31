/**
 * Calculate common numeric results for two values.
 * Returns an object with: isValid, sum, diff, product, quotient, average, min, max
 */
function calculateNumbers(var1, var2) {
	const a = Number(var1);
	const b = Number(var2);

	const isValid = Number.isFinite(a) && Number.isFinite(b);

	if (!isValid) {
		return {
			isValid: false,
			sum: NaN,
			diff: NaN,
			product: NaN,
			quotient: NaN,
			average: NaN,
			min: NaN,
			max: NaN,
		};
	}

	const sum = a + b;
	const diff = a - b;
	const product = a * b;
	const quotient = b === 0 ? Infinity : a / b;
	const average = sum / 2;
	const min = Math.min(a, b);
	const max = Math.max(a, b);

	return { isValid, sum, diff, product, quotient, average, min, max };
}
