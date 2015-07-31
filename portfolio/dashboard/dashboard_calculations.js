//Franchise constructor function
function Franchise (locFranchise, timeOpen, timeClose, minCust_perHr, maxCust_perHr, avgNumDonuts_perCust, hrsOperation) {
  this.locFranchise = locFranchise;
  this.timeOpen = timeOpen;
  this.timeClose = timeClose;
  this.minCust_perHr = minCust_perHr;
  this.maxCust_perHr = maxCust_perHr;
  this.avgNumDonuts_perCust = avgNumDonuts_perCust;

  //calc hrs of operation based on 24-hr day
  this.hrsOperation = function(open, close) {
  	return this.timeClose - this.timeOpen;
  }
  //generate rand num of cust based on min/max per hr
  this.randNumCust = function(min, max) {
  	return Math.floor(Math.random() * ((maxCust_perHr + 1) - minCust_perHr)) + minCust_perHr
  }

	var custPerHrArray = [];
	var donutsPerHrArray = [];
	var twoDecimalsArray = [];
	var elAdd = 0;
	var elAvg = 0;
 	var hrs = this.hrsOperation();

  //customers per hour based on min & max values
  this.custPerHr = function() {
  	for(var i = 0; i < hrs; i++) {
  		custPerHrArray.push(this.randNumCust());
  	}
  	return custPerHrArray;
  }

  //donuts purchased per hr 
  //based avg donuts purchased per customer
	this.donutsPerHr = function() {
		for(var i = 0; i < hrs; i++) {
  		donutsPerHrArray.push(Math.round(custPerHrArray[i] * this.avgNumDonuts_perCust));
  	}
  	return donutsPerHrArray;
	}
  
  //total donuts sold for the day
  this.totalDonutsPerDay = function() {
  	for(var i = 0; i < hrs; i++) {
  		elAdd += donutsPerHrArray[i];
  	}	
  	return elAdd;
  }

	//average donuts purchased per hour
	this.avgDonutsPerHr = function() {
		elAvg = Math.round(elAdd/hrs);
  	return elAvg;
  }
}

//Franchise instances
var downtown = new Franchise('Downtown', 7, 18, 8, 43, 4.50);
var capitolHill = new Franchise('Capitol Hill', 7, 18, 4, 37, 2.00);
var southLakeUnion = new Franchise('South Lake Union', 7, 18, 9, 23, 6.33);
var wedgewood = new Franchise('Wedgewood', 7, 18, 2, 28, 1.25);
var ballard = new Franchise('Ballard', 7, 18, 8, 58, 3.75);

//Franchise array 
arrayFranchise = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];
// console.log(arrayFranchise);

//get Franchise for events.js
function getFranchise() {
	return arrayFranchise;
}

// console.log(downtown.custPerHr());
// console.log(downtown.donutsPerHr());
// console.log(downtown.totalDonutsPerDay());
// console.log(downtown.avgDonutsPerHr());

