function Franchise (locFranchise, timeOpen, timeClose, minCust_perHr, maxCust_perHr, avgNumDonuts_perCust, hrsOperation){
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
	  //averages to output to console
	  this.averages = function(hrs) {
	  	var perHrArray = [];
	  	var newArray = [];
	  	var twoDecimalsArray = [];
	  	var elAdd = 0;
	  	var donutsPerHr_dailyAvg;
	  	var totalDonuts_perDay;
	  	hrs = this.hrsOperation();

	  	for(var i = 0; i < hrs; i++) {
	  		perHrArray.push(this.randNumCust());
	  	}
	  	console.log('Customers Per Hour: ' + perHrArray);
	  	for(var i = 0; i < perHrArray.length; i++) {
	  		newArray.push(perHrArray[i] * this
	  			.avgNumDonuts_perCust);
	  	}
	  	//console.log(newArray);
	  	for(var i = 0; i < newArray.length; i++) {
	  		twoDecimalsArray.push(parseInt(newArray[i].toFixed(2)));
	  	}	
	  	console.log('Donuts Per Hour: ' + twoDecimalsArray);
	  	for(var i = 0; i < twoDecimalsArray.length; i++) {
	  		elAdd += twoDecimalsArray[i];
	  		//console.log(elAdd);
	  	}	
	  	console.log('Daily Total Donuts: ' + elAdd);
	  	donutsPerHr_dailyAvg = elAdd / twoDecimalsArray.length;
	  	console.log('Daily Avg Donuts Per Hour: ' + (parseInt(donutsPerHr_dailyAvg.toFixed(2))));

	  	return "";
	  }

	  this.stats = function(name) {
	  	console.log('>>> ' + this.franchiseLoc);
	  	console.log('Hours Open Each Day: ' + this.hrsOperation());
	  	console.log('Min Number of Customers Per Hour: ' + this.minCust_perHr);
	  	console.log('Max Number of Customers Per Hour: ' + this.maxCust_perHr)
	  	console.log('Avg Donuts Per Customer: ' + this.avgNumDonuts_perCust);	
	  	console.log(this.averages());
	  }
	}
	var downtown = new Franchise('Downtown', 7, 18, 8, 43, 4.50);
	var capitolHill = new Franchise('Capitol Hill', 7, 18, 4, 37, 2.00);
	var southLakeUnion = new Franchise('South Lake Union', 7, 18, 9, 23, 6.33);
	var wedgewood = new Franchise('Wedgewood', 7, 18, 2, 28, 1.25);
	var ballard = new Franchise('Ballard', 7, 18, 8, 58, 3.75);


	downtown.stats();
	capitolHill.stats();
	southLakeUnion.stats();	
	wedgewood.stats();
	ballard.stats();