jQuery("#Reset_Form").click(function() {
    
	var uname = jQuery("#uname").val("");
    var fname = jQuery("#fname").val("");
	var lname = jQuery("#lname").val("");
	var email = jQuery("#email").val("");
	var pass = jQuery("#pass").val("");
	var pass1 = jQuery("#pass1").val("");
	var empid = jQuery("#empid").val("");
	var loc = jQuery("#loc").val("");
	var about = jQuery("#about").val("");

	});
	
$("#uname").focusout(function check_uname(){

	var regex=/^([a-zA-Z0-9_]{5,10})$/;  
	var x=$("#uname").val();
	var x1=$("#umsg").text();

	if(x!=null){
		if(!(regex.test(x))){
			$("#umsg").text("Not valid").css("color","red");
		}
		else{
		$("#umsg").text("valid");
		}
	}
	else{
		$("#umsg").text("Fill details");
	}
});

$("#email").focusout(function check_email(){

	var regex=/\b[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\b/; //for email
	var x=$("#email").val();
	var x1=$("#mail").text();

	if(x!=null){
		if(!(regex.test(x))){
			$("#mail").text("Not valid").css("color","red");
		}
		else{
		$("#mail").text("valid");
		}
	}
	else{
		$("#mail").text("Fill details");
	}
});

$("#pass").focusout(function check_password(){

	var regex=/^([a-zA-Z0-9!@#$%^&*()_]{8,20})$/;//for password
	var x=$("#pass").val();
	var x1=$("#passw").text();

	if(x!=null){
		if(!(regex.test(x))){
			$("#passw").text("Not valid").css("color","red");
		}
		else{
		$("#passw").text("valid");
		}
	}
	else{
		$("#passw").text("Fill details");
	}
});

$("#pass1").focusout(function check_conpass(){


	var x=$("#pass").val();
	var x1=$("#pass1").val();
	
	if(x != x1){
		$("#message").html("Password and Confirm Password should match.").css("color","red");
		}
	else{
		$("#passw1").text("valid");
			$("#message").text("");
	}
});

$("#empid").focusout(function check_empid(){

	var regex=/^([0-9]{5})$/;			//for empid
	var x=$("#empid").val();
	var x1=$("#emp").text();

	if(x!=null){
		if(!(regex.test(x))){
			$("#emp").text("Not valid").css("color","red");
		}
		else{
		$("#emp").text("valid");
		}
	}
	else{
		$("#emp").text("Fill details");
	}
});	
	

jQuery("#Save_Form").click(function() {
	var x1=$("#uname").val();
	var x2=$("#email").val();
	var x3=$("#pass").val();
	var x4=$("#pass1").val();
	var x5=$("#empid").val();
	var y1=$("#umsg").html();
	var y2=$("#mail").html();
	var y3=$("#passw").html();
	var y4=$("#passw1").html();
	var y5=$("#emp").html();
	
	if(x1!=null && y1=="valid" && x2!=null && y2=="valid" && x3!=null && y3=="valid" && x4!=null && y4=="valid" && x5!=null && y5=="valid"){
		alert("Form submitted");
		
}
	else{
		alert("Form not submitted");
	}
});	

