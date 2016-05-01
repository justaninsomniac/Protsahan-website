var patt4 = new RegExp(".{6,}");
var err13=err14=err15=err16="err";
$(function() {
    $("body").on("input focusout", "#curr_pass", function() {
        var temp = $('#curr_pass > input').val();
		if ( temp==""){
			$('#curr_pass > label').html("Current Password Error (Required)");
			$(this).addClass("floating-label-form-group-with-value error");
			err13="err";
		}
		else{
			$("#curr_pass > label").html("Curent Password");
			$(this).removeClass("error");
			err13="";
		}
		}).on("input focusout", "#new_pass", function() {
        var temp = $('#new_pass > input').val();
		if (patt4.exec(temp) != temp || temp==""){
			$('#new_pass > label').html("New Password Error (Minimum 6 characters)");
			$(this).addClass("floating-label-form-group-with-value error");
			err14="err";
		}
		else{
			$("#new_pass > label").html("New Password");
			$(this).removeClass("error");
			err14="";
		}
		}).on("input focusout", "#conf_pass", function() {
        var temp = $('#conf_pass > input').val();
		if (($("#new_pass > input").val() != temp)){
			$('#conf_pass > label').html("Confirm Password Error (Passwords don't match!)");
			$(this).addClass("floating-label-form-group-with-value error");
			err15="err";
		}
		else{
			$("#conf_pass > label").html("Confirm Password");
			$(this).removeClass("error");
			err15="";
		}
		}).on("input focusout", "#regemail", function() {
        var temp = $('#regemail > input').val();
		if (temp==""){
			$('#regemail > label').html("Email Address Error (Required field)");
			$(this).addClass("floating-label-form-group-with-value error");
			err16="err";
			$("#resetpass").attr("disabled", true);
		}
		else{
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var result = xmlhttp.responseText;
					if (result != "exists"){
						$('#regemail > label').html("Email Address Error (Email Doesn't Exist)");
						$('#regemail').addClass("floating-label-form-group-with-value error");
						err16="err";
						$("#resetpass").attr("disabled", true);
					}
					else{	
						$("#regemail > label").html("Email Address");
						$('#regemail').removeClass("error");
						err16="";
						$("#resetpass").attr("disabled", false);
					}
				}
			}
			xmlhttp.open("POST","../email-check.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("&email="+temp);
		}
		});
});


$(function() {
    $("body").on("input focusout", ".floating-label-form-group", function() {
		if (err13=="" && err14=="" && err15==""){
			$("#changepass").attr("disabled", false);
		}
		else{
			$("#changepass").attr("disabled", true);
		}
    });
});


$(function(){
	$("#changepass").click(function(){
		$("#popupimage").show();
		$("#changepassword > form").submit();
		$("#popupimage").hide();
	});
	
});

$(function(){
	$("#resetpass").click(function(){
		$("#popupimage").show();
		var regemail = $("#regemail > input").val();
		$("#resetpass").attr("disabled", true);
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var result = xmlhttp.responseText;
				$("#resetpassword").html(result);
				$("#popupimage").hide();
			}
		}
		xmlhttp.open("POST","../reset-proc.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("&regemail="+regemail);
	});
	
});