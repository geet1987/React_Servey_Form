function whitespacevalidation(){
   var firstname1 = document.getElementById('firstname').value;
if(firstname1.replace( /\s/, "").length <= 0){
   alert("no whitespace is allowed");
}


/*var firstname1 =document.getElementById('firstname').value;     
if (firstname1 == "")
{
alert("enter valid first name!");
return false;
}

var lastname1 =document.getElementById('lastname').value;
if (lastname1 == "")
{
alert("enter valid Last name!");
return false;
}*/
/*function whitespacevalidation() {
	var firstname = document.getElementById('firstname').value;
	var checkFirstName = /\s/g.test(firstname);
	if(firstname == '' || checkFirstName) {
		alert("Enter valid first name!");
		return false;			
	}
	
}*/
//////username validation/////
var username= document.getElementById('username').value;
var regEx = /^[A-Za-z0-9\s]+$/;
if(username == regEx){
//alert("wd");
   //}else{
    alert("enter valid username");
   }
   
   //////email validation//// 
   var  email = document.getElementById('email').value;
   var emailregex = /^([a-z 0-9\.-]+)+@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if(emailregex.test(email)){
      alert("valid");
}else{
   alert("Enter valid email!");
}

///phone number validation////
   var phoneno = document.getElementById('contact').value;
   //var con =/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
   if(phoneno.length<10 ||phoneno.length>10 ){
     alert("Enter valid contact!");

  // }else{
      alert("Enter valid contact");
   //}
}

}
//var firstname1 =document.getElementById('firstname').value;

//var firstname =text.match(/\s/g);
    
        // Check for white space
      //  if (firstname1) {
           // alert("Please Check Your Fields For Spaces");
           // return 'true';
       // }
 
