$(document).ready(function(){
	for (var num = 1; num <= 100; num++) {
		if ((num % 3) === 0 && (num % 5) === 0) {
			$('body').append('<p>FizzBuzz</p>');
		}
		else if ((num % 3) === 0) {
			$('body').append('<p>Fizz</p>');
		}
		else if ((num % 5) === 0) {
			$('body').append('<p>Buzz</p>');
		}
		else {
			$('body').append('<p>' + num + '</p>');
		}		
	}
});