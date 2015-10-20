$(document).ready(function(){


  $('#quote-btn').click(function(e){
    e.preventDefault();
    
    var chuckAPI = "http://api.icndb.com/jokes/random";
    $.getJSON(chuckAPI, function(data){
      var items = [];
      $.each (data, function( key, val){
        items.push(data);
        $(".quote-text").html('<p>' + data.value.joke + '</p>');
      });
     

    });
  });
});