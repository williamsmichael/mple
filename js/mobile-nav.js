/* Preparation
 --------------------------------------- */
//Problem: It looks gross in smaller browser widths and devices
//Solution: Hide text links and swap them out with more appropriate navigation

/* Plan 
 --------------------------------------- */
//Create a <select></select> and append to #menu
//Cycle over menu links
	//Create an <option>
	//Option's value attribute is the href
	//Option's text is the text of the link name
	//Append option to select
//Create a button 
//Bind click to the button
	//Go to selected location
	//Modify CSS to hide links on small resolution and show button and select
	//Also hides select and button on larger widths(resolutions)
//Deal with .selected options depending on current page

/* Perform
 --------------------------------------- */
//Create a <select></select> and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
//to prevent future changes affecting the code such as the div to nav we use
$("#menu a").each(function() {
	var $anchor = $(this);
	//Create an <option>
	var $option = $("<option></option>");
	
	//Deal with .selected options depending on current page
//	if($anchor.parent().hasClass("selected")) {
    if($anchor.hasClass("selected")) {
		$option.prop("selected", true);
	}
	
	//Option's value attribute is the href
	$option.val($anchor.attr("href"));
	//Option's text is the text of the link name (option text = anchor text)
	$option.text($anchor.text());
	//Append option to select
	$select.append($option);
})

/*
//After further review decided it would be easier to just go to page after selection is made; valuable to mobile users

//Create a button 
var $button = $("<button>Go</button>");
$("#menu").append($button);
//Bind click to the button
$button.click(function() {
	//Go to selected location - now getting value of selected option
	//in JS we can change the value of the browser's location
	window.location = $select.val();
});
*/

//Bind change to the selection 
$select.change(function() {
	//Go to selected location - now getting value of selected option
	//in JS we can change the value of the browser's location
	window.location = $select.val();
});





