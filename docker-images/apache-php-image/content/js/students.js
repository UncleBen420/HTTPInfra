$(function(){
	
	console.log("Loading students");
	function loadNumber(){
		
		$.getJSON("/api/students/", function(numbers){
			console.log(numbers);
			var message = "No number given";
			if(numbers.length > 0){
				message = numbers[0].firstName + " " + numbers[0].lastName + " " + numbers[0].phoneNumber;
			}
			console.log(message);
			$(".skills").text(message);
		});
		
		
	};
	
	loadNumber();
	setInterval(loadStudents,2000);
	
});