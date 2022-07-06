function isEqual(num1, num2) { return num1===num2 }

// test cases:
// ===========
console.log( isEqual(4, 4), 'should be True' )
console.log( isEqual(0, 0), 'should be True' )
console.log( isEqual(-4, -4), 'should be True' )
console.log( isEqual(4, -4), 'should be False' )
console.log( isEqual(0, 1), 'should be False' )