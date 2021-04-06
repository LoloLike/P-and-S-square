document.querySelector('.S').onclick = function(){
	let num1 = document.querySelector(".num1").value;
	num1 = parseInt(num1);
	alert('S = ' + num1 * num1)
};

document.querySelector('.P').onclick = function(){
	let num1 = document.querySelector(".num1").value;
	num1 = parseInt(num1);
	alert('P = ' + (num1 + num1) * 2)
};