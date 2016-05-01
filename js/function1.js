$(document).ready(function(){
	$("#register-form").click(function(){
		$("#popupimage").show();
		$("#popup1").load("../register.php");
	});
});

var err11=err12="err";

$(function() {
	var patt5 = new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}");
	var patt6 = new RegExp("[Rr][Dd][Vv][A-Za-z]{2}[0-9]{6}");
    $("body").on("input focusout", "#rdv_no", function() {
        var temp = $('#rdv_no > input').val();
		if ((patt6.exec(temp) != temp && patt5.exec(temp) != temp) || temp==""){
			$('#rdvErr').html("RDV Number/Email ID (Doesn't match pattern)");
			$(this).addClass("floating-label-form-group-with-value error");
			err11 = "err";
		}
		else{
			$("#rdvErr").html("RDV Number/Email ID");
			$(this).removeClass("error");
			err11 ="";
		}
		}).on("input focusout", "#password", function() {
        var temp = $('#password > input').val();
		if ( temp==""){
			$('#passwordErr').html("Password (Required)");
			$(this).addClass("floating-label-form-group-with-value error");
			err12="err";
		}
		else{
			$("#passwordErr").html("Password");
			$(this).removeClass("error");
			err12="";
		}
		});
});


$(function() {
    $("body").on("input focusout", ".floating-label-form-group", function() {
		if (err11=="" && err12==""){
			$("#btn-login").attr("disabled", false);
		}
		else{
			$("#btn-login").attr("disabled", true);
		}
	});
});


$(function(){
	$("#btn-login").click(function(){
		$("#popupimage").show();
		$("#btn-login").attr("disabled", true);
		var rdv_no = $("#rdv_no > input").val();
        var password = $("#password > input").val();
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
				if (result == "Success"){
					$("#popup > #popupForm > .row > .col-lg-10").html("You have been successfully logged in.<br><br><br>");
					location.reload(true);
				}
				else{
					$("#success").html(result);
					$("#success").addClass("error");
				}
				$("#popupimage").hide();
			}
		}
		xmlhttp.open("POST","../login-proc.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("&rdv_no="+rdv_no+"&password="+password);
	});
});
