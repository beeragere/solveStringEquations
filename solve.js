solveEquation = (equation) => {
	var eqLength = equation.length;
	var i = 0;
	var pivot, left, right, position;
	var leftNum, rightNum;
	//for /////////
	while(i < eqLength){
		if(equation[i] == '/'){
			// console.log("found /");
			pivot = i;
			position = i;
			pivot++;

			while((checkSigns(equation[pivot]) == false) && (pivot < eqLength)){
				pivot++;
			}
			right = pivot;

			pivot = i;
			pivot--;

			while((checkSigns(equation[pivot]) == false) && (pivot >= 0)){
				pivot--;
			}
			left = pivot;

			leftNum = Number(equation.substring(position, left+1));
			rightNum = Number(equation.substring(position+1, right));

			// console.log([leftNum, rightNum]);

			equation = disintegrate(equation, ++left, right, leftNum/rightNum)
			// console.log(equation);
			i = 0;
		}
		i++;
	}
		//for ********
	i = 0;
	while(i < eqLength){
		if(equation[i] == '*'){
			// console.log("found *");
			pivot = i;
			position = i;
			pivot++;

			while((checkSigns(equation[pivot]) == false) && (pivot < eqLength)){
				pivot++;
			}
			right = pivot;

			pivot = i;
			pivot--;

			while((checkSigns(equation[pivot]) == false) && (pivot >= 0)){
				pivot--;
			}
			left = pivot;

			leftNum = Number(equation.substring(position, left+1));
			rightNum = Number(equation.substring(position+1, right));

			// console.log([leftNum, rightNum]);

			equation = disintegrate(equation, ++left, right, leftNum*rightNum)
			// console.log(equation);
			i = 0;
		}
		i++;
	}

		//for ++++++
		i = 0;
	while(i < eqLength){ 
		if(equation[i] == '+'){
			// console.log("found +");
			pivot = i;
			position = i;
			pivot++;

			while((checkSigns(equation[pivot]) == false) && (pivot < eqLength)){
				pivot++;
			}
			right = pivot;

			pivot = i;
			pivot--;

			while((checkSigns(equation[pivot]) == false) && (pivot >= 0)){
				pivot--;
			}
			left = pivot;

			leftNum = Number(equation.substring(position, left+1));
			rightNum = Number(equation.substring(position+1, right));

			// console.log([leftNum, rightNum]);

			equation = disintegrate(equation, ++left, right, leftNum+rightNum)
			// console.log(equation);
			i = 0;
		}
		i++;
	}
		//for -----
		i = 0;
	while(i < eqLength){
		if(equation[i] == '-'){
			// console.log("found -");
			pivot = i;
			position = i;
			pivot++;

			while((checkSigns(equation[pivot]) == false) && (pivot < eqLength)){
				pivot++;
			}
			right = pivot;

			pivot = i;
			pivot--;

			while((checkSigns(equation[pivot]) == false) && (pivot >= 0)){
				pivot--;
			}
			left = pivot;

			leftNum = Number(equation.substring(position, left+1));
			rightNum = Number(equation.substring(position+1, right));

			// console.log([leftNum, rightNum]);

			equation = disintegrate(equation, ++left, right, leftNum-rightNum)
			// console.log(equation);
			i = 0;
		}
		i++;
	}

	return equation;
}

checkSigns = (symbol) =>{
	if((symbol === '/') || (symbol === '-') ||  
	(symbol === '+') || (symbol === '*')){
		return true;
	}

	else{
		return false;
	}
}

function disintegrate(equation, left, right, replaceString){
	return (equation.substring(0, left) + replaceString +
	equation.substring(right, (equation.length)));
}


var equation = "10*100/10*5/5";
var equation = solveEquation(equation);


