/*To Reset the form details*/
$("#Reset_Form").click(function() {
    
	var uname = jQuery("#uname").val("");
    var fname = jQuery("#fname").val("");
	var lname = jQuery("#lname").val("");
	var email = jQuery("#email").val("");
	var pass = jQuery("#pass").val("");
	var pass1 = jQuery("#cpass").val("");
	var empid = jQuery("#empid").val("");
	var loc = jQuery("#location").val("");
	var about = jQuery("#about").val("");
	
	/*To hide error messages*/	

	var umsg = jQuery("#umsg").hide();
	var mail = jQuery("#mail").hide();
	var passw = jQuery("#passw").hide();
	var message = jQuery("#message").hide();
	var emp = jQuery("#emp").hide();
	var fmsg = jQuery("#fmsg").hide();

});

/*To validate user name*/	
$("#uname").change(function check_uname(){

	var regex=/^([a-zA-Z0-9]{5,10})$/;  
	var x=$("#uname").val();
	var x1=$("#umsg").text();

	if(x!=null){
		if(!(regex.test(x))){
			$("#umsg").text("Minimum 5 characters");
		}
		else{
		$("#umsg").text("valid").hide();
		}
	}
	
});

/*To validate user email address*/	 
$("#email").change(function check_email(){

	var regex=/\b[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\b/; //for email
	var x=$("#email").val();
	var x1=$("#mail").text();

	if(x!=null){
		if(!(regex.test(x))){
			$("#mail").text("Enter Valid Email");
		}
		else{
		$("#mail").text("valid").hide();
		}
	}
	
});

/*To validate password*/	
$("#pass").change(function check_password(){

	var regex=/^([a-zA-Z0-9!@#$%^&*()_]{8,20})$/;//for password
	var x=$("#pass").val();
	var x1=$("#passw").text();

	if(x!=null){
		if(!(regex.test(x))){
			$("#passw").text("Minimum 8 characters");
		}
		else{
		$("#passw").text("valid").hide();
		}
	}
	
});

/*To validate confirm password*/	
$("#pass1").change(function check_conpass(){

	var x=$("#cpass").val();
	var x1=$("#cpass").val();
	
	if(x != x1){
		$("#message").html("Password and Confirm Password should match.").css("color","red");
		}
	else{
		$("#passw1").text("valid").hide();
			$("#message").text("").hide();
	}
});

/*To validate user employee id*/	
$("#empid").change(function check_empid(){

	var regex=/^([0-9]{5})$/;			//for empid
	var x=$("#empid").val();
	var x1=$("#emp").text();

	if(x!=null){
		if(!(regex.test(x))){
			$("#emp").text("Minimum 5 digits");
		}
		else{
		$("#emp").text("valid").hide();
		}
	}
	
});	

/*To validate first name*/	
$("#fname").change(function check_fname(){

	var regex= /^([a-zA-Z]{3,8})$/;		//for fname
	var x=$("#fname").val();
	var x1=$("#fmsg").text();

	if(x!=null){
		if(!(regex.test(x))){
			$("#fmsg").text("Minimum 3 characters");
		}
		else{
		$("#fmsg").text("valid").hide();
		}
	}
	
});	
	
/*To save user details*/	
$("#Save_Form").click(function() {
	var x1=$("#uname").val();
	var x2=$("#email").val();
	var x3=$("#pass").val();
	var x4=$("#pass1").val();
	var x5=$("#empid").val();
	var x6=$("#fname").val();
	var x7=$("#lname").val();
	var x8=$("#location").val();
	var x9=$("#about").val();
	var y1=$("#umsg").html();
	var y2=$("#mail").html();
	var y3=$("#passw").html();
	var y4=$("#cpassw").html();
	var y5=$("#emp").html();
	var y6=$("#fmsg").html();
	
	if(x1!=null && y1=="valid" && x2!=null && y2=="valid" && x3!=null && y3=="valid" && x4!=null && y4=="valid" && x5!=null && y5=="valid"){
		alert("Form submitted"+"\n"+"Username :" + x1 +"\n"+"Email :" + x2+"\n"+"First Name :" + x6+"\n"+"Last Name :" + x7+"\n"+"Employee Id :" + x5+"\n"+"Location :" + x8+"\n"+"About :" + x9);
		
	}
	else{
		alert("Form not submitted");
	}
});	
