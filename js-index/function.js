var err11=err12="err";

$(function() {
	var patt5 = new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}");
	var patt6 = new RegExp("[Rr][Dd][Vv][A-Za-z]{2}[0-9]{6}");
    $("body").on("input focusout", "#rdv_no", function() {
        var temp = $('#rdv_no > input').val();
		if ((patt6.exec(temp) != temp && patt5.exec(temp) != temp) || temp==""){
			$(this).addClass("error");
			err11 = "err";
		}
		else{
			$(this).removeClass("error");
			err11 ="";
		}
		}).on("input focusout", "#password", function() {
        var temp = $('#password > input').val();
		if ( temp==""){
			$(this).addClass("error");
			err12="err";
		}
		else{
			$(this).removeClass("error");
			err12="";
		}
		});
});


$(function() {
    $("body").on("input focusout", ".form-control", function() {
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
					$("#tab-1 > .form_field").html("<h4>You have been successfully logged in.</h4><br><br><br>");
					setTimeout(function(){location.reload(true)},2000);
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


$(function() {
	$("body").on("focus", "#dob", function() {
        $("#dob > input").attr("type","date");
        $("#dob > input").attr("min","1900-01-01");
        $("#dob > input").attr("max","2014-12-31");
    });
});

var err1=err3=err4=err5=err6=err7=err8=err9=err10="err";
var err2="";

$(function() {
	var patt1 = new RegExp("[A-Za-z]+");
	var patt2 = new RegExp("[A-Za-z]*");
	var patt3 = new RegExp("[0-9]{10}");
	var patt4 = new RegExp(".{6,}");
	var patt5 = new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}");
	$("body").on("input focusout", "#firstname", function() {
        var temp = $('#firstname > input').val();
		if (patt1.exec(temp) != temp || temp==""){
			$(this).addClass("error");
			err1 = "err";
		}
		else{
			$(this).removeClass("error");
			err1 ="";
		}
		}).on("input", "#middlename", function() {
        var temp = $('#middlename > input').val();
		if (patt2.exec(temp) != temp){
			$(this).addClass("error");
			err2="err";
		}
		else{
			$(this).removeClass("error");
			err2="";
		}
		}).on("input focusout", "#lastname", function() {
        var temp = $('#lastname > input').val();
		if (patt1.exec(temp) != temp || temp==""){
			$(this).addClass("error");
			err3="err";
		}
		else{
			$(this).removeClass("error");
			err3="";
		}
		}).on("input focusout", "#email", function() {
        var temp = $('#email > input').val();
		if (temp==""){
			$(this).addClass("error");
			err4="err";
		}
		else{
			$('#email').removeClass("error");
			err4="";
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
					if (result == "exists"){
						$('#email').addClass("error");
						err4="err";
					}
					else if (result == "invalid"){
						$('#email').addClass("error");
						err4="err";
					}
					else{
						$('#email').removeClass("error");
						err4="";
					}
				}
			}
			xmlhttp.open("POST","../email-check.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("&email="+temp);
		}
		}).on("input focusout", "#mobile", function() {
        var temp = $('#mobile > input').val();
		if (patt3.exec(temp) != temp || temp==""){
			$(this).addClass("error");
			err5="err";
		}
		else{
			$('#mobile').removeClass("error");
			err5="";
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
					if (result == "exists"){
						$('#mobile').addClass("error");
						err5="err";
					}
					else{	
						$('#mobile').removeClass("error");
						err5="";
					}
				}
			}
			xmlhttp.open("POST","../mobile-check.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("&mobile="+temp);
		}
		}).on("input focusout", "#dob", function() {
        var temp = $('#dob > input').val();
		if (temp == ""){
			$(this).addClass("error");
			err6="err";
		}
		else if (!((temp >= "1900-01-01" && temp <= "2014-12-31") || (temp >= "01-01-1990" && temp <= "31-12-2014"))){
			$(this).addClass("error");
			err6="err";
		}
		else{
			$(this).removeClass("error");
			err6="";
		}
		}).on("input focusout", "#gender", function() {
        var temp = $('#gender > select').val();
		if (temp==""){
			$(this).addClass("error");
			err7="err";
		}
		else{
			$(this).removeClass("error");
			err7="";
		}
		}).on("input focusout", "#college", function() {
        var temp = $('#college > select').val();
		if (temp=="other"){
			$("#college > input").attr("hidden",false);
			$("#college > input").addClass("form-control");
        var temp1 = $('#college > input').val();
		}
		if (temp=="" || (temp=="other" && temp1=="")){
			$(this).addClass("error");
			err8="err";
		}
		else{
			$(this).removeClass("error");
			err8="";
		}
		}).on("input focusout", "#pass", function() {
        var temp = $('#pass > input').val();
		if (patt4.exec(temp) != temp || temp==""){
			$(this).addClass("error");
			err9="err";
		}
		else{
			$(this).removeClass("error");
			err9="";
		}
		}).on("input focusout", "#confpass", function() {
        var temp = $('#confpass > input').val();
		if (($("#pass > input").val() != temp)){
			$(this).addClass("error");
			err10="err";
		}
		else{
			$(this).removeClass("error");
			err10="";
			$("#btn-register").attr("disabled", false);
		}
		});
});


$(function() {
    $("body").on("input focusout", ".form-control", function() {
        if (err1=="" && err2=="" && err3=="" && err4=="" && err5=="" && err6=="" && err7=="" && err8=="" && err9=="" && err10==""){
			$("#btn-register").attr("disabled", false);
		}
		else{
			$("#btn-register").attr("disabled", true);
		}
	});
});


$(function(){
	$("#btn-register").click(function(){
		$("#popupimage").show();
		var firstname = $("#firstname > input").val();
		var middlename = $("#middlename > input").val();
        var lastname = $("#lastname > input").val();
        var email = $("#email > input").val();
        var mobile = $("#mobile > input").val();
        var dob = $("#dob > input").val();
        var gender = $("#gender > select").val();
        var college = $("#college > select").val();
        var pass = $("#pass > input").val();
		if (college=="other"){
			college = $("#college > input").val();
		}
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
				$("#tab-2 > .form_field").html("<h4>"+result+"</h4>");
				$("#popupimage").hide();
			}
		}
		xmlhttp.open("POST","../register-proc.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("&firstname="+firstname+"&middlename="+middlename+"&lastname="+lastname+"&email="+email+"&mobile="+mobile+"&dob="+dob+"&gender="+gender+"&college="+college+"&pass="+pass);
	});
	
});