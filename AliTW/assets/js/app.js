//slide show for tablet size
        init_jssor_slider1 = function (containerId) {

            var options = {
                $DragOrientation: 1,
                $SlideDuration: 500,
                $SlideSpacing: 0, 			
						
                $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2,
                $AutoCenter: 2,
                $Steps: 1
                }
            };

            var jssor_slider1 = new $JssorSlider$(containerId, options);
        };
init_jssor_slider1("slider1_container");
//Range Slider
var $RangeInput=$("#RangeOfYears");
$RangeInput.val(0);

//Open and close pricing plan in Tablet size screen
var $pricingTab=$(".setting");
$pricingTab.click(function(e) {
	var $WindowsSize= $(document).width();
	if($WindowsSize<991){
		$(this).children("div").nextAll("div").toggleClass("hide");
	}
});

//Change order in Page three
$( document ).ready( changeOrder());

function changeOrder(){
	var $WindowsSize= $(document).width();
	var $SliderContainer=$("#slider1_container");
	if($WindowsSize<991){
		//Change the order of image and explanation
		$("#pageThree p").insertBefore("#pageThree aside");
		
		//remove circle of pictures in Tablet size screen
		$("#pageFive .col-sm-4").hide();
		//show slider of pictures in Tablet size screen
		$SliderContainer.insertAfter("#pageFive h1");
		$SliderContainer.css("display","block");
		init_jssor_slider1("slider1_container");
		
		//close pricing plan in Tablet size screen
		$pricingTab.children("div").nextAll("div").addClass("hide");
}else{
	//Change the order of image and explanation
	$("#pageThree aside").insertBefore("#pageThree p");
	
	//remove slider of pictures in Desktop size screen
	$SliderContainer.css("display","none");
	//show circle of pictures in Desktop size screen
	$("#pageFive .col-sm-4").show();
	
	$pricingTab.children("div").nextAll("div").removeClass("hide");
}
};
//Tablet menu will be showed in Tablet size 
function ShowMenuTablet(){
	var $topDistance=$(window).scrollTop();
	var $WindowsSize= $(document).width();
	if($topDistance>70 && $WindowsSize<991){
		$("#TabletMenu").slideDown();
	}
	else{
		$("#TabletMenu").slideUp();
		$("#TabletMenuButton ul").hide();
	}
};
$(window).resize(changeOrder);

//scroll event for showing Menu in Tablet size
$(window).scroll(ShowMenuTablet);
//scroll event for remove list of menu in Tablet size when scrolling
$(window).scroll(function(){
	$("#TabletMenuButton ul").slideUp("fast");
});
//Add list to menu in tablet size
$("#TabletMenuButton button").click(function() {
    $("#TabletMenuButton ul").slideToggle("fast");
});

