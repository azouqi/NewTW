//code for training specialization Add and Remove
var $Slides=$(".FilterAside p a");
$Slides.click(function(e){
	e.preventDefault();
	$(this).parent('p').nextAll().slideToggle("slow");
	$(this).children(".glyphicon").toggleClass("glyphicon-minus glyphicon-plus");
});


//code for Filter result
var $windowCheckSize=$( window ).width();
if($windowCheckSize<768){
	var $FilterAside=$(".FilterAside");
	var $content=$(".Topic h2");
	var $chevron=$("<a href='#'><i class='glyphicon glyphicon-chevron-up upArrow'></i></a>");
	$content.append($chevron);
	$chevron.click(function(e){
		e.preventDefault();
		$FilterAside.slideToggle("slow");
		$(this).children(".glyphicon").toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
	});
	var $buttons=$("#buttons");
	$("#middle").before($buttons);
	//code for adding buttons (apply and clear)
	$("#Trainer").hide();
	var $divForButtons=$("<div id='addButtons'><button>Apply</button><button>Clear</button></div>");
	$("#Main").last().append($divForButtons);
};


//code for search database and get Json file and show it
var searchInput=$('#sInput');
var content=searchInput.val();
var buttons=$("#buttons");
searchInput.focus(function(){
	if(content==searchInput.val()){
	$(this).val("");
	}
	/*$(this).keyup(function(){
		var $name=$(this).val();
		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               var $test= xmlhttp.responseText;
			   console.log($test);
            }
        }
        xmlhttp.open("GET", "http://localhost/Ali/test.php?q=" + $name, true);
        xmlhttp.send();
	});
	*/
});

searchInput.blur(function(){
	if ($(this).val()==""){
		$(this).val(content);
	}
});
//code for slider
$(function() 
		 {
            $( "#slider-1" ).slider(
			{
               range:true,
               min: 1,
               max: 20,
			   step: 1,
               values: [ 1, 10 ],
               slide: function(event, ui) 
			   {
				var delay = function() 
				  {
					var handleIndex = $(ui.handle).data('index.uiSliderHandle');
					var label = handleIndex == 0 ? '#min' : '#max';
					$(label).html(ui.value).position({
						my: 'center top',
						at: 'center bottom',
						of: ui.handle,
						offset: "0, 10"
					});
				  };            
					// wait for the ui.handle to set its position
					setTimeout(delay, 5);
				}  
			}
			);
		}); 
		$('#min').html($('#slider-1').slider('values', 0)).position(
		{
		my: 'center top',
		at: 'center bottom',
		of: $('#slider-1 a:eq(0)'),
		offset: "0, 10"
		});

		$('#max').html($('#slider-1').slider('values', 1)).position(
		{
			my: 'center top',
			at: 'center bottom',
			of: $('#slider-1 a:eq(1)'),
			offset: "0, 10"
		});

