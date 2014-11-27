$(document).ready( function(){

  $.get( "libWebsite.html", function( data ) {
    // Append the entire page into ID=content
    $( "#content" ).html( data );


    var locations = [];
    var availableComputers = [];
    var unavailableComputers = [];

    //Grabbing the html and adding it to arrays
    $( ".labstatsrow" ).find("a").each( function( i ){
        locations.push( $(this).text() );
    });

    $( ".labAva" ).each( function( i ){
        availableComputers.push( $(this).text() );
    });

     
    $( ".labInU" ).each( function( i ){
        unavailableComputers.push( $( this ).text() );
    });

    //Displaying it
    for(var i = 0; i < locations.length; i++) {
      $("#accordion").children("h3:nth-child("+(2*i-1)+")")
      .empty().append(locations[i] + " | Available Computers: " +
      availableComputers[i] + " | In use: " + unavailableComputers[i]);
    }
  });

  // Hiding the main page
  $("#content").hide();

  //setting the accordion to be collapsible
  $( "#accordion" ).accordion({
    collapsible: true
  });
  //setting the accordion to be collapsed when it starts
  $( "#accordion" ).accordion({
    active: false
  });
  //setting the icons
  $( "#accordion" ).accordion({ icons: { "header": "ui-icon-triangle-1-e", 
    "activeHeader": "ui-icon-triangle-1-s" } 
  });
  
});  
