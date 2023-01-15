$(".banner").click(() => {
  $("h1").text("Have a Good Time!");
});

$(".button").click(() => {
  // if ($(".hiddenContainer").attr("style")) {
  //   $(".hiddenContainer").show();
  // } else {
  //   $(".hiddenContainer").hide();
  // }
  $(".hiddenContainer").toggle();
});
