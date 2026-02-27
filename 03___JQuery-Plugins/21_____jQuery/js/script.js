$("#hide").click(function () {
  $(".box").hide(1000);
});
$("#show").click(function () {
  $(".box").show(1000);
});
$("#hideShow").click(function() {
  $(".box").toggle(1000)
})
$("#slideUp").click(function(){
  $(".box").slideUp(1000)
})
$("#slideDown").click(function(){
  $(".box").slideDown(1000)
})
$("#slideUpDown").click(function(){
  $(".box").slideToggle(1000)
})
$("#fadeOut").click(function(){
  $(".box").fadeOut(1000)
})
$("#fadeIn").click(function(){
  $(".box").fadeIn(1000)
})
$("#fadeOutIn").click(function(){
  $(".box").fadeToggle(1000)
})
$("#bouAso").click(function(){
  $(".box").addClass("hideBox")
})
$("#bouDowrao").click(function(){
  $(".box").removeClass("hideBox")
})
$("#bouAsoDowrao").click(function(){
  $(".box").toggleClass("hideBox")
})



