$(document).ready(function(){
  $("button").mousedown(function(){
    alert("Thank you for your enquiry, we will be in touch soon!");
  });
});

$(document).ready(function(){
  $("#form, #form2, #form3").focus(function(){
  $(this).css("background-color", "#D3D3D3");
  });
});
