$(document).ready(function(){

$('#d1').click(function() { 
		$(".menu_list ul li a:not('#d1')").css('border-bottom', 'none');
		$("#d1").css('border-bottom', '1px solid #555');
		$(".menu .container:not('#dish1')").hide(800);
		$("#dish1").show(800);
});

$('#d2').click(function() { 
		$(".menu_list ul li a:not('#d2')").css('border-bottom', 'none');
		$("#d2").css('border-bottom', '1px solid #555');
		$(".menu .container:not('#dish2')").hide(800);
		$("#dish2").show(800);
}); 


$('#d3').click(function() { 
		$(".menu_list ul li a:not('#d3')").css('border-bottom', 'none');
		$("#d3").css('border-bottom', '1px solid #555');
		$(".menu .container:not('#dish3')").hide(800);
		$("#dish3").show(800);
}); 

$('#d4').click(function() { 
		$(".menu_list ul li a:not('#d4')").css('border-bottom', 'none');
		$("#d4").css('border-bottom', '1px solid #555');
		$(".menu .container:not('#dish4')").hide(800);
		$("#dish4").show(800);
}); 

});