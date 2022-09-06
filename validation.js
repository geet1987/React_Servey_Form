function submitSurvey() { 
	var firstname = document.getElementById('first-name').value;
	var checkFirstName = /\s/g.test(firstname);
	
	var lastname = document.getElementById('last-name').value;
	var checkLastName = /\s/g.test(lastname);
	
	var username = document.getElementById('username').value;	
	var regExUsername = /^[a-z0-9]+$/i;
	
	var email = document.getElementById('email').value;
	var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
	
	var contact = document.getElementById('contact').value;
	
	var postal_code = document.getElementById('postal-code').value;
	
	if(firstname == '' || checkFirstName) {
		alert("Enter valid first name!");
		return false;			
	}
	else if(lastname == '' || checkLastName) {
		alert("Enter valid last name!");
		return false;			
	}
	else if(lastname == '') {
		alert("Enter valid username!");
		return false;			
	}
	
    else if(!username.match(regExUsername))  {
		alert("Enter valid username!");
      	return false;
    }
	
	else if(email == '' || !checkEmail) {
		alert("Enter valid email!");
		return false;			
	}
	
	else if(contact == '' || isNaN(contact) || contact.length!=10) {
		alert("Enter valid contact!");
		return false;			
	}
	
	else if(postal_code == '' || isNaN(postal_code) || postal_code.length!=6) {
		alert("Enter valid postal code!");
		return false;			
	}
	else { 
		alert("Submitted");
	}	
}