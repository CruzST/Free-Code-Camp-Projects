/*
	Function will get the total amount of cid in the array provided.
*/
function cashInDrawer(cid){
	let total = 0;
	cid.forEach(function(arrayPair){
		total += arrayPair[1];
	});
  return total.toFixed(2);
}

/*
	Function cretes an array of object pairs that will will be a clearer representation of whats in the cash register.
	This function will order the return array based on the order of the denom.
*/

function newRegister(cid, denom){
	let returnArr = []
	denom.forEach(function(pair){
	    cid.forEach(function(subArray){
	    	if (pair.name == subArray[0]){
	        	let pairObj = {
					name: subArray[0],
					amount: 0,
					value: pair.val
				}
				let cidAmt = subArray[1];
	        	while (cidAmt > 0){
	          		cidAmt = Math.round(cidAmt * 100) / 100;
						cidAmt -= pair.val;
						pairObj.amount++;
				}
				returnArr.push(pairObj);
	      	}
	    });
	});
	return returnArr;
}


/*
	MAIN SOLUTION
*/

function checkCashRegister(price, cash, cid){

    // Create a denomination, for the purposes of this project it is the same. Other wise you would define it outside of the function
	var denom = [
  		{ name: 'ONE HUNDRED', val: 100.00},
  		{ name: 'TWENTY', val: 20.00},
  		{ name: 'TEN', val: 10.00},
  		{ name: 'FIVE', val: 5.00},
  		{ name: 'ONE', val: 1.00},
  		{ name: 'QUARTER', val: 0.25},
  		{ name: 'DIME', val: 0.10},
  		{ name: 'NICKEL', val: 0.05},
  		{ name: 'PENNY', val: 0.01}
	];

    // Variables
	let change = cash - price;
	let cashInRegister = cashInDrawer(cid);
	let outputObj = {
		status: null,
		change: []
	}

	// handle the closed scenerio, exact change
	if (change == cashInRegister) {
		outputObj.status = 'CLOSED';
		outputObj.change = cid;
		return outputObj;
	}

	// handle the not enough in register
	if (change > cashInRegister) {
		outputObj.status = 'INSUFFICIENT_FUNDS';
		return outputObj;
	}

    // Otherwise you can attempt to give change.

	// create a new register, an array of objects that have the following attributes
    // name, amount, value
	let register = newRegister(cid, denom);
	let resultArr = [];

		
    // iterate over each denom object and attempt to handle change with the given denoms. it will effectively check each denomination and their amounts.
	register.forEach(function(denomObj){
        // the array that will hold our array pair
        let resultArrPair = [];

        // check if the current denom is useable
        if (change / denomObj.value > 1){
            // set up the array we defined
            resultArrPair.push(denomObj.name);
            resultArrPair.push(0);

            // While loop that will begind to handle the change while keeping tabs of what denom/amount has been used up
			while (change / denomObj.value >= 1 && denomObj.amount > 0){
				change -= denomObj.value;
				denomObj.amount--;
				resultArrPair[1] += denomObj.value;
                change = Math.round(change * 100) / 100;
			}

            // push the pair to the result array
			resultArr.push(resultArrPair);
      }
	});

    // if there is still change, no good
	if (change > 0) {
		outputObj.status = 'INSUFFICIENT_FUNDS';
		return outputObj; 
	}

	// good
	outputObj.status = 'OPEN';
	outputObj.change = resultArr;
	return outputObj;

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])