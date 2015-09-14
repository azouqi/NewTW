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
//Change order in Page three
$( document ).ready( changeOrder());

function changeOrder(){
	var $WindowsSize= $(document).width();
	var $SliderContainer=$("#slider1_container");
	if($WindowsSize<991){
		$("#pageThree p").insertBefore("#pageThree aside");
		$("#pageFive .col-sm-4").hide();
		$SliderContainer.css("display","block");
		init_jssor_slider1("slider1_container");
}else{
	$("#pageThree aside").insertBefore("#pageThree p");
	$SliderContainer.css("display","none");
}
};
$(window).resize(changeOrder);


//remove slide show from desktop and add to tablet size
