$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$("#p1").click(function () {
   $("#ps1").modal('open');
});
$("#p2").click(function () {
   $("#ps2").modal('open');
});
$("#p3").click(function () {
   $("#ps3").modal('open');
});
$("#p4").click(function () {
   $("#ps4").modal('open');
});
$("#p5").click(function () {
   $("#ps5").modal('open');
});
$("#p6").click(function () {
   $("#ps6").modal('open');
});

$('.maparea').mouseover(function() {
    $('.maparea').addClass('shine');
}).mouseout(function(){
    $('.maparea').removeClass('shine');
});