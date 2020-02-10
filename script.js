$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
   });
   $("p").on("click", function() {
      $("p").addClass('red-text');
   });
   $("h2").mouseover(function() {
      $("h2").addClass('blue-bg');
   });
   $("h2").mouseleave(function() {
      $("h2").removeClass('blue-bg');
   });
   $("h2").hover(function() {
      $(this).addClass('font-plus');
   })

   $("button").click(function() {
      $('#html_p').slideToggle('slow');
   })
   $("button").mouseenter(function() {
      $("button").fadeTo(1000, 0.5);
   });
   $("button").mouseleave(function() {
      $("button").fadeTo(1000, 1);
   });

}); 
