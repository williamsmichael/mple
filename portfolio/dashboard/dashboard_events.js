//get Franchise data from calculations.js
var franchise = getFranchise();
var downtown = franchise[0];
var capitolHill = franchise[1];
var southLakeUnion = franchise[2];
var wedgewood = franchise[3];
var ballard = franchise[4];

//-------------------------
//settings ~ future revision
//-------------------------

//-------------------------
//detailed data
//-------------------------

//clone HTML #template and input data for each location
var $section = $('#dataDetailed');
var $template = $('#template_dataDetailed');

franchise.forEach(function(shop, index) {
  
  var $table = $template.clone();

  //remove the id because we hide the actual template
  $table.removeAttr('id');
  
  $table.find('caption').text(shop.locFranchise);
  $table.attr('id', ('detailed' + shop.locFranchise).replace(/\s+/g, ''));

  var $rowCust = $table.find('.custPerHr > td');
  var $rowDonuts = $table.find('.donutsPerHr > td');
  var cust = shop.custPerHr();
  var donuts = shop.donutsPerHr();
  $rowCust.each(function(cell, td) {
    $(td).text(cust[cell]);
  });
  $rowDonuts.each(function(cell, td) {
    $(td).text(donuts[cell]);
  });
  $section.append($table)

  // console.log($table);
});

//-------------------------
//summarized data
//-------------------------

//dynamically change total hrs open for each location
$('#hrsOpen td:nth-of-type(1)').text(downtown.hrsOperation());
$('#hrsOpen td:nth-of-type(2)').text(capitolHill.hrsOperation());
$('#hrsOpen td:nth-of-type(3)').text(southLakeUnion.hrsOperation());
$('#hrsOpen td:nth-of-type(4)').text(wedgewood.hrsOperation());
$('#hrsOpen td:nth-of-type(5)').text(ballard.hrsOperation());

//dynamically change total donuts sold for each location
$('#totalDonuts td:nth-of-type(1)').text(downtown.totalDonutsPerDay());
$('#totalDonuts td:nth-of-type(2)').text(capitolHill.totalDonutsPerDay());
$('#totalDonuts td:nth-of-type(3)').text(southLakeUnion.totalDonutsPerDay());
$('#totalDonuts td:nth-of-type(4)').text(wedgewood.totalDonutsPerDay());
$('#totalDonuts td:nth-of-type(5)').text(ballard.totalDonutsPerDay());

//dynamically change avg donuts per hr for each location
$('#avgDonuts td:nth-of-type(1)').text(downtown.avgDonutsPerHr());
$('#avgDonuts td:nth-of-type(2)').text(capitolHill.avgDonutsPerHr());
$('#avgDonuts td:nth-of-type(3)').text(southLakeUnion.avgDonutsPerHr());
$('#avgDonuts td:nth-of-type(4)').text(wedgewood.avgDonutsPerHr());
$('#avgDonuts td:nth-of-type(5)').text(ballard.avgDonutsPerHr());

//-------------------------
//checkboxes
//-------------------------

//detailed data variables
var detailedDowntown = document.getElementById("detailedDowntown");
var detailedCapitolHill = document.getElementById("detailedCapitolHill");
var detailedSouthLakeUnion = document.getElementById("detailedSouthLakeUnion");
var detailedWedgewood = document.getElementById("detailedWedgewood");
var detailedBallard = document.getElementById("detailedBallard");

var optDetailedDowntown = document.getElementById("optDetailedDowntown");
var optDetailedCapitolHill = document.getElementById("optDetailedCapitolHill");
var optDetailedSouthLakeUnion = document.getElementById("optDetailedSouthLakeUnion");
var optDetailedWedgewood = document.getElementById("optDetailedWedgewood");
var optDetailedBallard = document.getElementById("optDetailedBallard");

//detailed data unhide with the checkbox
$(optDetailedDowntown).change(function(){
  if($(this).prop("checked")) {
    $(detailedDowntown).fadeIn();
  } else {
    $(detailedDowntown).fadeOut();
  }
});
$(optDetailedCapitolHill).change(function(){
  if($(this).prop("checked")) {
    $(detailedCapitolHill).fadeIn();
  } else {
    $(detailedCapitolHill).fadeOut();
  }
});
$(optDetailedSouthLakeUnion).change(function(){
  if($(this).prop("checked")) {
    $(detailedSouthLakeUnion).fadeIn();
  } else {
    $(detailedSouthLakeUnion).fadeOut();
  }
});
$(optDetailedWedgewood).change(function(){
  if($(this).prop("checked")) {
    $(detailedWedgewood).fadeIn();
  } else {
    $(detailedWedgewood).fadeOut();
  }
});
$(optDetailedBallard).change(function(){
  if($(this).prop("checked")) {
    $(detailedBallard).fadeIn();
  } else {
    $(detailedBallard).fadeOut();
  }
});

