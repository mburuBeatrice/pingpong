$(document).ready(function(){
   var  store =[];
   var index;
   var form = $("form#form");
   var warning =$("small#warning");
   var ulresults =$("ul#results");
  $("#num").click(function(){
    $(this).val("");
    warning.text("");

  });
  form.submit(function(event){
    var inputnum = $("#num").val();
    if (inputnum!=""){
      inputnum=parseInt(inputnum);
      for(index=0; index<=inputnum;index++){
        store.push(index);
        ulresults.prepend("<li>"+game(store[index])+"</li>");
      }
      // warning.html(store.toString());



    }else{
      warning.text("Kindly add a number in the field Above");
    }


    event.preventDefault();
  });
  function game(num){
    if (num%15===0) {
      return "pingpong";
    }else if (num%5===0) {
      return "pong";
    }else if (num%3===0) {
      return "ping";
    }else{
      return num;  // warning.html(store.toString());
    }
  }
});
