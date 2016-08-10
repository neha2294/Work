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
	
jQuery("#Save_Form").click(function() {
	var regex=/^([a-zA-Z]{3,8})$/;	//for fname
	var regex1=/\b[a-zA-Z]+\b/;		//for lname
	var regex2=/\b[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\b/; //for email
	var regex3=/^([a-zA-Z0-9!@#$%^&*()_]{8,20})$/;//for password
	var regex4=/^([a-zA-Z0-9_]{5,10})$/;   //for uname
	var regex5=/^([0-9]{5})$/;			//for empid


	var x=$("#fname").val();
    var x1=$("#lname").val();
	var x2=$("#email").val();
	var x3=$("#pass").val();
	var x4=$("#pass1").val();
	var x5=$("#uname").val();
	var x6=$("#empid").val();
	var x7=$("#loc").val();
	var x8=$("#about").val();
	
	
		
	
		/*if(regex.test(x)){
		$("#fmsg").html("Valid");
		}
		else{
		$("#fmsg").html("Not valid").css("color","red");
	}
	
		if(regex1.test(x1)){
		$("#lmsg").html("Valid");
		}
		else{
		$("#lmsg").html("Not valid").css("color","red");
	}*/
	
		if(regex2.test(x2)){
		$("#mail").html("Valid");
		}
		else{
		$("#mail").html("Not valid").css("color","red");
	}
	
		if(regex3.test(x3)){
		$("#passw").html("Valid");
		}
		else{
		$("#passw").html("Not valid").css("color","red");
	}
	
		if(x3 != x4){
		$("#message").html("Password and Confirm Password should match.").css("color","red");
		}
		
		if(regex4.test(x5)){
		$("#umsg").html("Valid");
		}
		else{
		$("#umsg").html("Not valid").css("color","red");
	}
	
		if(regex5.test(x6)){
		$("#emp").html("Valid");
		}
		else{
		$("#emp").html("Not valid").css("color","red");
	}


});	