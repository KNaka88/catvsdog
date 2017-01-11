$(function(){
  $(".barkmeow").click(function(){
    $("ul#dog").prepend("<li>BARK BARK!!</li>");
    $("ul#cat").prepend("<li>Meo~~w!!</li>");
  });

  //   $("#meow").click(function(){
  //   $("ul#cat").prepend("<li>Meo~~w!!</li>");
  //   $("ul#dog").prepend("<li>BARK BARK!!</li>");
  // });
});
