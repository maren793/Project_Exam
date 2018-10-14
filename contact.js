// Validate Form

    
    
document.getElementById("submitForm").addEventListener("click", function(){

	var firstName = document.getElementById('firstName').value;
	var isFirstNameValid = validateName(firstName);
    
    var lastName = document.getElementById('lastName').value;
	var isLastNameValid = validateLastName(lastName);
    
    var emailAddress = document.getElementById('email').value;
	var isEmailAddressValid = validateEmail(emailAddress);
    
    
    if(!isFirstNameValid){
		document.getElementById('firstNameError').style.display = "block";
        
	}
    
    if(!isLastNameValid){
		document.getElementById('lastNameError').style.display = "block";
        
	}
    
    if(!isEmailAddressValid){
		document.getElementById('emailError').style.display = "block";
        
	}
  
   
});
    

  
    
    
    
    
    function validateName(name){
	if(name === ""){
		return false;
	}
	else{
		document.getElementById('firstNameError').style.display = "none";
		return true;
	}

}
    
    function validateLastName(lastName){
	if(lastName === ""){
		return false;
	}
	else{
		document.getElementById('lastNameError').style.display = "none";
		return true;
	}
	
}

    function validateEmail(email){
	 var emailAddressRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	 if(email.match(emailAddressRegex)){
		document.getElementById('emailError').style.display = "none";
		return true;
	  }
	 else{
		return false;
	 }

}
    