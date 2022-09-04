function whitespacevalidation(){

var firstname1 =document.getElementById('firstname').value;     
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
}

//var username=document.getElementById('username').value;
//var regEx = /^[A-za-Z0-9]+$/;
//if(username == regEx){
//alert("wd");
   //}else{
    //alert("enter valid username");
   //}
//var firstname1 =document.getElementById('firstname').value;

//var firstname =text.match(/\s/g);
    
        // Check for white space
      //  if (firstname1) {
           // alert("Please Check Your Fields For Spaces");
           // return 'true';
       // }
}
