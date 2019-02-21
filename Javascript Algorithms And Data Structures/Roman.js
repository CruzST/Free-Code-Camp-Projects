function convertToRoman(num) { 

	// Create 2 arrays that hold all the possible roman numerals and their decimal equivalents.
	let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let romanNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

	// A variable to hold the final return string
	let convertedNum = '';

	// Iterate over each element in the decimal array, pushing it to the string,
	// and subtracting it from the number.
	for (let i = 0; i < decimal.length; i++){
		while (decimal[i] <= num){
			convertedNum += romanNum[i];
			num -= decimal[i];
		}
	}
	return convertedNum;
}