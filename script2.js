$(document).ready(function(){
$(function(){
	var $valform=$("#validation");
	$.validator.addMethod("noSpace", function(value, element){
		return value == ''|| value.trim().length!=0
     
	}, "Spaces are not allowed");
    
    

	if($valform.length){
		$valform.validate({
			rules:{

			title:{
				required:true    
			},
			fname:{
				required:true,
				noSpace:true,
				lettersonly:true,
				minlength:5,
				maxlength:30,
				lettersonly:true
			},
			lname:{
				required:true,
				noSpace:true,
				minlength:2,
				maxlength:30

			},
			position:{
				required:true
			},
			company:{
				required:true,
				noSpace:true
			},
			businessarea:{
				required:true,
				noSpace:true
			},
			employee:{
				required:true
			},
			street:{
				required:true,
				noSpace:true
			},
			adinfo:{
				required:true,
				noSpace:true
			},
			zipcode:{
				required:true,
				noSpace:true,
				digits:true
			},
			place:{
				required:true
			},
			country:{
				required:true
			},
			code:{
				required:true,
				noSpace:true,
				digits:true
			},
			phno:{
				required:true,
				noSpace:true,
				digits:true,
				minlength:10,
				maxlength:10
			},
			email:{
				required:true,
				email:true,
				noSpace:true
			}
			
			

			

			



			},
			messages:{
				title:{
				    required:"please select your title feild"
				},
				fname:{
				    required:"please enter your first name",
				    minlength:"fist name should be minimum of 5 characters",
				    maxlength:"this feild should not exceed more than 30 characters",
				    lettersonly:"numeric values are not allowed"

			    },
			    lname:{
				    required:"please enter your last name",
				    minlength:"last name should be of atleast 2 characters",
				    maxlength:"this feild should not exceed more than 30 characters"
			    },
			    position:{
				    required:"please select your position"
			    },
			    company:{
				    required:"please enter your company name"
			    },
			    businessarea:{
				    required:"please enter your businessarea"
			    },
			    employee:{
				    required:"please select your feild"
			    },
			    street:{
				    required:"please enter your street name"
			    },
			    adinfo:{
				    required:"please enter your additional information"
			    },
			    zipcode:{
				    required:"please enter your zipcode",
				    digits:"only numericals are allowed"
			    },
			    place:{
				    required:"please select your place"
			    },
			    country:{
				    required:"please select your country"
			    },
			    code:{
				    required:"please enter your code",
				    digits:"only numericals are allowed"
			    },
			    phno:{
				    required:"please enter your phone number",
				   
				    digits:"only numericals are allowed",
				    minlength:"phone number should be of atleast 10 digits",
				    maxlength:"This number should not contain more than 10 digits"

			    },
			    email:{
				    required:"please enter your email id",
				    email:"please enter valid email"
			    }
			
				
			},
			submitHandler:function(form) {
				form.submit();
			}


		});
	}
});
});