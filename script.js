function main(a = 3, b = 3, func) {
    let result =sum(a, b);
	return typeof func === "function"? func(result): result;
}

function sum(a, b) { 
        return a + b; 
    }

function mult(x) {
	return x *= 100;
}
    
console.log(main(4, 3, mult))

