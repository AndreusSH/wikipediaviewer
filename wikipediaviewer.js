 $(document).ready(function(){

  //if I click the button after writing something, I should get the related wikipedia articles
  $("#go").on ("click", function(){
  var search = $("#search").val();
  //very important
//var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=text&section=0&page=" + search + "&callback=?"  
 
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json&callback=?"
    
    $.ajax({
      url: url,
      data:"GET",
      async: false,
      dataType: "json",
      success: function (data){
        
        for (var i=0; i<data[1].length; i++){
          
 $("#display").prepend("<li><a href="+data[3][i]+">"+ data[1][i]+"</a><p>"+ data [2][i]+ "</p></li>");
        }
//I need a loop to go through all the data I receive form the API
        
//The append() method inserts specified content at the end of the selected elements.
      },
      error: function(errorm){
        alert ("mistake")
      }
      
    })
    })
    });
 
