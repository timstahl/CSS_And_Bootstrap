	
	//Twitter
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
	{js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 
	'script', 'twitter-wjs');

  //facebook link
  (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    
  
  //Google Maps 

 
	function initMap() {
  var loveland = {lat: 40.4075954, lng: -105.130962};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: loveland
    
  });
  var marker = new google.maps.Marker({
    position: loveland,
    map: map
  });
}



$(document).ready(function(){
	
	//Smooth Scrolling
      var $root = $('html, body');

      $('.navbar-nav a').click(function() {
       var href = $.attr(this, 'href');

        if (href != undefined && href != '#') {
         $root.animate({
          scrollTop: $(href).offset().top
          }, 500, function () {
          window.location.hash = href;
          });
        }

          return false;
          });
    

 
    //Jquery Script for ToolTips
      $(function () {
      $('#html-acro').tooltip();
      });
    

      $(function () {
      $('#css-acro').tooltip();
      });
    
    //Event Handlers

    //Turns Message Box Background Silver when User clicks
    $("#message-box").on("click", function() {
    	$("#message-box").css("background", "#C0C0C0");
    });

    //Shows Clicked in Console when User Clicks
    $("#button").on("click", function() {
    	console.log("clicked");
    	return false;
  	});
    	
    //Show USer Comments from Message Box in Console and Hides Message Box when submitted
   	// and turns border red when user tries submitting empty submission
    $("#button").on("click", function() {
  		var comment = $('#message-box').val();
  		console.log(comment);
  		$('#visible-comment').html(comment);

    		if(comment === ""){
    			$("#message-box").css("border", "2px solid red");
    		} else {
    			$("#message-box").hide();
    		};
    		
    			return false;
		});



    //Implements a running character count
    $("#message-box").on("keyup", function() {
    	console.log("keyup happened");
    	var charCount = $("#message-box").val().length;
    	console.log(charCount);
    	$("#charCount").html(charCount);

    		if(charCount > 50) {
    			$("#charCount").css("color", "red");
    		} else {
    			$("#charCount").css("color","orange");
    		};
			
			});
    


    //JQuery Script For Button ToolTip
      $(function () {
      $('[data-toggle="tooltip"]').tooltip();
      });

    //WORK SECTION ******>
    //*******************>

    for(var i = 0; i < work.length; ++i) {
    	$("#work").append("\
    		<div class='col-sm-6 col-md-3'>\
      	  <a href='#' class='work-img'>\
      			<img class='img-responsive' src=' " + work[i].pic + " '>\
      			<span class='info'><p class='proj-title'>.</p>" + work[i].title + "</span>\
    			</a>\
  			</div>\
				");
    	
    	var images = $(".img-responsive");

    	if (i % 2 === 0) {
    	$(images[i]).css("border", "2px solid salmon");
    } else {
    	$(images[i]).css("border", "2px solid DodgerBlue");
    	}

    		}
    	//Mouseover on Work Project
    	$(".work-img").mouseenter(function(){
  		$(".info", this).show();
			}).mouseleave(function(){
  		$(".info", this).hide();
			});

    
    	});

      


  
	

