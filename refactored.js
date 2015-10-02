function getNumber() {

	function checkFizzBuzz(n) {
		if ((n % 3) === 0 && (n % 5) === 0) {
			$('body').append('<p>FizzBuzz</p>');
		}
		else if (n % 3 === 0) {
			$('body').append('<p>Fizz</p>');
		}
		else if (n % 5 === 0) {
			$('body').append('<p>Buzz</p>');
		}
		else {
			$('body').append('<p>' + n + '</p>');
		}
		//should I return something here?
	}

	var num = $('#number').val();

	if(!parseInt(num) || num % 1 !== 0) { // why does parseInt('597a') return falsy?
		console.log(num + ' is falsy');
		num = 0;
	}
	else {
		console.log(num + ' is truthy');	
		num = parseInt(num);
	}

	for(var i = 1; i <= num; i++) {
		checkFizzBuzz(i);
	}
}



$(document).ready(function(){
	$('button').click(getNumber); // add callback to clear input
});
