const makeChange = (c) => {
  // your name here
		let num = parseInt(c);
	let output = {};
   let unit = {
	q: 25,
	d: 10,
	n: 5,
	p: 1
    };
	for(let key in unit){
		let curr = unit[key];
		output[key] = Math.floor(num / curr);
		num = num % curr;
	}
	return output;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
