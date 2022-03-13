$(".open , .openNow ").click(function () {
  $(".outBox").css("margin-left", "50%");
  $(".outBox").css("color", "white");
  $(".lamp").css("backgroundColor", "white");
  $(".light").css("margin-left","78px")
  $(".light").css("backgroundColor","white")
  $(".line").css("backgroundColor","white")
  $(".line").css("width","100px")
  



});
$(".close , .closeNow").click(function () {
  $(".outBox").css("margin-left", "0%");
  $(".outBox").css("color", "black");
  $(".lamp").css("backgroundColor", "black");
  $(".light").css("margin-left","0px")
  $(".light").css("backgroundColor","black")
  $(".line").css("backgroundColor","black")

});
