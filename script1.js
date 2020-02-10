
$(document).ready(function () {

   $("button").mouseenter(function () {
      $("button").removeClass('makeRed').addClass('makeBorder');
   });
   $("button").mouseleave(function () {
      $("button").removeClass('makeBorder').addClass('makeRed');
   });


}); 