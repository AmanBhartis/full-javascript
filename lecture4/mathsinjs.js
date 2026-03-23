// Math object and its properties/examples
console.log('Math.PI:', Math.PI);
console.log('Math.E:', Math.E);
console.log('Math.LN2:', Math.LN2);
console.log('Math.LN10:', Math.LN10);
console.log('Math.LOG2E:', Math.LOG2E);
console.log('Math.LOG10E:', Math.LOG10E);
console.log('Math.SQRT1_2:', Math.SQRT1_2);
console.log('Math.SQRT2:', Math.SQRT2);

// Math methods examples
console.log('Math.abs(-7):', Math.abs(-7));
console.log('Math.ceil(4.2):', Math.ceil(4.2));
console.log('Math.floor(4.8):', Math.floor(4.8));
console.log('Math.round(4.5):', Math.round(4.5));
console.log('Math.max(1, 5, 3):', Math.max(1, 5, 3));
console.log('Math.min(1, 5, 3):', Math.min(1, 5, 3));
console.log('Math.pow(2, 3):', Math.pow(2, 3));
console.log('Math.sqrt(16):', Math.sqrt(16));
console.log('Math.cbrt(27):', Math.cbrt(27));
console.log('Math.random():', Math.random());
console.log('Math.trunc(4.9):', Math.trunc(4.9));
console.log('Math.sign(-10):', Math.sign(-10));
console.log('Math.exp(1):', Math.exp(1));
console.log('Math.expm1(1):', Math.expm1(1));
console.log('Math.log(10):', Math.log(10));
console.log('Math.log2(8):', Math.log2(8));
console.log('Math.log10(100):', Math.log10(100));
console.log('Math.sin(Math.PI/2):', Math.sin(Math.PI/2));
console.log('Math.cos(0):', Math.cos(0));
console.log('Math.tan(Math.PI/4):', Math.tan(Math.PI/4));
console.log('Math.asin(1):', Math.asin(1));
console.log('Math.acos(1):', Math.acos(1));
console.log('Math.atan(1):', Math.atan(1));
console.log('Math.atan2(1, 1):', Math.atan2(1, 1));
console.log('Math.hypot(3, 4):', Math.hypot(3, 4));
console.log('Math.clz32(1):', Math.clz32(1));
console.log('Math.imul(2, 4):', Math.imul(2, 4));
console.log('Math.fround(1.337):', Math.fround(1.337));
console.log('Math.abs(-Infinity):', Math.abs(-Infinity));
console.log('Math.abs(NaN):', Math.abs(NaN));
console.log('Math.abs(null):', Math.abs(null));

// ramdom number guessing game betweeen 0 to 100 in js using math object

// Example: Calculate area and circumference of a circle from user input and show on website
let radius = prompt('Enter the radius of the circle:');
let area = Math.PI * Math.pow(radius, 2);
let circumference = 2 * Math.PI * radius;
console.log(`Area of the circle: ${area}`);
console.log(`Circumference of the circle: ${circumference}`);
