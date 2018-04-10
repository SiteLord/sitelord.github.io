$(document).ready(function(){

$('#d1').click(function() { 
	if($("#dish1").css('display', 'none')) {
		$(".menu_list ul li a:not('#d1')").css('border-bottom', 'none');
		$("#d1").css('border-bottom', '1px solid #555');
		$(".menu .container:not('#dish1')").css('display', 'none');
		$("#dish1").css('display', 'block');
	}	
});

$('#d2').click(function() { 
	if($("#dish2").css('display', 'none')) {
		$(".menu_list ul li a:not('#d2')").css('border-bottom', 'none');
		$("#d2").css('border-bottom', '1px solid #555');
		$(".menu .container:not('#dish2')").css('display', 'none');
		$("#dish2").css('display', 'block');
	}	
}); 


$('#d3').click(function() { 
	if($("#dish3").css('display', 'none')) {
		$(".menu_list ul li a:not('#d3')").css('border-bottom', 'none');
		$("#d3").css('border-bottom', '1px solid #555');
		$(".menu .container:not('#dish3')").css('display', 'none');
		$("#dish3").css('display', 'block');
	}	
}); 

$('#d4').click(function() { 
	if($("#dish4").css('display', 'none')) {
		$(".menu_list ul li a:not('#d4')").css('border-bottom', 'none');
		$("#d4").css('border-bottom', '1px solid #555');
		$(".menu .container:not('#dish4')").css('display', 'none');
		$("#dish4").css('display', 'block');
	}	
}); 

});