$(function() {
	$("body").on("focusin", "#img", function() {
        $(this).addClass("floating-label-form-group-with-value");
    });
	var wid1 = $("#google_play").width();
	$(".google_play").width(wid1);
	var wid2 = $("#app_store").width();
	$(".app_store").width(wid2);
});

$(document).ready(function(){
	$("#login-pop").click(function(){
		$("#popupimage").show();
		$("#popup").show();
		$("#popup1").load("../login.php");
	});
	$("#login-pop1").click(function(){
		$("#popupimage").show();
		$("#popup").show();
		$("#popup1").load("../login.php");
	});
	$("#logout").click(function(){
		$("#popupimage").show();
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				$("#popup").show();
				$("#popup1").load("../logout-message.php");
				$("#popupimage").hide();
				location.reload(true);
			}
		}
		xmlhttp.open("GET","../logout.php",true);
		xmlhttp.send();
	});
});
$(function(){
	$("#acco_request").click(function(){
		$("#popupimage").show();
		$("#popup").show();
		$("#popup1").load("accommodation_reg.php");
		$("#popupimage").hide();
	});
});
function pop_out() {
	$("#popup").hide();
	$("#popup1").html("");
}

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
	  pop_out();
  }   // escape key maps to keycode `27`
});

/* $(document).mouseup(function (e)
{
    var container = $("#popupForm");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        pop_out();
    }
}); */


$(function() {
    $("body").on("input", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});
