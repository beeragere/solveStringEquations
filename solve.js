solveEquation = (equation) => {
	var eqLength = equation.length;
	var i = 0;
	var pivot, left, right, position;
	var leftNum, rightNum;
	//for /////////
	while(i < eqLength){
		if(equation[i] == '/'){
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


			equation = disintegrate(equation, ++left, right, leftNum/rightNum)
			i = 0;
		}
		i++;
	}
		//for ********
	i = 0;
	while(i < eqLength){
		if(equation[i] == '*'){
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


			equation = disintegrate(equation, ++left, right, leftNum*rightNum)
			i = 0;
		}
		i++;
	}

		//for ++++++
		i = 0;
	while(i < eqLength){ 
		if(equation[i] == '+'){
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

			equation = disintegrate(equation, ++left, right, leftNum+rightNum)
			i = 0;
		}
		i++;
	}
		//for -----
		i = 0;
	while(i < eqLength){
		if(equation[i] == '-'){
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


			equation = disintegrate(equation, ++left, right, leftNum-rightNum)
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


function findBracketsAndSolve(equation){
	var leftBracket, rightBracket, bracketCount;
	var eqLength, iterate;
	var slicedEquation, solved;

	//get the number of () in a given equation;
	eqLength = equation.length;
	iterate = 0;
	bracketCount = 0;
	while(iterate < eqLength){
		if(equation[iterate] == '('){
			bracketCount++;
		}
		iterate++;
	}

	while(bracketCount > 0){
		//get the innermost () in the equation;
		iterate = 0;
		while(iterate < eqLength){
			if(equation[iterate] == '('){
				leftBracket = iterate;
			}
			iterate++;
		}

		iterate = leftBracket;
		while((equation[iterate] != ')') && (iterate < eqLength)){
			iterate++;
		}
		rightBracket = iterate;


		slicedEquation = equation.slice(leftBracket+1, rightBracket);
		solved = solveEquation(slicedEquation);


		equation = disintegrate(equation, leftBracket, rightBracket+1, solved);
		bracketCount--;
	}

	equation = solveEquation(equation);

	return equation;
}


//actual calling of the functions;
var equation = "100/(100/5)/5";
equation = findBracketsAndSolve(equation); 

console.log("final equation is ", equation);
